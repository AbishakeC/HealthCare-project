from passlib.context import CryptContext

pwd_content = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)

def hashedpassword(password:str):
      return pwd_content.hash(password)


def verifypassword(plain_password, hashed_password):
    return pwd_content.verify(plain_password, hashed_password)