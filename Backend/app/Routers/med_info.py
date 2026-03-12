from fastapi import APIRouter

router = APIRouter()

@router.post("/drug")
async def drug_info(data:dict):

    medicine = data.get("medicine")
    dosage = data.get("dosage")

    return {
        "title": medicine,
        "description": f"Dosage information for {medicine}",
        "dosage": dosage
    }


@router.post("/illness")
async def illness_info(data:dict):

    illness = data.get("illness")

    return {
        "title": illness,
        "treatment":"Paracetamol + Rest"
    }


@router.post("/symptoms")
async def symptom_analysis(data:dict):

    symptoms = data.get("symptoms")

    return {
        "possible_disease":"Flu",
        "precaution":"Drink water and rest"
    }


@router.post("/diet")
async def diet_plan(data:dict):

    goal = data.get("goal")

    return {
        "goal":goal,
        "plan":"High protein + vegetables"
    }