from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
import models
from database import get_db

router = APIRouter()

@router.get("/stats")
def get_stats(db: Session = Depends(get_db)):
    total_experiments = db.query(models.Experiment).count()
    total_documents = db.query(models.Document).count()
    
    fuels = db.query(models.Experiment.fuel).distinct().all()
    fuels_count = len(fuels)
    
    sources = db.query(models.Document.source).distinct().all()
    sources_count = len(sources)

    return {
        "total_experiments": total_experiments,
        "total_documents": total_documents,
        "fuels": fuels_count,
        "sources": sources_count,
        "topics": 15
    }
