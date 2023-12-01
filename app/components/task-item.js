const TaskItem = ({ task }) => {
    return (
        <div className="flex justify-between items-center p-2 border-b">
            <span>{task}</span>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default TaskItem;
