import { useContext } from 'react';
import { TodoListContext } from '../App';
import TodoItem from './TodoItem'
function TodoList(){

    const value = useContext(TodoListContext)
    console.log(value)
    return(
        <div className="shadow">
            <ul className="list-group rounded-0">
               <TodoItem />
            </ul>

        </div>
    )
}

export default TodoList;