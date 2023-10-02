import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [lives, setLives] = useState(3); // Start with 3 lives

  const nextLevel = () => setCurrentLevel((level) => level + 1);
  const reduceLife = () => setLives((lives) => lives - 1);

  return (
    <GameContext.Provider
      value={{ currentLevel, lives, nextLevel, reduceLife }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
