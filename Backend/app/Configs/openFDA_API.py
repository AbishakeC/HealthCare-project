import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_OPENFDA = os.getenv("openFDA_API")

BASE_URL = "https://api.fda.gov/drug/label.json"


def get_medical_info(medicine):

    url = f"{BASE_URL}?search=openfda.generic_name:{medicine}&limit=1&api_key={API_OPENFDA}"

    response = requests.get(url)

    if response.status_code != 200:
        return {"message":"error fetching data...."}
    
    data = response.json()
    
    if "results" not in data:
        return {"error": "Drug not found"}
    
    result = data["results"][0]

    return {
        "medicine":medicine,
         "usage": result.get("indications_and_usage", ["No info"])[0],
        "dosage": result.get("dosage_and_administration", ["No dosage data"])[0]
    }