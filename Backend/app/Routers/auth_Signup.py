from fastapi import APIRouter,Depends,HTTPException
from sqlalchemy.orm import Session
from jose import jwt
from ..Models.model import UserCreate,UserLogin


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
def login(user:UserLogin,db:Session=Depends(get_db)):
    user_db = db.query(model.User).filter(
        model.User.email == user.email
    ).first()

    if not user_db:
        raise HTTPException(401,"Invalid Credentials")
    
    if not verifypassword(user.password,user_db.password_hashed):
        raise HTTPException(401,"invalid credential password")
    

    token = create_access_token(
        {"user_id":user_db.id}
    )

    return {
        "access_token":token,
        "token_type:":"Bearer"
    }


