import TodoItem from "./TodoItem";

function TodoList(props){
    const {todoList} = props 
    return(
        <div className="shadow">
            <ul className="list-group rounded-0">
                {todoList.map(item => {
                    return <TodoItem 
                    item={item}
                    key={item.id}/>
                })}
            </ul>

        </div>
    )
}

export default TodoList;