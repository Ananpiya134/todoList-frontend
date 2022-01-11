import EditTodo from "./EditTodo"

function TodoItem (props){
    const {item} = props
    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-${item.completed ? "success": "warning"}`}>
           {/* <EditTodo/> */}
           
            <span>{item.title}</span>
            <div className="btn-group">
                <button className="btn btn-info rounded-0">
                    <i className={`fas fa-toggle-${item.completed ? "on" : "off"}`}/>
                </button>
                <button className="btn btn-danger rounded-0">
                    <i className={`fas fa-trash-alt`}/>
                </button>
            </div>
        </li>
    )
}

export default TodoItem