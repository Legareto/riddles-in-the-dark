import { useGame } from "../contexts/GameContext";
import riddles from "../data/riddles";
import LifeIndicator from "../components/LifeIndicator";
import { useState } from "react";

const HomePage = () => {
  const { currentLevel, reduceLife, nextLevel } = useGame();
  const currentRiddle = riddles[currentLevel - 1];
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleCheckAnswer = () => {
    if (answer.toLowerCase() === currentRiddle.answer) {
      nextLevel();
    } else {
      reduceLife();
    }
    setAnswer("");
  };

  return (
    <div>
      <LifeIndicator />
      <h1>{currentRiddle.question}</h1>
      <input type="text" value={answer} onChange={handleAnswerChange} />
      <button className="p-6 m-3" onClick={handleCheckAnswer}>
        Check Answer
      </button>
    </div>
  );
};

export default HomePage;
