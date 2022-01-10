import TodoItem from "./TodoItem";

function TodoList(){
    return(
        <div className="shadow">
            <ul className="list-group rounded-0">
                <TodoItem/>
            </ul>

        </div>
    )
}

export default TodoList;