import * as React from "react";

import { GameProvider } from "../contexts/GameContext";
import "../styles/globals.css"; // or wherever your global styles are

import { NextUIProvider } from "@nextui-org/react";

import { Mansalva, Ba } from "next/font/google";

const mansalva = Mansalva({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={mansalva.className}>
      <NextUIProvider>
        <GameProvider>
          <Component {...pageProps} />
        </GameProvider>
      </NextUIProvider>
    </main>
  );
}

export default MyApp;
