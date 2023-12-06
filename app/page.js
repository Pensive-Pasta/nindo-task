"use client"
import { useState, useEffect } from 'react';
import TaskMain from './components/task-main';
import Splash from './components/splash';
import { fetchTasks } from './api/task-api';

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const splashTimeout = setTimeout(() => setShowSplash(false), 6000);
    const fetchData = async () => {
      try {
        await fetchTasks();
        setDataLoaded(true);
      } catch (error) {
        console.error('Data fetching error:', error);
        setDataLoaded(false);
      }
    };

    fetchData();

    return () => clearTimeout(splashTimeout);
  }, []);

  if (showSplash || !dataLoaded) {
    return <Splash />;
  }

  return (
    <div>
      <TaskMain />
    </div>
  );
};

export default Home;
