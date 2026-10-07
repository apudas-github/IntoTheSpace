# Hackathon Pitch

## Problem
Human spaceflight is entering a new era. With long-duration missions to the Moon and Mars, spacecraft fire safety is more critical than ever. We have decades of NASA microgravity combustion research, but the data is scattered across complex scientific papers, raw datasets, and mission reports. For spacecraft engineers, synthesizing this data to make design decisions—like cabin oxygen levels or fire suppression systems—is slow and difficult.

## Solution
**IntoTheSpace** is an AI-powered scientific intelligence platform that transforms raw microgravity combustion research into actionable fire-safety insights. 

It provides:
1. **Interactive Research Explorer**: Instantly filter decades of experiments by fuel type, gravity condition, and oxygen concentration.
2. **AI Research Assistant (RAG)**: Ask natural language questions ("How does microgravity alter methane extinction limits?") and get answers grounded *strictly* in retrieved NASA literature.
3. **Experiment Comparison Engine**: Automatically highlight differences in flame behavior across multiple studies.
4. **Insight Extraction**: A dashboard of high-level safety takeaways automatically synthesized from the data.

## Innovation
We are not just putting an LLM wrapper around NASA data. We built a structured data ingestion pipeline and a modular Retrieval-Augmented Generation (RAG) system. The AI is restricted to answering based on the retrieved documents, preventing hallucinations and preserving scientific integrity.

## NASA Relevance
This directly addresses the "Flame in Freefall" challenge by making microgravity combustion data accessible, understandable, and useful for future mission planning.

## Technical Implementation
- **Frontend**: React, Vite, Tailwind CSS (Modern, dark space aesthetic)
- **Backend**: Python, FastAPI, SQLAlchemy
- **Data/AI**: Local vector search (FAISS/Sentence-transformers) with LLM generation fallback, designed to run gracefully even without API keys (Demo Mode).

## Future Potential
IntoTheSpace can be expanded to ingest live telemetry from the ISS Combustion Integrated Rack (CIR) and predict fire risks for new habitat designs in real-time.
