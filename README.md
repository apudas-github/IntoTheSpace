<div align="center">
  <img src="https://img.shields.io/badge/NASA%20Space%20Apps%20Challenge-2026-blue?style=for-the-badge&logo=nasa" alt="NASA Space Apps 2026" />
  
  <h1 align="center">🚀 IntoTheSpace</h1>
  <p align="center">
    <strong>AI-Powered Fire Safety Intelligence from NASA Microgravity Combustion Research</strong>
  </p>
  
  <p align="center">
    <a href="https://github.com/apudas-github/IntoTheSpace/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
    <img src="https://img.shields.io/badge/FastAPI-005571?style=flat-square&logo=fastapi" alt="FastAPI" />
    <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </p>
</div>

<hr />

## 🌠 The Challenge: Flame in Freefall
Understanding how fire behaves in space is critical for ensuring the safety of future human spaceflight missions. However, decades of microgravity combustion research are vast, complex, and difficult to synthesize into actionable safety protocols for spacecraft engineers.

## 💡 Our Solution
**IntoTheSpace** is a modern, AI-powered scientific intelligence platform. It ingests NASA's open scientific research on combustion and provides an interactive interface for researchers to explore, compare, and extract critical fire-safety insights. By leveraging Retrieval-Augmented Generation (RAG), it anchors all AI summaries in real experimental data, ensuring scientific integrity without hallucinations.

---

## ✨ Key Features
- **🔍 Interactive Research Explorer**: Instantly filter decades of experiments by fuel type, gravity condition, and oxygen concentration.
- **🤖 AI Research Assistant (RAG)**: Ask natural language questions (*"How does microgravity alter methane extinction limits?"*) and get answers grounded strictly in retrieved NASA literature.
- **⚖️ Experiment Comparison Engine**: Automatically highlight differences in flame behavior across multiple studies.
- **📊 Fire-Safety Insights**: A dashboard of high-level safety takeaways automatically synthesized from raw data.
- **🛡️ Demo Mode (Fallback AI)**: Runs flawlessly offline or without API keys by using a deterministic local semantic search.

---

## 🛠️ Architecture & Tech Stack

### Frontend
- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS (Space-themed glassmorphism UI)
- **Visuals**: Recharts (Data Visualization) & Lucide React (Icons)
- **Routing**: React Router DOM

### Backend
- **Core**: Python + FastAPI
- **Database**: SQLite with SQLAlchemy ORM
- **AI/RAG Pipeline**: Local vector search via `sentence-transformers` & FAISS (optional), dynamic LLM Provider support.

---

## 🚀 Getting Started

Follow these steps to run the complete platform locally on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/apudas-github/IntoTheSpace.git
cd IntoTheSpace
```

### 2. Environment Variables
Create a `.env` file in the root directory (based on `.env.example`):
```env
AI_PROVIDER=demo        # Change to 'openai' if using an API key
AI_API_KEY=             # Optional: Add your LLM API key here
AI_MODEL=dummy
NASA_API_KEY=           # Optional: For live NASA data ingestion
DATABASE_URL=sqlite:///./sql_app.db
```

### 3. Backend Setup
```bash
cd backend
python -m venv venv

# Activate Virtual Environment
# On Windows:
.\venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install Dependencies
pip install -r requirements.txt

# Seed the Database with Demo NASA Data
python scripts/seed_database.py

# Start the Server
uvicorn main:app --reload
```
*The backend API runs on `http://localhost:8000`*

### 4. Frontend Setup
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
*The web application runs on `http://localhost:5173`*

---

## 📸 Platform Preview

> **Note**: Add your application screenshots here.
>
> | Dashboard | AI Research Assistant |
> | :---: | :---: |
> | *(Screenshot placeholder)* | *(Screenshot placeholder)* |
> | **Experiment Explorer** | **Insights & Analytics** |
> | *(Screenshot placeholder)* | *(Screenshot placeholder)* |

---

## 📄 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.

---

<div align="center">
  <i>Built with ❤️ for the <strong>NASA Space Apps Challenge 2026</strong></i>
</div>
