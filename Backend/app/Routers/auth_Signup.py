from fastapi import APIRouter,Depends,HTTPException
from sqlalchemy.orm import Session
from jose import jwt
from ..Models.model import UserCreate


from ..Configs.database import sessionlocal
from ..Models import model
from ..Middleware.hashing import hashedpassword
from ..Middleware.hashing import verifypassword
from ..Middleware.token import create_access_token

router = APIRouter()

def get_db():
    db = sessionlocal()
    try:
        yield db
    finally:
        db.close()  

@router.post("/Signup")
def signup(user:UserCreate,db:Session = Depends(get_db)):

    new_user = model.User(
        username=user.username,
        email = user.email,
        password_hashed = hashedpassword(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message":"user created with hashed password"}



@router.post("/Login")
def login(email:str,password:str,db:Session=Depends(get_db)):
    user = db.query(model.User).filter(
        model.User.email == email
    ).first()

    if not user:
        raise HTTPException(401,"Invalid Credentials")
    
    if not verifypassword(password,user.password_hashed):
        raise HTTPException(401,"invalid credential password")
    

    token = create_access_token(
        {"user_id":user.id}
    )

    return {
        "access token :":token,
        "token_type:":"bearer"
    }


