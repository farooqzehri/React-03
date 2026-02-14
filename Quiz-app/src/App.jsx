import axios from 'axios'
import React from 'react'

const App = () => {


  axios('https://the-trivia-api.com/v2/questions')
  .then(res => {
    console.log(res);
    
  })

  return (
    <>
      <h1>Quiz App</h1>
    </>
  )
}

export default App