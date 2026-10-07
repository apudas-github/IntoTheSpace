from pydantic import BaseModel
from typing import Optional, List

class ExperimentBase(BaseModel):
    title: str
    description: str
    fuel: str
    oxygen_concentration: float
    pressure: float
    temperature: float
    gravity: str
    flame_type: str
    duration: float
    observed_behavior: str
    research_findings: str
    source_type: str
    source_url: str
    source_title: str
    category: str

class ExperimentCreate(ExperimentBase):
    id: str

class Experiment(ExperimentBase):
    id: str
    class Config:
        from_attributes = True

class DocumentBase(BaseModel):
    title: str
    text: str
    source: str
    source_url: str
    date: str
    topics: str

class DocumentCreate(DocumentBase):
    id: str

class Document(DocumentBase):
    id: str
    class Config:
        from_attributes = True

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    answer: str
    sources: List[dict]
    confidence: int

class SearchResponse(BaseModel):
    experiments: List[Experiment]
    documents: List[Document]

class InsightResponse(BaseModel):
    category: str
    insight: str
    relevance: int
