const TaskFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="flex justify-between space-x-4 p-4 text-lg">
      <button 
        onClick={() => onFilterChange('today')}
        className={`text-blue-600 ${currentFilter === 'today' ? 'font-bold' : ''}`}
      >
        Today
      </button>
      <button 
        onClick={() => onFilterChange('upcoming')}
        className={`text-blue-600 ${currentFilter === 'upcoming' ? 'font-bold' : ''}`}
      >
        Upcoming
      </button>
      <button 
        onClick={() => onFilterChange('completed')}
        className={`text-blue-600 ${currentFilter === 'completed' ? 'font-bold' : ''}`}
      >
        Completed
      </button>
    </div>
  );
}


export default TaskFilter;
