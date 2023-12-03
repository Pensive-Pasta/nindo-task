"use client";
import { useState } from "react";
import TaskFilter from "./task-filter";
import TaskList from "./task-list";

const TaskMain = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Sample Task 1",
      date: "2023-12-02",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Sample Task 2",
      date: "2023-12-03",
      priority: "Medium",
      completed: false,
    },
    {
      id: 3,
      title: "Sample Task 3",
      date: "2023-12-03",
      priority: "Low",
      completed: false,
    },
  ]);
  const delay = (duration) => new Promise(resolve => setTimeout(resolve, duration));

  const toggleTaskCompletion = async (taskId) => {
    await delay(300);

    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const [filter, setFilter] = useState("today");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        filter={filter}
        tasks={tasks}
        onToggleCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default TaskMain;
