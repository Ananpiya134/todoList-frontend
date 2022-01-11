import EditTodo from "./EditTodo"

function TodoItem (props){
    const {item, deleteTodo, updateTodo} = props

    const handleClickDelete = () => {
        deleteTodo(item.id)
    }

    const handleClickToggle = () => {
        updateTodo(item.id, {completed:!item.completed})
        console.log(item.completed)
    }
    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-${item.completed ? "success": "warning"}`}>
           {/* <EditTodo/> */}
           
            <span>{item.title}</span>
            <div className="btn-group">
                <button 
                className="btn btn-info rounded-0"
                onClick={handleClickToggle}>
                    <i className={`fas fa-toggle-${item.completed ? "on" : "off"}`}/>
                </button>
                <button 
                className="btn btn-danger rounded-0"
                onClick={handleClickDelete}
                >
                    <i className={`fas fa-trash-alt`}/>
                </button>
            </div>
        </li>
    )
}

export default TodoItem