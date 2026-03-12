import React from "react"

const OutletBox = ({ data }) => {

  if (!data) {

    return (

      <div className="
        h-full
        w-full
        p-8
        bg-white/10
        backdrop-blur
        rounded-2xl
        shadow-lg
        text-white
        flex
        items-center
        justify-center
      ">

        <p className="text-xl text-gray-300">
          Submit a query to analyse medical data
        </p>

      </div>

    )

  }

  return (

    <div className="
      h-full
      w-full
      p-8
      bg-white/10
      backdrop-blur-md
      rounded-2xl
      shadow-lg
      text-white
      overflow-y-auto
    ">

      <h1 className="text-4xl font-bold mb-4">
        {data.title || "Medical Result"}
      </h1>

      {data.description && (

        <h3 className="text-xl mb-6 text-gray-200">
          {data.description}
        </h3>

      )}

      <div className="text-gray-300 leading-relaxed whitespace-pre-line">

        {data.details}

      </div>

      {data.reference && (

        <p className="mt-8 text-blue-400 text-sm">
          Reference : {data.reference}
        </p>

      )}

    </div>

  )
}

export default OutletBox