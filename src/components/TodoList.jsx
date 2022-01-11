import TodoItem from "./TodoItem";

function TodoList(props){
    const {todoList, deleteTodo} = props 
    return(
        <div className="shadow">
            <ul className="list-group rounded-0">
                {todoList.map(item => {
                    return <TodoItem 
                    item={item}
                    key={item.id}
                    deleteTodo={deleteTodo}
                    />
                })}
            </ul>

        </div>
    )
}

export default TodoList;