import TaskCard from "./task-card";
import { isToday, isThisWeek } from "date-fns";

const TaskList = ({ filter, tasks, onToggleCompletion }) => {
  const getFilteredTasks = () => {
    switch (filter) {
      case "today":
        return tasks.filter((task) => isToday(new Date(task.date)) && !task.completed
        );
      case "week":
        return tasks.filter((task) =>
          isThisWeek(new Date(task.date), { weekStartsOn: 1 }) && !task.completed
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
        <TaskCard key={task.id} task={task} onToggleCompletion={onToggleCompletion} />
      ))}
    </div>
  );
};

export default TaskList;
