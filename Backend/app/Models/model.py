from sqlalchemy import Column,Integer,String,ForeignKey,DateTime
from sqlalchemy.sql import func
from ..Configs.database import Base

class User(Base):
    __tablename__="users"

    id = Column(Integer,primary_key=True,index=True)
    username = Column(String,unique=True)
    email = Column(String,unique=True)
    password_hashed = Column(String)
    created_at = Column(DateTime,default=func.now())



class History(Base):
    __tablename__="History"

    id = Column(Integer,primary_key=True,index=True)
    User_id = Column(Integer,ForeignKey("users.id"))
    domain=Column(String)
    query = Column(String)
    result = Column(String)
    created_at = Column(DateTime,default=func.now())