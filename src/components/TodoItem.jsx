import {useContext, useState} from 'react'
import { TodoListContext } from '../contexts/TodoListContext'
import EditTodo from "./EditTodo"

function TodoItem ({todo:{title, completed, id}}){
    const [isEdit,setIsEdit] = useState(false)
    const {deleteTodo,updateTodo} = useContext(TodoListContext)
    
    
    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-${completed === true ? 'success':'warning'}`}>
           {isEdit ? (
           <EditTodo
           id={id}
           title={title}
           cancelEdit={() => setIsEdit(false)}
           />
           ) : (
               <>
                    <span onClick={() => setIsEdit(true)} >{title}</span>
                    <div className="btn-group">
                        <button 
                        className="btn btn-info rounded-0"
                        onClick={() => updateTodo(id,{completed: !completed})}
                        >
                            <i className={`fas fa-toggle-${completed === true ? 'on':'off'}`}/>
                        </button>
                        <button 
                        className="btn btn-danger rounded-0"
                        onClick={() => deleteTodo(id)}
                        >
                            <i className={`fas fa-trash-alt`}/>
                        </button>
                    </div>
               </>
           )}
        </li>
    )
}

export default TodoItem