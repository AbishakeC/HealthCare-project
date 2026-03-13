from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..Configs.database import sessionlocal
from ..Models import model
from ..Models.model import UserCreate, UserLogin
from ..Middleware.hashing import hashedpassword, verifypassword
from ..Middleware.token import create_access_token

router = APIRouter()


def get_db():
    db = sessionlocal()
    try:
        yield db
    finally:
        db.close()


# ---------------- SIGNUP ----------------

@router.post("/Signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):

    existing_user = db.query(model.User).filter(
        model.User.email == user.email
    ).first()

    if existing_user:
        raise HTTPException(400, "Email already registered")

    new_user = model.User(
        username=user.username,
        email=user.email,
        password_hashed=hashedpassword(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User created successfully"}


# ---------------- LOGIN ----------------

@router.post("/Login")
def login(user: UserLogin, db: Session = Depends(get_db)):

    user_db = db.query(model.User).filter(
        model.User.email == user.email
    ).first()

    if not user_db:
        raise HTTPException(401, "Invalid credentials")

    if not verifypassword(user.password, user_db.password_hashed):
        raise HTTPException(401, "Invalid password")

    token = create_access_token(
        {"user_id": user_db.id}
    )

    return {
        "access_token": token,
        "token_type": "Bearer"
    }