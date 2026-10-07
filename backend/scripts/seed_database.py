import json
import os
import sys

# Add parent directory to path to import models and database
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from database import SessionLocal, engine
import models

def seed_db():
    print("Initializing database...")
    models.Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    
    print("Loading demo experiments...")
    with open(os.path.join(os.path.dirname(__file__), "../data/demo_experiments.json"), "r") as f:
        experiments = json.load(f)
        for exp_data in experiments:
            exp = models.Experiment(**exp_data)
            db.merge(exp)
            
    print("Loading demo documents...")
    with open(os.path.join(os.path.dirname(__file__), "../data/demo_documents.json"), "r") as f:
        documents = json.load(f)
        for doc_data in documents:
            doc = models.Document(**doc_data)
            db.merge(doc)
            
    db.commit()
    db.close()
    print("Database seeded successfully!")

if __name__ == "__main__":
    seed_db()
