import React from 'react';

const Quiz = ({ options }) => {
  return (
    <div className="quiz-container">
      <h2>{options.title}</h2>
      <h2>{options.style}</h2>
      {options.questions.map((q, index) => (
        <div key={index}>
          <p>Question: {q.question}</p>
          <p>Answer: {q.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Quiz;