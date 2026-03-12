from fastapi import HTTPException,APIRouter,Depends
from ..Models import model
from sqlalchemy.orm import Session
from ..Configs.database import sessionlocal
from ..Middleware.token import get_current_user


router = APIRouter()

def conn_db():
    db = sessionlocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/history")
def get_history(
    user_id :int = Depends(get_current_user),
    db:Session = Depends(conn_db)
):
    data = db.query(model.History).filter(
    model.History.User_id == user_id
).all()
    
    return data