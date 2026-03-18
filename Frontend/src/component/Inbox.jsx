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

    // Add user message
    setMessages(prev => [
      ...prev,
      { sender: "user", text: userMessage }
    ])

    setInput("")

    try {

      const payload = {
        user_id: 1,
        query: userMessage
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

      const botReply =
        response.data.details ||
        response.data.description ||
        "No response"

      // Add bot message
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: botReply }
      ])

    } catch (err) {

      console.error("API Error:", err)

      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "Something went wrong 😢" }
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