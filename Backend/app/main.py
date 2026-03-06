from fastapi import FastAPI
from .Routers import auth_Signup,route_history
from .Configs.database import engine
from .Models import model

model.Base.metadata.create_all(bind=engine)

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Healthcare API is running"}

app.include_router(auth_Signup.router)
app.include_router(route_history.router)