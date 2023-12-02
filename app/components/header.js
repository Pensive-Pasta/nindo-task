import { AiOutlinePlus } from 'react-icons/ai';

const Header = ({ onAddTask }) => {
    return (
        <nav className="flex justify-between items-center p-4">
            <h1 className="text-3xl ">NINDO TASK</h1>
            <button onClick={onAddTask} className="p-2 bg-blue-500 rounded-full shadow-2xl text-white text-2xl">
                <AiOutlinePlus />
            </button>
        </nav>
    );
}

export default Header;
