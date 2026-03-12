from fastapi import APIRouter
from ..Configs.GenAI_API import illness_info, analyse_symptoms, generate_diet, explain_drug
from ..Configs.openFDA_API import  get_medical_info

router = APIRouter()

@router.post("/drug")
async def drug_info(data: dict):

    medicine = data.get("medicine")
    dosage = data.get("dosage")

    drug = get_medical_info(medicine)

    if not drug or "usage" not in drug:
        return {
            "title": medicine,
            "description": "Drug information",
            "details": "Drug not found in OpenFDA database",
            "reference": "OpenFDA"
        }

    return {
        "title": medicine,
        "description": f"Dosage information for {medicine}",
        "details": drug.get("usage", "No usage info") if drug else "Drug not found",
        "reference": "OpenFDA Database"
    }

@router.post("/illness")
async def illness(data: dict):

    illness = data.get("illness")

    result = illness_info(illness)

    return {
        "title": illness,
        "description": "Illness information",
        "details": result
    }


@router.post("/symptoms")
async def symptoms(data: dict):

    sym = data.get("symptoms")

    result = analyse_symptoms(sym)

    return {
        "title": "Symptom Analysis",
        "description": sym,
        "details": result
    }


@router.post("/diet")
async def diet(data: dict):

    goal = data.get("goal")

    result = generate_diet(goal)

    return {
        "title": "Diet Plan",
        "description": goal,
        "details": result
    }