import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

API_KEY = os.getenv("GenAI_KEY")

client = genai.Client(api_key=API_KEY)

print("API KEY:", API_KEY)


# -----------------------------
# Explain Drug Information
# -----------------------------
def explain_drug(drug_data):

    prompt = f"""
Explain the following medicine in a clear and structured way.

Medicine Name: {drug_data.get('name')}
Usage: {drug_data.get('usage')}
Dosage: {drug_data.get('dosage')}
Warnings: {drug_data.get('warnings')}

Provide:
1. Short explanation (3 lines)
2. Proper dosage guidance for different age groups
3. When to take (AM / PM / before food / after food)
4. Important warnings or precautions
5. Medical ingredients/components
6. Major manufacturers and their producing country
"""

    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )
        return response.text
    except Exception as e:
        return f"AI Error: {str(e)}"


# -----------------------------
# Illness Information
# -----------------------------
def illness_info(illness):

    prompt = f"""
Explain the illness: {illness}

Include:
• Causes
• Symptoms
• Stages of illness
• Treatment methods
• Medicines commonly used
• Age-based treatment guidance
"""

    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )
        return response.text
    except Exception as e:
        return f"AI Error: {str(e)}"


# -----------------------------
# Symptom Analysis
# -----------------------------
def analyse_symptoms(symptoms):

    prompt = f"""
Patient symptoms:
{symptoms}

Provide:
• Possible diseases
• Risk level
• Basic medicines
• Home precautions
• When to consult a doctor
"""

    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )
        return response.text

    except Exception as e:
        if "429" in str(e):
            return "AI service busy. Please try again."
        return f"AI Error: {str(e)}"


# -----------------------------
# Diet Plan Generator
# -----------------------------
def generate_diet(goal):

    prompt = f"""
Create a healthy diet plan for: {goal}

Include:
• Breakfast
• Lunch
• Dinner
• Snacks
• Hydration suggestions
• Nutritional advice
"""

    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )
        return response.text
    except Exception as e:
        return f"AI Error: {str(e)}"