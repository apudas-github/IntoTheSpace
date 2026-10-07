from sqlalchemy import Column, Integer, String, Float, Text
from database import Base

class Experiment(Base):
    __tablename__ = "experiments"
    id = Column(String, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    fuel = Column(String, index=True)
    oxygen_concentration = Column(Float)
    pressure = Column(Float)
    temperature = Column(Float)
    gravity = Column(String, index=True)
    flame_type = Column(String, index=True)
    duration = Column(Float)
    observed_behavior = Column(Text)
    research_findings = Column(Text)
    source_type = Column(String)
    source_url = Column(String)
    source_title = Column(String)
    category = Column(String)

class Document(Base):
    __tablename__ = "documents"
    id = Column(String, primary_key=True, index=True)
    title = Column(String)
    text = Column(Text)
    source = Column(String)
    source_url = Column(String)
    date = Column(String)
    topics = Column(String) # Comma separated
