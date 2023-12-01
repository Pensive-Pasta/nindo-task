import TaskItem from "./task-item";

const TaskList = () => {

        const tasks = ["Task 1", "Task 2", "Task 3"];
        
        return (
            <div>
                {tasks.map((task, index) => (
                    <TaskItem key={index} task={task} />
                ))}
            </div>
        );
    }

    export default TaskList;