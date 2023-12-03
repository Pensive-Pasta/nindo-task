const TaskFilter = ({ onFilterChange }) => {
    return (
        <div className="flex justify-between space-x-4 p-4 text-lg">
          <button onClick={() => onFilterChange('today')} className="text-blue-600">Today</button>
          <button onClick={() => onFilterChange('week')} className="text-blue-600">This Week</button>
          <button onClick={() => onFilterChange('completed')} className="text-blue-600">Completed</button>
        </div>
    );
}

export default TaskFilter;
