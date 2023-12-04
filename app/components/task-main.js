"use client";
import { useState } from "react";
import TaskFilter from "./task-filter";
import TaskList from "./task-list";
import Header from "./header";
import AddTask from "./add-task";
import EditTask from "./edit-task";

const TaskMain = () => {
  const [editingTask, setEditingTask] = useState(null);

  const startEditTask = (task) => {
    setEditingTask(task);
  };

  const saveTask = (updatedTask) => {
    setEditingTask(null);
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Sample Task 1",
      description:
        "Sample Description Stuff Blah blah blah why not use lorem ipy do dah sir",
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
  const delay = (duration) =>
    new Promise((resolve) => setTimeout(resolve, duration));

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

  const handleToggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div>
      <Header
        onAddTask={handleToggleAddTask}
        isAddingTask={showAddTask}
        isEditingTask={!!editingTask}
        onCancelEdit={cancelEdit}
      />

      {editingTask ? (
        <EditTask task={editingTask} onSave={saveTask} onCancel={cancelEdit} />
      ) : (
        <>
          {showAddTask ? (
            <AddTask onBack={handleToggleAddTask} />
          ) : (
            <>
              <TaskFilter onFilterChange={handleFilterChange} />
              <TaskList
                filter={filter}
                tasks={tasks}
                onToggleCompletion={toggleTaskCompletion}
                onEditTask={startEditTask}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TaskMain;
