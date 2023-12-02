const EditTask = ({task}) => {
    return (
        <form>
        <input type="text" value={task.title} className="..." />
        <button type="submit" className="...">Update Task</button>
        </form>
    );
}

export default EditTask;