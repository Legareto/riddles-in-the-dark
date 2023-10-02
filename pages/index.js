import { useGame } from "../contexts/GameContext";
import riddles from "../data/riddles";
import LifeIndicator from "../components/LifeIndicator";

const HomePage = () => {
  const { currentLevel, reduceLife, nextLevel } = useGame();
  const currentRiddle = riddles[currentLevel - 1];

  const handleAnswer = (answer) => {
    if (answer.toLowerCase() === currentRiddle.answer) {
      nextLevel();
    } else {
      reduceLife();
    }
  };

  return (
    <div>
      <LifeIndicator />
      <h1>{currentRiddle.question}</h1>
      <input type="text" onBlur={(e) => handleAnswer(e.target.value)} />
    </div>
  );
};

export default HomePage;
