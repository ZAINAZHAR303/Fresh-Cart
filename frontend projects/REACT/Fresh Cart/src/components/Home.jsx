import React, { useState } from 'react'
import TopBar from './Navbar/TopBar' 
import ImageSlider from './ImageSlider/ImageSlider'
import ApiTest from './ApiTest'
import Posters from './Posters'
import PopularProducts from './PopularProducts'
import BestSells from './BestSells'
import Features from './Features'

function Home() {
  const[query,setquery] = useState("")


  
  return (
    <div>
      <TopBar setquery={setquery} />
      <ImageSlider/>
      <ApiTest />
      <Posters />
      <PopularProducts query={query} />
      <BestSells />
      <Features />
      
    </div>
  )
}


export default Home
