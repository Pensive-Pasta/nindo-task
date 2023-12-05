import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditTask = ({ task, onSave, onDelete }) => {
  const [title, setTaskTitle] = useState(task.title);
  const [description, setTaskDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(new Date(task.dueDate));
  const [priority, setPriority] = useState(task.priority);
  const [showDropdown, setShowDropdown] = useState(false);
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const priorities = ["High", "Medium", "Low"];

  useEffect(() => {
    if (task) {
      setTaskTitle(task.title);
      setTaskDescription(task.description);
      setDueDate(new Date(task.dueDate));
      setPriority(task.priority);
    }
  }, [task]);

  const handleSubmit = () => {
    onSave(task._id, {
      title,
      description,
      dueDate,
      priority,
    });
  };

  const handleDelete = () => {
    onDelete(task._id);
  };

  return (
    <div className="p-4">
      {/* style popover */}
      {deleteAlertOpen && (
        <div
          style={{
            width: "500px",
            height: "500px",
            zIndex: 2,
            position: "absolute",
          }}
        >
          <p>Are you sure you want to permanently delete this task?</p>
          <button onClick={handleDelete}>Yes, delete</button>
          <button onClick={() => setDeleteAlertOpen(false)}>Cancel</button>
        </div>
      )}
      <div className="text-lg text-blue-600 mb-4">
        <span>Edit Task</span>
      </div>
      <input
        className="border p-2 rounded w-full mb-4"
        maxLength="50"
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <textarea
        className="border p-2 rounded w-full mb-4"
        maxLength="500"
        placeholder="Write your description"
        value={description}
        onChange={(e) => setTaskDescription(e.target.value)}
        rows={2}
      />
      <DatePicker
        selected={dueDate}
        onChange={(date) => setDueDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        className="border rounded p-2 w-full mr-10 mb-4"
      />
      <div className="relative">
        <button
          className="border p-2 rounded w-full mb-4 text-left bg-white"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Priority: {priority}
        </button>
        {showDropdown && (
          <ul className="absolute border rounded w-full bg-white">
            {priorities.map((p, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setPriority(p);
                  setShowDropdown(false);
                }}
              >
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        className="w-full bg-blue-500 text-white p-3 rounded"
        onClick={handleSubmit}
      >
        Save Changes
      </button>
      <button
        className="w-full bg-red-500 text-white p-3 rounded mt-4"
        onClick={() => setDeleteAlertOpen(true)}
      >
        Delete
      </button>
    </div>
  );
};

export default EditTask;
