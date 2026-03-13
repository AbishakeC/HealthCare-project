from sqlalchemy import Column, Integer, String, ForeignKey, DateTime,Text
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from ..Configs.database import Base

from pydantic import BaseModel


# -------------------------
# Pydantic Schemas
# -------------------------
class UserLogin(BaseModel):
    email: str
    password: str


class UserCreate(BaseModel):
    username: str
    email: str
    password: str


class QueryRequest(BaseModel):
    user_id: int
    query: str


# -------------------------
# SQLAlchemy Models
# -------------------------
class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    username = Column(String, unique=True)

    email = Column(String, unique=True)

    password_hashed = Column(String)

    created_at = Column(DateTime, default=func.now())

    history = relationship("History", back_populates="user")


class History(Base):
    __tablename__ = "history"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    domain = Column(String)
    query = Column(String)
    result = Column(Text)
    created_at = Column(DateTime, server_default=func.now())