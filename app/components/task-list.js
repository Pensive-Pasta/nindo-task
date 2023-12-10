import TaskCard from "./task-card";
import { isToday } from "date-fns";

const TaskList = ({ filter, tasks, onToggleCompletion, onEditTask }) => {
  const getFilteredTasks = () => {
    const today = new Date();
    switch (filter) {
      case "today":
        return tasks.filter(task => 
          (!task.completed && (isToday(new Date(task.dueDate)) || new Date(task.dueDate) < today))
        );
        case "upcoming":
          return tasks.filter(task => 
            !task.completed && new Date(task.dueDate) > today
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
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskCard key={task._id} task={task} onToggleCompletion={onToggleCompletion} onEditTask={onEditTask} />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
      <p className="text-center text-gray-500 text-lg">
        You're all caught up! <br />
        Add a new task to get started.
      </p>
    </div>
  )}
</div>
  );
};

export default TaskList;