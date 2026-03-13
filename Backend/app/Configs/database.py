from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker,declarative_base

Database_Uri = "postgresql://postgres:abish@localhost:5432/Healthcare_Project"

engine =  create_engine(
    Database_Uri
)

sessionlocal =  sessionmaker(
    autoflush=False,
    autocommit=False,
    bind=engine
)

def get_db():
    db = sessionlocal()
    try:
        yield db
    finally:
        db.close()

Base = declarative_base()