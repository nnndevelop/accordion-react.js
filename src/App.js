import React, { useState } from "react";
import data from "./data";
import Questions from "./Question";
const App = () => {
  const[ questions, setQuestions] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>Questions And Ansewrs About Login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
             <Questions key={question.id} {...question}></Questions>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
