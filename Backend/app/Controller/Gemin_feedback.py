from ..Configs.GenAI_API import client



# -----------------------------
# Explain Drug Information
# -----------------------------


def explain_drug(drug_data):

    name = drug_data.get("name", "Unknown Medicine")
    usage = drug_data.get("usage", "Usage information not available")
    dosage = drug_data.get("dosage", "Dosage information not available")
    warnings = drug_data.get("warnings", "Warnings not available")

    prompt = f"""
Explain the following medicine in a clear and structured way.

Medicine Name: {name}

Usage:
{usage}

Dosage:
{dosage}

Warnings:
{warnings}

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

        if hasattr(response, "text"):
            return response.text

        return "No AI response generated"

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