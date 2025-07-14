"use client";
import { useState, useEffect } from "react";
import { Homepage } from "./components/Homepage";
import Layout from "./components/Layout";
import { SplashScreen } from "./components/Homepage/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check if splash was already shown in this session
    const splashShown = sessionStorage.getItem('splashShown');
    if (splashShown) {
      setShowSplash(false);
    }
  }, []);

  const handleAnimationComplete = () => {
    // Mark splash as shown only when animation completes
    sessionStorage.setItem('splashShown', 'true');
    setShowSplash(false);
  };

  // Always render the same structure on server and initial client render
  if (!isClient || showSplash) {
    return <SplashScreen onAnimationComplete={handleAnimationComplete} />;
  }

  return (
    <Layout>
      <Homepage />
    </Layout>
  );
}
