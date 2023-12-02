"use client"
import { Switch } from "@headlessui/react";
import { useState } from "react";

const TaskCard = ({ task }) => {
  const [enbabled, setEnabled] = useState(task.completed);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-2 flex justify-between items-center md:min-w-[700px]">
        <div className="flex items-center space-x-4">
      <Switch
        checked={enbabled}
        onChange={setEnabled}
        className={`${enbabled ? "bg-blue-500" : "bg-gray-200"}
                relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
      >
        <span
          className={`${enbabled ? "translate-x-6" : "translate-x-1"}
                     inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
        />
      </Switch>
      <div>
        <h3 className="text-lg font-semibold text-black">{task.title}</h3>
        <p className="text-gray-500">{task.date}</p>
      </div>
      </div>
      <div className="flex items-center">
        <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mr-2">
          {task.priority}
        </span>
        <button className="text-sm bg-gray-200 rounded-full p-2 mr-2">
          Edit
        </button>
        <button className="text-sm bg-red-500 text-white rounded-full p-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
