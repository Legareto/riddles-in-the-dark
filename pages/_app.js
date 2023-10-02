import { GameProvider } from "../contexts/GameContext";
import "../styles/globals.css"; // or wherever your global styles are

function MyApp({ Component, pageProps }) {
  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  );
}

export default MyApp;
