from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..Configs.database import get_db
from ..Models.model import History, QueryRequest, User
from ..Middleware.token import get_current_user

from ..Controller.Gemin_feedback import (
    illness_info,
    analyse_symptoms,
    generate_diet
)

router = APIRouter()


# -----------------------------
# Illness Information
# -----------------------------
@router.post("/illness")
def illness(
    data: QueryRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    result = illness_info(data.query)

    history = History(
        user_id=current_user.id,
        domain="Illness",
        query=data.query,
        result=result
    )

    db.add(history)
    db.commit()

    return {
        "title": data.query,
        "description": "Illness Information",
        "details": result
    }


# -----------------------------
# Symptom Analysis
# -----------------------------
@router.post("/symptoms")
def symptoms(
    data: QueryRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    result = analyse_symptoms(data.query)

    history = History(
        user_id=current_user.id,
        domain="Symptoms",
        query=data.query,
        result=result
    )

    db.add(history)
    db.commit()

    return {
        "title": "Symptom Analysis",
        "description": data.query,
        "details": result
    }


# -----------------------------
# Diet Plan
# -----------------------------
@router.post("/diet")
def diet(
    data: QueryRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    result = generate_diet(data.query)

    history = History(
        user_id=current_user.id,
        domain="Diet",
        query=data.query,
        result=result
    )

    db.add(history)
    db.commit()

    return {
        "title": "Diet Plan",
        "description": data.query,
        "details": result
    }