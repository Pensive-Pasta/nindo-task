import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const AddTask = ({ onBack }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState('Medium'); 
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = () => {
    console.log('Task Title:', taskTitle);
  console.log('Due Date:', dueDate);
  console.log('Priority:', priority);
  };

  const priorities = ["High", "Medium", "Low"];

  return (
    <div className="p-4">
      <input
        className="border p-2 rounded w-full mb-4"
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <DatePicker
        selected={dueDate}
        onChange={(date) => setDueDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        className="border p-2 rounded w-full mb-4"
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


      
      <button onClick={onBack} className="text-blue-500">Back</button>
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
