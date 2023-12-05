"use client";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import { format } from "date-fns";

const TaskCard = ({ task, onToggleCompletion, onEditTask }) => {
  const [enabled, setEnabled] = useState(task.completed);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = async () => {
    const updatedCompletionStatus = !enabled;
    setEnabled(updatedCompletionStatus);
    setTimeout(() => {
      onToggleCompletion(task._id, updatedCompletionStatus).then((success) => {
        // if toggling failed, set back to original value
        if (!success) setEnabled(!enabled);
      });
    }, 1000);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMMM d, yyyy h:mm aa");
  };

  return (
    <div className="bg-gray-50 p-4 min-h-32 rounded-3xl shadow-md mb-2.5 flex justify-between items-center md:min-w-[700px]">
      <div className="flex items-center space-x-4">
        <div className="min-w-11">
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
        </div>
        <div>
          <h3 className="text-xl font-semibold text-black">
            {truncateText(task.title, 15)}
          </h3>
          <p
            className="text-xs text-blue-500 cursor-pointer"
            onClick={toggleExpand}
          >
            {isExpanded ? "View Less" : "View More"}
          </p>
          {isExpanded && <p className="text-xs">{task.description}</p>}
          <div className="flex items-center">
            <p className="font-light text-gray-500 text-xs">
              {formatDate(task.dueDate)}
            </p>
            <span className=" text-blue-500 text-sm px-2 py-1 ml-2">
              {task.priority}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => onEditTask(task)}
          className="text-sm bg-gray-200 rounded-full p-2 mr-2"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
