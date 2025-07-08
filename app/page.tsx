"use client";
import { useState } from "react";
import { Homepage } from "./components/Homepage";
import Layout from "./components/Layout";
import { SplashScreen } from "./components/Homepage/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(() => {

    // This runs only on the client-side(Browser)
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('splashShown');
    }
    return true; // Default to true for SSR
  });

  const handleAnimationComplete = () => {
    // Mark splash as shown only when animation completes
    sessionStorage.setItem('splashShown', 'true');
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onAnimationComplete={handleAnimationComplete} />;
  }

  return (
    <Layout>
      <Homepage />
    </Layout>
  );
}
