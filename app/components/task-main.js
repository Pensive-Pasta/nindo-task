"use client";
import { useState, useEffect } from "react";
import TaskFilter from "./task-filter";
import TaskList from "./task-list";
import Header from "./header";
import AddTask from "./add-task";
import EditTask from "./edit-task";
import { fetchTasks, toggleTaskCompletion } from "../api/task-api";

const TaskMain = () => {
  const [startFadeIn, setStartFadeIn] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("today");
  const [showAddTask, setShowAddTask] = useState(false);

  const getTasks = async () => {
    const fetchedTasks = await fetchTasks();
    setTasks(fetchedTasks);
  };

  useEffect(() => {
    setTimeout(() => {
      setStartFadeIn(true);
    }, 100);
  }, []);

  useEffect(() => {
    getTasks();
  }, [showAddTask, editingTask]);

  const startEditTask = (task) => {
    setEditingTask(task);
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };

  const handleToggleCompletion = async (taskId, completedStatus) => {
    const success = await toggleTaskCompletion(taskId, completedStatus);
    if (success) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, completed: completedStatus } : task
        )
      );
      return true;
    } else {
      alert("Something went wrong");
      return false;
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleToggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div
      className={`transition-opacity duration-2000 ease-in ${
        startFadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <Header
        onAddTask={handleToggleAddTask}
        isAddingTask={showAddTask}
        isEditingTask={!!editingTask}
        onCancelEdit={cancelEdit}
      />

      {editingTask ? (
        <EditTask task={editingTask} onBack={cancelEdit} />
      ) : (
        <>
          {showAddTask ? (
            <AddTask onBack={handleToggleAddTask} />
          ) : (
            <>
              <TaskFilter
                currentFilter={filter}
                onFilterChange={handleFilterChange}
              />
              <TaskList
                filter={filter}
                tasks={tasks}
                onEditTask={startEditTask}
                onToggleCompletion={handleToggleCompletion}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TaskMain;
