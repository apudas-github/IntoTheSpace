# IntoTheSpace (Flame in Freefall)

NASA Space Apps Challenge 2026 Project: "Flame in Freefall: AI-Powered Fire Safety Insights from Microgravity Combustion Data"

## Problem
Understanding fire in space is critical for future missions, but microgravity combustion research is vast, complex, and difficult to synthesize into actionable safety protocols.

## Solution
IntoTheSpace provides an AI-powered intelligence platform that makes NASA microgravity combustion research accessible. It allows researchers to explore, compare, and extract insights from complex experimental data using an interactive UI and local/cloud RAG capabilities.

## Architecture
- **Frontend**: React, Vite, Tailwind CSS, Recharts, Lucide React
- **Backend**: FastAPI, SQLite, SQLAlchemy
- **AI/RAG**: Local document retrieval with configurable LLM fallback (DEMO MODE active by default).

## Installation & Running

### 1. Backend Setup
```bash
cd backend
python -m venv venv
# Windows: venv\Scripts\activate
# Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
python scripts/seed_database.py
uvicorn main:app --reload
```
The backend will run at `http://localhost:8000`.

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will run at `http://localhost:5173`.

## Environment Variables
Create a `.env` file in the root based on `.env.example`:
```
AI_PROVIDER=demo
AI_API_KEY=
AI_MODEL=dummy
NASA_API_KEY=
DATABASE_URL=sqlite:///./sql_app.db
```

## Demo Flow
1. Open the dashboard.
2. Click "Explore Research" to view the demo experimental database.
3. Use the "AI Research" tab to ask natural language questions (e.g., "How does microgravity affect flame behavior?").
4. Use the "Compare" tab to view differences between experiments.
5. Explore the "Insights" for top-level synthesized safety takeaways.

*Disclaimer: This is a hackathon project using demo data. It does not provide official NASA safety guidance.*
