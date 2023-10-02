import { useGame } from "../contexts/GameContext";

const LifeIndicator = () => {
  const { lives } = useGame();

  return (
    <div>
      {Array.from({ length: lives }).map((_, idx) => (
        <span key={idx}>❤️</span>
      ))}
    </div>
  );
};

export default LifeIndicator;
