import { useGame } from "../contexts/GameContext";

const LifeIndicator = () => {
  const { lives } = useGame();

  return (
    <div className="flex text-xl justify-left">
      <p>Your life :&nbsp;</p>
      {Array.from({ length: lives }).map((_, idx) => (
        <span key={idx}>❤️</span>
      ))}
    </div>
  );
};

export default LifeIndicator;
