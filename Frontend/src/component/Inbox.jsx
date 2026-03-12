import React, { useState } from "react"
import { searchDrug, searchIllness, analyseSymptoms, generateDiet } from "../api/medicalAPI"

const Inbox = ({ domain }) => {

  const [formData, setFormData] = useState({
    name:"",
    dosage:"",
    symptoms:"",
    goal:""
  })

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try{

      let res

      if(domain === "Drug"){
        res = await searchDrug({
          medicine: formData.name,
          dosage: formData.dosage
        })
      }

      if(domain === "Illness"){
        res = await searchIllness({
          illness: formData.name
        })
      }

      if(domain === "Symptoms"){
        res = await analyseSymptoms({
          symptoms: formData.symptoms
        })
      }

      if(domain === "Diet"){
        res = await generateDiet({
          goal: formData.goal
        })
      }

      console.log("Backend Response:",res.data)

    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='w-[80vh] scale-90 bg-gray-900/45 rounded-lg m-2 p-4 text-white'>

      <h1 className='text-3xl mb-6'>{domain} Search</h1>

      {domain === "Drug" && (
        <form onSubmit={handleSubmit}>

          <label>Medicine Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className='input'
          />

          <label>Dosage</label>
          <input
            type="text"
            name="dosage"
            onChange={handleChange}
            className='input'
          />

          <button className='btn'>Search</button>

        </form>
      )}

      {domain === "Illness" && (
        <form onSubmit={handleSubmit}>

          <label>Illness Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className='input'
          />

          <button className='btn'>Search</button>

        </form>
      )}

      {domain === "Symptoms" && (
        <form onSubmit={handleSubmit}>

          <label>Symptoms</label>
          <input
            type="text"
            name="symptoms"
            onChange={handleChange}
            className='input'
          />

          <button className='btn'>Analyse</button>

        </form>
      )}

      {domain === "Diet" && (
        <form onSubmit={handleSubmit}>

          <label>Health Goal</label>
          <input
            type="text"
            name="goal"
            onChange={handleChange}
            className='input'
          />

          <button className='btn'>Generate Plan</button>

        </form>
      )}

    </div>
  )
}

export default Inbox