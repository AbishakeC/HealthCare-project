from fastapi import APIRouter,Depends,HTTPException
from sqlalchemy.orm import Session
from jose import jwt


from ..Configs.database import sessionlocal
from ..Models import model
from ..Middleware.hashing import hashedpassword
from ..Middleware.hashing import verifypassword
from ..Middleware.token import create_access_token

router = APIRouter()

def get_db():
    db = sessionlocal
    try:
        yield db
    except:
        db.close_all()    

@router.post("/Signup")
def signup(username:str,email:str,password:str,db:Session = Depends(get_db)):

    user = model.User(
        username=username,
        email = email,
        password = hashedpassword(password)
    )

    db.add(user)
    db.commit()

    return {"message":"user created with hashed password"}



@router.get("/Login")
def login(email:str,password:str,db:Session=Depends(get_db)):
    user = db.query(model.User).filter(
        model.User.email == email
    ).first()

    if not user:
        raise HTTPException(401,"Invalid Credentials")
    
    if not verifypassword(password,user.password_hashed):
        raise HTTPException(401,"invalid credential password")
    

    token = create_access_token(
        {"user.id":user.id}
    )

    return {
        "access token :":token,
        "token_type:":"bearer"
    }


