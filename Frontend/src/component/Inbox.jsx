import React, { useState } from "react"

import {
  searchDrug,
  searchIllness,
  analyseSymptoms,
  generateDiet
} from "../api/MedicalAPI"

const Inbox = ({ domain, setMessages }) => {

  const [input, setInput] = useState("")

  const handleSubmit = async (e) => {

  e.preventDefault()

  if (!input.trim()) return

  const userMessage = input

  setMessages(prev => [
    ...prev,
    { sender: "user", text: userMessage }
  ])

  setInput("")

  try {

    const payload = {
      query: userMessage
    }

    let response = null

    // ✅ normalize domain
    const d = domain?.toLowerCase()

    if (d === "drug")
      response = await searchDrug(payload)

    else if (d === "illness")
      response = await searchIllness(payload)

    else if (d === "symptoms")
      response = await analyseSymptoms(payload)

    else if (d === "diet")
      response = await generateDiet(payload)

    // ✅ safety check
    if (!response || !response.data) {
      throw new Error("No response from API")
    }

    const botReply =
      response.data.details ||
      response.data.description ||
      "No response"

    setMessages(prev => [
      ...prev,
      { sender: "bot", text: botReply }
    ])

  } catch (err) {

    console.error("API Error:", err)

    setMessages(prev => [
      ...prev,
      { sender: "bot", text: "Server error 😢" }
    ])
  }



  }

  return (

    <form
      onSubmit={handleSubmit}
      className="flex gap-3"
    >

      <input
        type="text"
        placeholder={`Ask about ${domain}...`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-3 rounded-lg bg-white/20 text-white border border-white/30 outline-none"
      />

      <button className="bg-green-500 px-6 rounded-lg text-white">
        Send
      </button>

    </form>

  )
}

export default Inbox