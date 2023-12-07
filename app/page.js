"use client"
import { useState, useEffect } from 'react';
import TaskMain from './components/task-main';
import Splash from './components/splash';

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOutSplash, setFadeOutSplash] = useState(false);
  const [serverReady, setServerReady] = useState(false);

  const pingServer = async () => {
    try {
      const response = await fetch('http://localhost:3001/ping');
      if (response.ok) {
        setTimeout(() => setFadeOutSplash(true), 3000);
        setTimeout(() => setShowSplash(false), 4000);
        setServerReady(true);
      } else {
        throw new Error('Server not ready');
      }
    } catch (error) {
      console.error('Ping error:', error);
      setServerReady(false);
    }
  };

  useEffect(() => {
    pingServer();
  }, []);

  if (showSplash || !serverReady) {
    return <Splash fadeOut={fadeOutSplash} />;
  }

  return <TaskMain />;
};

export default Home;
