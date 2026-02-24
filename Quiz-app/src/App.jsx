// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const App = () => {

//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selected, setSelected] = useState(null);

//   const [score, setScore] = useState(0);
//   const [submitted, setSubmitted] = useState(false);
//   const [showResult, setShowResult] = useState(false);


//   useEffect(() => {
//     axios("https://the-trivia-api.com/v2/questions")
//       .then((res) => {

//         const formatted = res.data.map((q) => ({
//           ...q,
//           options: [...q.incorrectAnswers, q.correctAnswer]
//             .sort(() => Math.random() - 0.5),
//         }));

//         setQuestions(formatted);
//       })
//       .finally(() => setLoading(false));
//   }, []);

 
//   const question = questions[currentQuestion];

//   const handleSubmit = () => {
//     if (!selected) return;

//     setSubmitted(true);

//     if (selected === question.correctAnswer) {
//       setScore(score + 1);
//     }
//   };


//   const handleNext = () => {
//     setSubmitted(false);
//     setSelected(null);

//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowResult(true);
//     }
//   };


//   const handleRestart = () => {
//     setCurrentQuestion(0);
//     setScore(0);
//     setSelected(null);
//     setSubmitted(false);
//     setShowResult(false);
//   };

//   if (loading) {
//     return <h1 className="text-center mt-20 text-2xl">Loading....</h1>;
//   }


//   if (showResult) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-[400px]">
//           <h1 className="text-3xl font-bold mb-4">Quiz Finished 🎉</h1>
//           <p className="text-xl mb-6">
//             Your Score: <span className="font-bold">{score}</span> / {questions.length}
//           </p>

//           <button
//             onClick={handleRestart}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//           >
//             Restart Quiz.
//           </button>
//         </div>
//       </div>
//     );
//   }


//   return (
//     <div className="min-h-screen bg-gray-100 p-6">

//       <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md">

//         <h1 className="text-2xl font-bold mb-4 text-center">Quiz App</h1>

    
//         <div className="w-full bg-gray-200 h-3 rounded mb-6">
//           <div
//             className="bg-blue-600 h-3 rounded"
//             style={{
//               width: `${((currentQuestion + 1) / questions.length) * 100}%`,
//             }}
//           ></div>
//         </div>


//         <p className="mb-2 text-gray-600">
//           Question {currentQuestion + 1} / {questions.length}
//         </p>

    
//         <h2 className="text-lg font-semibold mb-4">
//           {question.question.text}
//         </h2>

      
//         <ul className="space-y-3">
//           {question.options.map((option, index) => {

//             let style = "bg-gray-50";

       
//             if (submitted) {
//               if (option === question.correctAnswer) {
//                 style = "bg-green-200";
//               } else if (option === selected) {
//                 style = "bg-red-200";
//               }
//             }

//             return (
//               <li
//                 key={index}
//                 onClick={() => !submitted && setSelected(option)}
//                 className={`p-3 rounded-lg cursor-pointer border ${style}
//                 ${selected === option ? "border-blue-500" : "border-gray-200"}`}
//               >
//                 {option}
//               </li>
//             );
//           })}
//         </ul>

      
//         <div className="mt-6 flex justify-between">

//           {!submitted ? (
//             <button
//               onClick={handleSubmit}
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//             >
//               Submit
//             </button>
//           ) : (
//             <button
//               onClick={handleNext}
//               className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
//             >
//               Next
//             </button>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import shuffle from 'shuffle-array'

function App() {
  const [question, setQuestion] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [index, setIndex] = useState(0)
  const [result, setResult] = useState(false)
  const [marks, setMarks] = useState(0)

  const input = useRef([])

  useEffect(() => {
    axios('https://the-trivia-api.com/v2/questions')
      .then(res => {
        setQuestion(res.data)
        console.log(res.data);
        
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const nextQuestion = () => {
    const selectedOption = input.current.find(item => item && item.checked)

    if (!selectedOption) {
      alert("Please select an option")
      return
    }

    if (question[index].correctAnswer === selectedOption.value) {
      setMarks(prev => prev + 10)
    }

    input.current.forEach(item => {
      if (item) item.checked = false
    })

    if (index < question.length - 1) {
      setIndex(prev => prev + 1)
    } else {
      setResult(true)
    }
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-xl bg-slate-800/40 backdrop-blur-md border border-slate-700 p-8 rounded-3xl shadow-2xl">
        
        <h1 className="text-4xl font-black text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">
          QUIZ MASTER
        </h1>

        {loading && (
          <div className="text-center py-10">
            <div className="animate-bounce text-xl font-bold text-cyan-400">Loading Challenges...</div>
          </div>
        )}

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-200 p-4 rounded-xl text-center">
            Something went wrong. Please refresh.
          </div>
        )}

        {result && (
          <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
            <h2 className="text-3xl font-bold">Quiz Finished!</h2>
            <div className="text-6xl font-black text-green-400">
              {marks} <span className="text-xl text-slate-400">/ {question ? question.length * 10 : 0}</span>
            </div>
            <button 
               onClick={() => window.location.reload()}
               className="mt-6 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors"
            >
              Restart
            </button>
          </div>
        )}

        {question && question[index] && !result && (
          <div className="question space-y-6" key={question[index].id}>
            <div className="flex justify-between items-center text-sm font-mono text-slate-400">
              <span>QUESTION {index + 1}</span>
              <span>{question.length - index} LEFT</span>
            </div>
            
            <h3 className="text-2xl font-semibold leading-tight text-slate-100">
               {question[index].question.text}
            </h3>

            <div className="space-y-3">
              {shuffle([
                ...question[index].incorrectAnswers,
                question[index].correctAnswer
              ]).map((item, i) => (
                <div key={`option${i}`} className="relative group">
                  <input
                    type="radio"
                    name="question"
                    value={item}
                    id={`opt${i}`}
                    ref={el => (input.current[i] = el)}
                    className="peer hidden"
                  />
                  <label 
                    htmlFor={`opt${i}`}
                    className="block p-4 rounded-xl border border-slate-600 bg-slate-700/30 cursor-pointer 
                             transition-all duration-200 peer-checked:bg-blue-600 peer-checked:border-blue-400 
                             peer-checked:scale-[1.02] hover:bg-slate-700/60"
                  >






















                  
                    {item}
                  </label>
                </div>
              ))}
            </div>

            <button 
              onClick={nextQuestion}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-bold text-lg 
                       shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 active:scale-95 transition-all mt-4"
            >
              NEXT QUESTION:
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App