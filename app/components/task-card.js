"use client";
import { Switch } from "@headlessui/react";
import { useState } from "react";

const TaskCard = ({ task, onToggleCompletion }) => {
  const [enabled, setEnabled] = useState(task.completed);
  const handleToggle = () => {
    setEnabled(!enabled);
    onToggleCompletion(task.id);
  };

  return (
    <div className="bg-gray-50 p-4 h-32 rounded-3xl shadow-md mb-2.5 flex justify-between items-center md:min-w-[700px]">
      <div className="flex items-center space-x-4">
        <Switch
          checked={enabled}
          onChange={handleToggle}
          className={`${enabled ? "bg-blue-500" : "bg-gray-200"}
                relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
        >
          <span
            className={`${enabled ? "translate-x-6" : "translate-x-1"}
                     inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
        <div>
          <h3 className="text-xl font-semibold text-black">{task.title}</h3>
          <div className="flex items-center">
            <p className="font-light text-gray-500 text-xs">{task.date}</p>
            <span className=" text-blue-500 text-sm px-2 py-1 ml-2">
              {task.priority}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
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
