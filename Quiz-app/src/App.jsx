import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios('https://the-trivia-api.com/v2/questions')
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log("Error fetching data:", err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Quiz App
      </h1>

      {/* Loading */}
      {loading && (
        <p className="text-center text-lg font-medium text-gray-600">
          Loading...
        </p>
      )}

      {/* Questions */}
      <div className="max-w-3xl mx-auto space-y-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
          >
            {/* Question */}
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              {item.question.text}
            </h2>

            {/* Options */}
            <ul className="space-y-3">
              {[...item.incorrectAnswers, item.correctAnswer]
                .sort(() => Math.random() - 0.5)
                .map((option, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition"
                  >
                    <input
                      type="radio"
                      name={item.id}
                      value={option}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">{option}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
