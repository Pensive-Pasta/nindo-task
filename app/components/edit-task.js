import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { updateTask, deleteTask } from "../api/task-api";

const EditTask = ({ task, onBack }) => {
  const [title, setTaskTitle] = useState(task.title);
  const [description, setTaskDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(new Date(task.dueDate));
  const [priority, setPriority] = useState(task.priority);
  const [showDropdown, setShowDropdown] = useState(false);
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const [saveButtonText, setSaveButtonText] = useState("Save Changes");
  const [isSaving, setIsSaving] = useState(false);
  const [deleteButtonText, setDeleteButtonText] = useState("Yes, Delete");
  const [isDeleting, setIsDeleting] = useState(false);

  const priorities = ["High", "Medium", "Low"];

  useEffect(() => {
    if (task) {
      setTaskTitle(task.title);
      setTaskDescription(task.description);
      setDueDate(new Date(task.dueDate));
      setPriority(task.priority);
    }
  }, [task]);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveButtonText("Saving...");

    setTimeout(async () => {
      try {
        const success = await updateTask(task._id, {
          title,
          description,
          dueDate,
          priority,
        });

        if (success) {
          setSaveButtonText("Saved!");
          setTimeout(() => {
            onBack();
            setSaveButtonText("Save Changes");
            setIsSaving(false);
          }, 1500);
        } else {
          setSaveButtonText("Save Changes");
          setIsSaving(false);
        }
      } catch (error) {
        setSaveButtonText("Save Changes");
        setIsSaving(false);
      }
    }, 1000);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    setDeleteButtonText("Deleting...");

    setTimeout(async () => {
      try {
        const success = await deleteTask(task._id);
        if (success) {
          setDeleteButtonText("Task Deleted!");
          setTimeout(() => {
            onBack();
            setDeleteButtonText("Delete");
            setIsDeleting(false);
          }, 1000);
        } else {
          setDeleteButtonText("Delete");
          setIsDeleting(false);
        }
      } catch (error) {
        setDeleteButtonText("Delete");
        setIsDeleting(false);
      }
    }, 1000);
  };

  return (
    <div className="p-4">
      {deleteAlertOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-xl mx-4">
            <p className="text-lg font-semibold mb-4">Confirm Deletion</p>
            <p>Are you sure you want to permanently delete this task?</p>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                disabled={isDeleting}
              >
                {deleteButtonText}
              </button>
              <button
                onClick={() => setDeleteAlertOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
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
        onClick={handleSave}
        disabled={isSaving}
      >
        {saveButtonText}
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
