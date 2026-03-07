from fastapi import FastAPI
from .Routers import auth_Signup,route_history
from .Configs.database import engine
from .Models import model

from fastapi.middleware.cors import CORSMiddleware

model.Base.metadata.create_all(bind=engine)

app = FastAPI()


origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Healthcare API is running"}

app.include_router(auth_Signup.router)
app.include_router(route_history.router)