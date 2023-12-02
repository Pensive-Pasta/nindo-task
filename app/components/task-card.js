const TaskCard = ({ task }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-2 flex justify-between items-center w-full md:min-w-[700px]">
            <div>
                <h3 className="text-lg font-semibold text-black">{task.title}</h3>
                <p className="text-gray-500">{task.date}</p>
            </div>
            <div className="flex items-center">
                <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mr-2">
                    {task.priority}
                </span>
                <button className="text-sm bg-gray-200 rounded-full p-2 mr-2">Edit</button>
                <button className="text-sm bg-red-500 text-white rounded-full p-2">Delete</button>
            </div>
        </div>
    );
}

export default TaskCard;

