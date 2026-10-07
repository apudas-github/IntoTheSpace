# AI and RAG Pipeline

IntoTheSpace implements a Retrieval-Augmented Generation (RAG) architecture to ensure AI outputs are grounded in actual NASA research rather than hallucinated.

## The Pipeline
1. **Query Processing**: The user's natural language question is received by the backend.
2. **Retrieval**: The `rag_service` searches the SQLite database (and potentially a FAISS vector index) for relevant experimental records and research documents.
3. **Context Assembly**: The retrieved documents are combined into a system prompt.
4. **Generation**: The prompt is sent to the LLM. 
5. **Citation**: The AI response is returned to the frontend along with the exact source metadata (title, URL) of the retrieved documents.

## Fallback (Demo Mode)
If `AI_API_KEY` is not provided in `.env`, the system defaults to **DEMO MODE**.
In Demo Mode, the RAG pipeline still performs retrieval (step 2), but instead of calling an external LLM, it returns a deterministic response based directly on the retrieved text, clearly marked as "DEMO AI". This guarantees zero downtime during a hackathon pitch.
