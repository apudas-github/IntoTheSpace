from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List
import models, schemas
from database import get_db

router = APIRouter()

class CompareRequest(BaseModel):
    experiment_ids: List[str]

@router.post("/compare")
def compare_experiments(request: CompareRequest, db: Session = Depends(get_db)):
    experiments = db.query(models.Experiment).filter(models.Experiment.id.in_(request.experiment_ids)).all()
    
    summary = "Comparison shows significant differences in behavior based on initial conditions."
    if len(experiments) >= 2:
        summary = f"Experiment {experiments[0].title} and Experiment {experiments[1].title} differ primarily in their observed flame behavior and fuel type."

    return {
        "experiments": experiments,
        "summary": summary
    }
