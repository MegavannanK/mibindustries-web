"use client";
import { useState } from "react";
import { Homepage } from "./components/Homepage";
import Layout from "./components/Layout";
import { SplashScreen } from "./components/Homepage/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleAnimationComplete = () => {
    setShowSplash(false);
  };

  return (
    <div>
      {showSplash && (
        <SplashScreen onAnimationComplete={handleAnimationComplete} />
      )}
      {!showSplash && (
        <Layout>
          <Homepage />
        </Layout>
      )}
    </div>
  );
}
