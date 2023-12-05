import TaskCard from "./task-card";
import { isToday, isThisWeek } from "date-fns";

const TaskList = ({ filter, tasks, onToggleCompletion, onEditTask }) => {
  const getFilteredTasks = () => {
    const today = new Date();
    switch (filter) {
      case "today":
        return tasks.filter(task => 
          (!task.completed && (isToday(new Date(task.dueDate)) || new Date(task.dueDate) < today))
        );
      case "week":
        return tasks.filter((task) =>
          isThisWeek(new Date(task.dueDate), { weekStartsOn: 1 }) && !task.completed
        );
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div>
      {filteredTasks.map((task) => (
        <TaskCard key={task._id} task={task} onToggleCompletion={onToggleCompletion} onEditTask={onEditTask} />
      ))}
    </div>
  );
};

export default TaskList;