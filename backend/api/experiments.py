from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
import models, schemas
from database import get_db

router = APIRouter()

@router.get("/experiments", response_model=List[schemas.Experiment])
def get_experiments(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    experiments = db.query(models.Experiment).offset(skip).limit(limit).all()
    return experiments

@router.get("/experiments/{id}", response_model=schemas.Experiment)
def get_experiment(id: str, db: Session = Depends(get_db)):
    experiment = db.query(models.Experiment).filter(models.Experiment.id == id).first()
    if experiment is None:
        raise HTTPException(status_code=404, detail="Experiment not found")
    return experiment
