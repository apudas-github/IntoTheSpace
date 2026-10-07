from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import models
from database import engine
from api import experiments, search, chat, comparison, insights, stats

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="IntoTheSpace API", description="API for NASA Space Apps Challenge 2026", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(experiments.router, prefix="/api")
app.include_router(search.router, prefix="/api")
app.include_router(chat.router, prefix="/api")
app.include_router(comparison.router, prefix="/api")
app.include_router(insights.router, prefix="/api")
app.include_router(stats.router, prefix="/api")

@app.get("/api/health")
def health_check():
    return {"status": "ok", "message": "IntoTheSpace backend is running"}
