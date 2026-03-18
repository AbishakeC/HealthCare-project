from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..Configs.database import get_db
from ..Models.model import History, QueryRequest

from ..Controller.Gemin_feedback import (
    illness_info,
    analyse_symptoms,
    generate_diet,
    explain_drug
)

router = APIRouter()

# ⚠️ TEMP USER
FAKE_USER_ID = 1

@router.post("/drug")
def drug(data: QueryRequest, db: Session = Depends(get_db)):

    result = explain_drug({"name": data.query})

    return {"title": "Drug Info", "details": result}


@router.post("/illness")
def illness(data: QueryRequest, db: Session = Depends(get_db)):

    result = illness_info(data.query)

    db.add(History(
        user_id=FAKE_USER_ID,
        domain="Illness",
        query=data.query,
        result=result
    ))
    db.commit()

    return {"title": data.query, "details": result}


@router.post("/symptoms")
def symptoms(data: QueryRequest, db: Session = Depends(get_db)):

    result = analyse_symptoms(data.query)

    db.add(History(
        user_id=FAKE_USER_ID,
        domain="Symptoms",
        query=data.query,
        result=result
    ))
    db.commit()

    return {"title": "Symptoms", "details": result}


@router.post("/diet")
def diet(data: QueryRequest, db: Session = Depends(get_db)):

    result = generate_diet(data.query)

    db.add(History(
        user_id=FAKE_USER_ID,
        domain="Diet",
        query=data.query,
        result=result
    ))
    db.commit()

    return {"title": "Diet Plan", "details": result}