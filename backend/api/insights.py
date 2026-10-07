from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
import models, schemas
from database import get_db

router = APIRouter()

@router.get("/insights", response_model=List[schemas.InsightResponse])
def get_insights(db: Session = Depends(get_db)):
    insights = [
        {"category": "Flame Stability", "insight": "Research suggests spherical flames in microgravity are highly stable compared to normal gravity due to the absence of buoyant convection.", "relevance": 95},
        {"category": "Oxygen Sensitivity", "insight": "Observed in retrieved studies that oxygen concentration has a non-linear effect on flame extinction limits in microgravity.", "relevance": 88},
        {"category": "Heat Transfer", "insight": "Radiative heat loss becomes the dominant mode of heat transfer in microgravity, altering flame spread rates.", "relevance": 92},
        {"category": "Mission Safety", "insight": "Extinguishing fires in microgravity requires different suppression agents as CO2 may pool unpredictably without convection.", "relevance": 98},
    ]
    return insights
