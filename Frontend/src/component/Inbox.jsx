import React, { useState } from "react"

import {
  searchDrug,
  searchIllness,
  analyseSymptoms,
  generateDiet
} from "../api/MedicalAPI"

const Inbox = ({ domain, setResponseData }) => {

  const [input, setInput] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const payload = {
        user_id: 1,
        query: input
      }

      let response

      if (domain === "Drug")
        response = await searchDrug(payload)

      else if (domain === "Illness")
        response = await searchIllness(payload)

      else if (domain === "Symptoms")
        response = await analyseSymptoms(payload)

      else if (domain === "Diet")
        response = await generateDiet(payload)

      setResponseData(response.data)

    } catch (err) {

      console.error("API Error:", err)

    }

  }

  return (

    <div className="w-full rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg p-6 text-white">

      <h1 className="text-2xl font-semibold mb-4">
        {domain} Search
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >

        <input
          type="text"
          placeholder={`Enter ${domain} query`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          className="p-3 rounded-lg bg-white/10 border border-white/20"
        />

        <button className="bg-green-500 hover:bg-green-600 p-3 rounded-lg">

          Submit

        </button>

      </form>

    </div>

  )
}

export default Inbox