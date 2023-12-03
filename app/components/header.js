import { AiOutlinePlus } from 'react-icons/ai';

const Header = ({ onAddTask }) => {
    const now = new Date();
    const formattedDate = `${now.getDate()} ${now.toLocaleString('en-GB', { month: 'long' })} ${now.getFullYear()}`;

    return (
        <nav className="flex justify-between items-center p-4">
            <div>
                <h1 className="text-4xl font-normal">NINDO TASK</h1>
                <p>{formattedDate}</p>
            </div>
            <button onClick={onAddTask} className="p-2 bg-blue-500 rounded-full shadow-2xl text-white text-2xl">
                <AiOutlinePlus />
            </button>
        </nav>
    );
}

export default Header;
