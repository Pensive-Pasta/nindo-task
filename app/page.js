"use client";
import { useState, useEffect } from "react";
import TaskMain from "./components/task-main";
import Splash from "./components/splash";
import { checkServer } from "./api/task-api";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOutSplash, setFadeOutSplash] = useState(false);
  const [serverReady, setServerReady] = useState(false);

  const pingServer = async () => {
    try {
      const serverIsReady = await checkServer();
      if (serverIsReady) {
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
