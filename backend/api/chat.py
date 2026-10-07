from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List
import models, schemas
from database import get_db
import os

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

@router.post("/chat", response_model=schemas.ChatResponse)
def chat_with_ai(request: ChatRequest, db: Session = Depends(get_db)):
    # Dummy RAG implementation
    query = request.message
    
    # Retrieve
    docs = db.query(models.Document).filter(
        models.Document.text.contains(query.split()[0])
    ).limit(3).all()

    if not docs:
        docs = db.query(models.Document).limit(2).all()
        
    ai_provider = os.getenv("AI_PROVIDER", "demo")
    
    if ai_provider == "demo" or not os.getenv("AI_API_KEY"):
        answer = f"DEMO AI: Based on retrieved research, microgravity affects combustion significantly. The data suggests that {query} has specific characteristics when gravity is removed."
    else:
        answer = "AI provider integration would generate response based on documents here."

    sources = [{"id": doc.id, "title": doc.title, "source": doc.source, "url": doc.source_url} for doc in docs]
    
    return {
        "answer": answer,
        "sources": sources,
        "confidence": 85
    }
