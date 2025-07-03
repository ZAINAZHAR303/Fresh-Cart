import os
import json
from typing import List, Dict
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel
import httpx

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
   CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API keys
aimlapi_key = os.getenv("AIMLAPI_KEY")
SERPAPI_KEY = os.getenv("SERPAPI_KEY")

if not aimlapi_key or not SERPAPI_KEY:
    raise ValueError("API keys are missing. Please check your .env file.")

# OpenAI wrapper for AIML API
class OpenAI:
    def __init__(self, base_url, api_key):
        self.base_url = base_url
        self.api_key = api_key

    async def chat(self, model, messages):
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }
        payload = {
            "model": model,
            "messages": messages,
            "temperature": 0.7
        }
        timeout = httpx.Timeout(60.0, connect=30.0) 
        async with httpx.AsyncClient(timeout=timeout) as client:
            response = await client.post(f"{self.base_url}/chat/completions", headers=headers, json=payload)
            response.raise_for_status()
            return response.json()

client = OpenAI(base_url="https://api.aimlapi.com/v1", api_key=aimlapi_key)

# Endpoint 1: Refined Idea + Market Gap
@app.post("/api/startup/idea")
async def generate_startup_idea(industry: str, idea: str):
    prompt = (
        f"You are a startup analyst.\n"
        f"Industry: {industry}\n"
        f"Original Idea: {idea}\n"
        f"Refine this idea to make it more unique and actionable. Then suggest an unmet market gap it can address.\n"
        f"Respond in this format:\n"
        f"Refined Idea: <your refined idea>\nMarket Gap: <your market gap>"
    )

    response = await client.chat(model="gpt-4o", messages=[{"role": "user", "content": prompt}])
    content = response["choices"][0]["message"]["content"]

    # Parse
    try:
        refined_idea = content.split("Refined Idea:")[1].split("Market Gap:")[0].strip()
        market_gap = content.split("Market Gap:")[1].strip()
    except IndexError:
        refined_idea = "No refined idea generated."
        market_gap = "No market gap identified."

    return {
        "idea": idea,
        "industry": industry,
        "refined_idea": refined_idea,
        "market_gap": market_gap,
    }
    

# Request Model for Business Plan
class BusinessPlanRequest(BaseModel):
    idea: str
    industry: str

# Endpoint 2: Business Plan Generator
@app.post("/api/startup/business-plan")
async def generate_business_plan(request: BusinessPlanRequest):
    idea = request.idea
    industry = request.industry

    # Step 1: Refine Idea
    prompt_idea = (
        f"You are a startup analyst.\n"
        f"Industry: {industry}\n"
        f"Original Idea: {idea}\n"
        f"Refine this idea to make it more unique and actionable. Then suggest an unmet market gap.\n"
        f"Respond in this format:\n"
        f"Refined Idea: <your refined idea>\nMarket Gap: <your market gap>"
    )

    response_idea = await client.chat(model="gpt-4o", messages=[{"role": "user", "content": prompt_idea}])
    content_idea = response_idea["choices"][0]["message"]["content"]

    try:
        refined_idea = content_idea.split("Refined Idea:")[1].split("Market Gap:")[0].strip()
        market_gap = content_idea.split("Market Gap:")[1].strip()
    except IndexError:
        refined_idea = "No refined idea generated."
        market_gap = "No market gap identified."

    # Step 2: Business Plan
    prompt_plan = (
        f"You are a startup advisor. Based on the following:\n"
        f"Idea: {refined_idea}\n"
        f"Industry: {industry}\n"
        f"Market Gap: {market_gap}\n"
        f"Generate a Lean Business Model Canvas in JSON format with these keys:\n"
        f"Problem, Solution, Value Proposition"
    )

    response_plan = await client.chat(model="gpt-4o", messages=[{"role": "user", "content": prompt_plan}])
    content_plan = response_plan["choices"][0]["message"]["content"]

    try:
        business_plan = json.loads(content_plan)
    except json.JSONDecodeError:
        business_plan = {
            "Problem": "Not specified",
            "Solution": "Not specified",
            "Value Proposition": "Not specified"
        }

    return {
        "idea": idea,
        "industry": industry,
        "refined_idea": refined_idea,
        "market_gap": market_gap,
        "business_plan": business_plan,
    }

# Endpoint 3: Pitch Deck Writer
# @app.post("/api/startup/pitch-deck")
# async def generate_pitch_deck(refined_idea: str, business_plan: Dict):
#     prompt = (
#         f"You are a startup consultant. Based on the following:\n"
#         f"Idea: {refined_idea}\n"
#         f"Business Plan: {json.dumps(business_plan)}\n"
#         f"Write slide contents for a 5-slide pitch deck in JSON format with these keys:\n"
#         f"Problem, Solution, Market, Team, Ask"
#     )

#     response = await client.chat(model="gpt-4o", messages=[{"role": "user", "content": prompt}])
#     content = response["choices"][0]["message"]["content"]

#     # Initialize structure
#     slides = [
#         {"slide": "Problem", "content": ""},
#         {"slide": "Solution", "content": ""},
#         {"slide": "Market", "content": ""},
#         {"slide": "Team", "content": ""},
#         {"slide": "Ask", "content": ""},
#     ]
#     try:
#         parsed = json.loads(content)
#         for slide in slides:
#             slide["content"] = parsed.get(slide["slide"], "Not specified.")
#     except json.JSONDecodeError:
#         for slide in slides:
#             slide["content"] = "Not specified."

#     return {
#         "refined_idea": refined_idea,
#         "business_plan": business_plan,
#         "pitch_deck": slides,
#     }

# # Endpoint 4: Competitor Analyzer (Dummy)
# @app.get("/api/startup/competitors")
# async def analyze_competitors(industry: str):
#     competitors = [
#         {"title": "Competitor 1", "link": "http://example.com", "snippet": "Example snippet 1"},
#         {"title": "Competitor 2", "link": "http://example.com", "snippet": "Example snippet 2"},
#     ]
#     return competitors


from fastapi import HTTPException
import logging
import re

# Setup basic logging
logging.basicConfig(level=logging.INFO)

class CityGrowthRequest(BaseModel):
    city: str
    industry: str

@app.post("/api/startup/city-growth")
async def analyze_city_growth(request: CityGrowthRequest):
    city = request.city
    industry = request.industry
    logging.info(f"Received request for city: {city}, industry: {industry}")

    # Step 1: Market Analysis using AI
    prompt = (
        f"You're a startup market analyst. Analyze the startup landscape for the {industry} industry in {city}.\n"
        f"Include: 1) Market situation, 2) Main challenges/opportunities, 3) Level of competition (0-100).\n"
        f"Return JSON with 'situation', 'challenges', 'opportunities', 'competition_score'."
    )

    try:
        response = await client.chat(model="gpt-4o", messages=[{"role": "user", "content": prompt}])
        ai_content = response["choices"][0]["message"]["content"]
# Remove markdown ```json blocks if any
        cleaned_content = re.sub(r"^```(?:json)?|```$", "", ai_content.strip(), flags=re.MULTILINE).strip()
        analysis_data = json.loads(cleaned_content)
        logging.info(f"AI Response: {ai_content}")
        # analysis_data = json.loads(ai_content)
    except Exception as e:
        logging.error(f"Error processing AI response: {e}")
        raise HTTPException(status_code=500, detail="AI analysis failed or returned invalid JSON.")

    # Step 2: SERP API Call
    serp_url = f"https://serpapi.com/search.json?engine=google&q={industry}+startups+in+{city}&api_key={SERPAPI_KEY}"
    try:
        async with httpx.AsyncClient() as client_http:
            serp_response = await client_http.get(serp_url)
            serp_json = serp_response.json()
            logging.info(f"SERP Response: {serp_json}")
            results = serp_json.get("organic_results", [])
    except Exception as e:
        logging.error(f"Error fetching data from SERP API: {e}")
        results = []

    competitors = [
        {
            "title": result.get("title"),
            "link": result.get("link"),
            "snippet": result.get("snippet")
        }
        for result in results[:5]
    ]

    # Step 3: Graph Data Construction
    try:
        score = float(analysis_data.get("competition_score", 0))
    except (ValueError, TypeError):
        logging.warning("Invalid competition_score value; defaulting to 0")
        score = 0

    graph_data = {
        "labels": ["High", "Medium", "Low"],
        "values": [
            1 if score > 70 else 0,
            1 if 40 < score <= 70 else 0,
            1 if score <= 40 else 0
        ]
    }

    return {
        "city": city,
        "industry": industry,
        "situation": analysis_data.get("situation", "Not available"),
        "challenges": analysis_data.get("challenges", "Not available"),
        "opportunities": analysis_data.get("opportunities", "Not available"),
        "competition_score": score,
        "competitors": competitors,
        "graph_data": graph_data
    }


# Root route
@app.get("/")
def read_root():
    return {"message": "Welcome to the Gensus Hackathon API"}
