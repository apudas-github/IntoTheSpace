# Data Sources

**Important Disclaimer:** The data currently loaded in the database is **DEMO DATA** created specifically for the NASA Space Apps Challenge hackathon to demonstrate the platform's capabilities. It does not represent actual NASA experimental results.

## Target NASA Sources (To be configured for Production)
The system is designed to ingest data from:
1. **NASA Open Data Portal** (data.nasa.gov)
2. **Physical Sciences Informatics (PSI) System** (nasa.gov/PSI)
3. **ISS Combustion Integrated Rack (CIR) Publications**

## Ingestion Script
The `backend/scripts/ingest_nasa_data.py` (placeholder) is designed to hit NASA APIs, normalize the schema (mapping to the `Experiment` and `Document` models), and populate the database automatically.
