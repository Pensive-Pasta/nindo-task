import TaskCard from "./task-card";

const TaskList = () => {
  const tasks = [
    { id: 1, title: "Task 1", date: "Due date", priority: "High" },
    { id: 2, title: "Task 2", date: "Due date", priority: "Medium" },
    { id: 3, title: "Task 3", date: "Due date", priority: "Low" },
  ];
  
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
