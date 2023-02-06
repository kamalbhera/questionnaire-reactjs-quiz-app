import React, { useState } from 'react';
import "./App.css";

function App() {
  const questions = [
    {
      questionText: 'Reac.js is a free and open-source front-end',
      answerOptions: [
        { answerText: 'JavaScript library', isCorrect: true },
        { answerText: 'Bootstrap library', isCorrect: false },
        { answerText: 'CSS library', isCorrect: false },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },
    {
      questionText: 'React.js was initially released in',
      answerOptions: [
        { answerText: 'May 29, 2013', isCorrect: true },
        { answerText: 'April 29, 2013', isCorrect: false },
        { answerText: 'June 29, 2013', isCorrect: false },
        { answerText: 'May 29, 2014', isCorrect: false },
      ],
    },
    {
      questionText: 'React.js had written in',
      answerOptions: [
        { answerText: 'JavaScript', isCorrect: true },
        { answerText: 'Python', isCorrect: false },
        { answerText: 'Java', isCorrect: false },
        { answerText: 'Php', isCorrect: false },
      ],
    },
    {
      questionText: 'React was originally created by',
      answerOptions: [
        { answerText: 'Jordan Walke', isCorrect: true },
        { answerText: 'Rasmus Lerdorf', isCorrect: false },
        { answerText: 'Miško Hevery', isCorrect: false },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  
  return (
    <div className='App'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;