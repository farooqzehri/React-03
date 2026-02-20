import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);

  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showResult, setShowResult] = useState(false);


  useEffect(() => {
    axios("https://the-trivia-api.com/v2/questions")
      .then((res) => {

        const formatted = res.data.map((q) => ({
          ...q,
          options: [...q.incorrectAnswers, q.correctAnswer]
            .sort(() => Math.random() - 0.5),
        }));

        setQuestions(formatted);
      })
      .finally(() => setLoading(false));
  }, []);

 
  const question = questions[currentQuestion];

  const handleSubmit = () => {
    if (!selected) return;

    setSubmitted(true);

    if (selected === question.correctAnswer) {
      setScore(score + 1);
    }
  };


  const handleNext = () => {
    setSubmitted(false);
    setSelected(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };


  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelected(null);
    setSubmitted(false);
    setShowResult(false);
  };

  if (loading) {
    return <h1 className="text-center mt-20 text-2xl">Loading....</h1>;
  }


  if (showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-[400px]">
          <h1 className="text-3xl font-bold mb-4">Quiz Finished 🎉</h1>
          <p className="text-xl mb-6">
            Your Score: <span className="font-bold">{score}</span> / {questions.length}
          </p>

          <button
            onClick={handleRestart}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md">

        <h1 className="text-2xl font-bold mb-4 text-center">Quiz App</h1>

    
        <div className="w-full bg-gray-200 h-3 rounded mb-6">
          <div
            className="bg-blue-600 h-3 rounded"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>


        <p className="mb-2 text-gray-600">
          Question {currentQuestion + 1} / {questions.length}
        </p>

    
        <h2 className="text-lg font-semibold mb-4">
          {question.question.text}
        </h2>

      
        <ul className="space-y-3">
          {question.options.map((option, index) => {

            let style = "bg-gray-50";

       
            if (submitted) {
              if (option === question.correctAnswer) {
                style = "bg-green-200";
              } else if (option === selected) {
                style = "bg-red-200";
              }
            }

            return (
              <li
                key={index}
                onClick={() => !submitted && setSelected(option)}
                className={`p-3 rounded-lg cursor-pointer border ${style}
                ${selected === option ? "border-blue-500" : "border-gray-200"}`}
              >
                {option}
              </li>
            );
          })}
        </ul>

      
        <div className="mt-6 flex justify-between">

          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Next
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default App;
