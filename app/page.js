"use client";
import { useState, useEffect } from "react";
import TaskMain from "./components/task-main";
import Splash from "./components/splash";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOutSplash, setFadeOutSplash] = useState(false);
  const [serverReady, setServerReady] = useState(false);

  const pingServer = async () => {
    try {
      const response = await fetch("http://localhost:3001/ping");
      if (response.ok) {
        setTimeout(() => {
          setFadeOutSplash(true);
          setShowSplash(false);
        }, 2000);
        setServerReady(true);
      } else {
        throw new Error("Server not ready");
      }
    } catch (error) {
      console.error("Ping error:", error);
      setServerReady(false);
    }
  };

  useEffect(() => {
    pingServer();
  }, []);

  if (showSplash || !serverReady) {
    return <Splash fadeOut={fadeOutSplash} />;
  } else {
    return <TaskMain />;
  }
};

export default Home;
