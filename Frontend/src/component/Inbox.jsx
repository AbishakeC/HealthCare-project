import React, { useState } from "react"

const Inbox = ({ domain, setResponseData }) => {

  const [input, setInput] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      let endpoint = ""

      if (domain === "Drug") endpoint = "/Sub/drug"
      else if (domain === "Illness") endpoint = "/Sub/illness"
      else if (domain === "Symptoms") endpoint = "/Sub/symptoms"
      else if (domain === "Diet") endpoint = "/Sub/diet"

      const res = await fetch(`http://127.0.0.1:8000${endpoint}`, {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          query: input
        })

      })

      const data = await res.json()

      setResponseData(data)

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