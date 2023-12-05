import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { createNewTask } from "../api/task-api";

const AddTask = ({ onBack }) => {
  const [title, setTaskTitle] = useState("");
  const [description, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState("Medium");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = async () => {
    const newTask = await createNewTask({
      title,
      description,
      dueDate,
      priority,
    });
    if (newTask) {
      alert("New task created!");
      onBack();
      clearInputData();
    } else {
      alert("Error creating task");
    }
  };

  const clearInputData = () => {
    setTaskTitle("");
    setTaskDescription("");
    setDueDate(new Date());
    setPriority("Medium");
    setShowDropdown(false);
  };

  const priorities = ["High", "Medium", "Low"];

  return (
    <div className="p-4">
      <div className="text-lg text-blue-600 mb-4">
        <span>New Task</span>
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
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
