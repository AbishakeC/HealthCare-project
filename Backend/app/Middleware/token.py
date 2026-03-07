from jose import jwt
from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordBearer
from fastapi import Depends

Secret_key = "SuperSecret"
algorithms = "HS256"

def create_access_token(data: dict):
    to_encode = data.copy()
    expires = datetime.utcnow() + timedelta(hours=24)

    to_encode.update({"exp": expires})

    encoded_jwt = jwt.encode(
        to_encode,
        Secret_key,
        algorithm=algorithms   # ✅ FIXED
    )

    return encoded_jwt


oauth_2shema = OAuth2PasswordBearer(tokenUrl="Login")


def get_current_user(token: str = Depends(oauth_2shema)):

    payload = jwt.decode(
        token,
        Secret_key,
        algorithms=[algorithms]   # ✅ decode needs list
    )

    user_id = payload.get("user_id")

    return user_id