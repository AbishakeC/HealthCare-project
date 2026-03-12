import API from "../api/api"

export const searchDrug = (data) => API.post("/Sub/drug", data)

export const searchIllness = (data) => API.post("/Sub/illness", data)

export const analyseSymptoms = (data) => API.post("/Sub/symptoms", data)

export const generateDiet = (data) => API.post("/Sub/diet", data)