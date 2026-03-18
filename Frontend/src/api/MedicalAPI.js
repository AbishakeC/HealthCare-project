import API from "../api/api"

export const searchDrug = (data) =>
  API.post("/api/drug", data)

export const searchIllness = (data) =>
  API.post("/api/illness", data)

export const analyseSymptoms = (data) =>
  API.post("/api/symptoms", data)

export const generateDiet = (data) =>
  API.post("/api/diet", data)