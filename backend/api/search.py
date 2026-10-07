from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
import models, schemas
from database import get_db

router = APIRouter()

@router.get("/search", response_model=schemas.SearchResponse)
def search(q: str = "", db: Session = Depends(get_db)):
    if not q:
        return {"experiments": [], "documents": []}
    
    experiments = db.query(models.Experiment).filter(
        models.Experiment.title.contains(q) | 
        models.Experiment.description.contains(q) |
        models.Experiment.fuel.contains(q)
    ).limit(10).all()

    documents = db.query(models.Document).filter(
        models.Document.title.contains(q) |
        models.Document.text.contains(q)
    ).limit(10).all()

    return {"experiments": experiments, "documents": documents}
