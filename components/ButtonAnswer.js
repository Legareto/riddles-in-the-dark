import { useContext, useState } from "react";
import { GameContext } from "../contexts/GameContext";

function Game() {
  const { currentQuestion, checkAnswer } = useContext(GameContext);
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleCheckAnswer = () => {
    checkAnswer(answer);
    setAnswer("");
  };

  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <input type="text" value={answer} onChange={handleAnswerChange} />
      <button onClick={handleCheckAnswer}>Check Answer</button>
    </div>
  );
}

export default Game;
