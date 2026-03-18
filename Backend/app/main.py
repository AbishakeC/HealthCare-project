from fastapi import FastAPI
from .Routers import auth_Signup,route_history,med_info
from .Configs.database import engine
from .Models import model
from .Routers import auth_Signup
from .Routers import med_info
from fastapi.middleware.cors import CORSMiddleware

model.Base.metadata.create_all(bind=engine)

# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",  # React app
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # your React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Healthcare API is running"}

app.include_router(auth_Signup.router )
app.include_router(route_history.router)
app.include_router(med_info.router,prefix="/Sub")