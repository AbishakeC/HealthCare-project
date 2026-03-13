import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

API_KEY = os.getenv("GenAI_KEY")

client = genai.Client(api_key=API_KEY)

# print("API KEY:", API_KEY)

