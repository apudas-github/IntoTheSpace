# Architecture

## Frontend
- **React + Vite**: Fast, modern frontend framework.
- **Tailwind CSS**: Utility-first CSS for rapid UI development and space-themed design.
- **React Router**: Client-side routing for seamless navigation.
- **Recharts**: Data visualization.

## Backend
- **FastAPI**: High-performance Python web framework.
- **SQLAlchemy + SQLite**: ORM and local database for easy setup and hackathon demonstration.
- **Services Architecture**: Modular design separating API routes from business logic (AI, RAG, Search).

## AI & RAG Pipeline
- **Vector Search**: Uses local `sentence-transformers` and FAISS for semantic search (or simple TF-IDF fallback if FAISS is unavailable in the environment).
- **LLM Integration**: Designed to connect to OpenAI/Anthropic via environment variables.
- **Demo Mode**: If no API keys are present, the backend falls back to a deterministic semantic retrieval response, ensuring the application always works during presentations.
