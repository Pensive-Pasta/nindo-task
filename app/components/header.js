import { AiOutlinePlus } from "react-icons/ai";

const Header = ({ onAddTask, isAddingTask, isEditingTask, onCancelEdit }) => {
  const now = new Date();
  const formattedDate = `${now.getDate()} ${now.toLocaleString("en-GB", {
    month: "long",
  })} ${now.getFullYear()}`;

  let button;
  if (isAddingTask) {
    button = (
      <button onClick={onAddTask} className="text-blue-500 mr-1">
        Cancel
      </button>
    );
  } else if (isEditingTask) {
    button = (
      <button onClick={onCancelEdit} className="text-blue-500 mr-1">
        Cancel
      </button>
    );
  } else {
    button = (
      <button
        onClick={onAddTask}
        className="p-2 bg-blue-500 rounded-full shadow-2xl text-white text-2xl"
      >
        <AiOutlinePlus />
      </button>
    );
  }

  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <h1 className="text-4xl font-irish-grover">NINDO TASK</h1>
        <p>{formattedDate}</p>
      </div>
      {button}
    </nav>
  );
};

export default Header;
