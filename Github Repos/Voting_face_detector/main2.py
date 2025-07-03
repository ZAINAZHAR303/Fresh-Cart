from fastapi import FastAPI, File, UploadFile
import cv2
import mediapipe as mp
import numpy as np
from typing import List, Dict
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (use a specific origin in production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FaceDetector:
    def __init__(self):
        self.mp_face_mesh = mp.solutions.face_mesh
        self.mp_face_detection = mp.solutions.face_detection

    def extract_specific_features(self, image, landmarks, image_shape):
        """ Extract specific facial features with coordinates and bounding boxes """
        ih, iw, _ = image_shape
        features = {}

        feature_indices = {
            'left_eye': list(range(33, 44)),
            'right_eye': list(range(263, 274)),
            'nose_tip': [4],
            'nose_bridge': list(range(168, 175)),
            'left_eyebrow': list(range(46, 56)),
            'right_eyebrow': list(range(276, 286)),
            'mouth_outer_lips': list(range(0, 14)),
            'mouth_inner_lips': list(range(14, 18)),
            'left_cheek': [123],
            'right_cheek': [352]
        }

        for feature_name, indices in feature_indices.items():
            feature_points = [
                (int(landmarks.landmark[idx].x * iw), int(landmarks.landmark[idx].y * ih))
                for idx in indices
            ]

            if feature_points:
                xs = [x for x, _ in feature_points]
                ys = [y for _, y in feature_points]
                features[feature_name] = {
                    'bounding_box': (min(xs), min(ys), max(xs), max(ys)),
                    'center': (int(np.mean(xs)), int(np.mean(ys)))
                }

        return features

    def detect_faces(self, image):
        """ Detect faces and extract facial landmarks using MediaPipe """
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        face_features = []

        with self.mp_face_detection.FaceDetection(min_detection_confidence=0.5) as face_detection:
            results_detection = face_detection.process(image_rgb)

            if results_detection.detections:
                for detection in results_detection.detections:
                    bboxC = detection.location_data.relative_bounding_box
                    ih, iw, _ = image.shape
                    x1, y1, w, h = int(bboxC.xmin * iw), int(bboxC.ymin * ih), int(bboxC.width * iw), int(bboxC.height * ih)

                    with self.mp_face_mesh.FaceMesh(
                        static_image_mode=True, max_num_faces=1, min_detection_confidence=0.5
                    ) as face_mesh:
                        results_mesh = face_mesh.process(image_rgb)

                        if results_mesh.multi_face_landmarks:
                            for face_landmarks in results_mesh.multi_face_landmarks:
                                specific_features = self.extract_specific_features(image, face_landmarks, image.shape)

                                face_features.append({
                                    'bbox': (x1, y1, x1 + w, y1 + h),
                                    'facial_area': w * h,
                                    'confidence': detection.score[0],
                                    'specific_features': specific_features
                                })

        return face_features

face_detector = FaceDetector()

@app.post("/extract_features/")
async def extract_features(file: UploadFile = File(...)) -> Dict:
    """ API Endpoint to receive image, process it, and return extracted facial features """
    contents = await file.read()
    np_array = np.frombuffer(contents, np.uint8)
    image = cv2.imdecode(np_array, cv2.IMREAD_COLOR)

    face_features = face_detector.detect_faces(image)

    return {"faces_detected": len(face_features), "features": face_features}
