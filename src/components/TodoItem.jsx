import EditTodo from "./EditTodo"

function TodoItem (){
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-warning">
           <EditTodo/>
           
            {/* <span>Task</span>
            <div className="btn-group">
                <button className="btn btn-info rounded-0">
                    <i className=" fas fa-toggle-on"/>
                </button>
                <button className="btn btn-danger rounded-0">
                    <i className=" fas fa-trash-alt"/>
                </button>
                <button className="btn btn-info rounded-0">
                    <i className=" fas fa-toggle-on"/>
                </button>  

            </div> */}
        </li>
    )
}

export default TodoItem