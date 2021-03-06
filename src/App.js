import './App.css';
import React, { useState } from 'react'


function App() {

  const questions = [
    {
      questionText: 'Which company did Elon Musk recently purchase 9.2% of?',
      answerOptions: [
        { answerText: 'Snapchat', isCorrect: false },
        { answerText: 'Twitter', isCorrect: true },
        { answerText: 'PayPal', isCorrect: false },
        { answerText: 'Shopify', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the current NHL leader in goals?',
      answerOptions: [
        { answerText: 'Auston Matthews', isCorrect: true },
        { answerText: 'Connor Mcdavid', isCorrect: false },
        { answerText: 'Leon Draisatl', isCorrect: false },
        { answerText: 'Chris Kreider', isCorrect: false },
      ],
    },
    {
      questionText: 'What did Facebook recently change its name to?',
      answerOptions: [
        { answerText: 'Metaverse', isCorrect: false },
        { answerText: 'Instagram', isCorrect: false },
        { answerText: 'Meta', isCorrect: true },
        { answerText: 'Bookbook', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the highest grossing movie of 2022 so far?',
      answerOptions: [
        { answerText: 'The Batman', isCorrect: true },
        { answerText: 'Spiderman: No Way Home', isCorrect: false },
        { answerText: 'Uncharted', isCorrect: false },
        { answerText: 'Sonic the Hedgehog 2', isCorrect: false },
      ],
    },
    {
      questionText: 'Who recently went on a huge run on Jeopardy?',
      answerOptions: [
        { answerText: 'Ken Jennings', isCorrect: false },
        { answerText: 'Frank Lyman', isCorrect: false },
        { answerText: 'Whitney Cummings', isCorrect: false },
        { answerText: 'Amy Schneider', isCorrect: true },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [showScore, setShowScore] = useState(false)

  const [score, setScore] = useState(0)

  const handleButton = (isCorrect) => {

    if(isCorrect === true) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }


  return (
    <div className="App">
      {showScore ? (
        <div className='score-section'>You scored {score} out of {questions.length}.
          <div id="tuned">Stay tuned for another quiz soon.</div>
        </div>
      ) : (
        <>
        <div className='container'>
          <div className='question-section'>
              <div className='question-count'> 
              <span>Question {currentQuestion + 1}</span> out of {questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answers">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button className='button' onClick={()=> handleButton(answerOption.isCorrect)}>{answerOption.answerText}</button>))
            }
          </div>
          </div>
        </>

      )
    }
    </div>
  );
}

export default App;
