import { useGame } from "../contexts/GameContext";
import riddles from "../data/riddles";
import { useState } from "react";
import HealthBar from "../components/HealthBar";
import GameTitle from "../components/GameTitle";

const Game = () => {
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
    <div className="">
      <GameTitle />
      <div className="p-3 border border-blue-950 rounded-lg">
        <HealthBar />
        <div className="mt-12 mb-12">
          <h3 className="p-2 text-lg">Gollum&apos;s riddle :</h3>
          <h2 className="p-6 text-4xl rounded-lg bg-blue-950">
            {currentRiddle.question}
          </h2>
        </div>
        <div>
          <h3 className="p-2 text-lg">Your answer :</h3>
          <input type="text" value={answer} onChange={handleAnswerChange} />
          <button className="ml-2" onClick={handleCheckAnswer}>
            ✅ Check Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
