import {useState, useContext} from 'react'
import axios from 'axios'
import { TodoListContext } from '../contexts/TodoListContext'

function AddTodo(){
    const {addTodo} = useContext(TodoListContext)
    const [title,setTitle] =useState('')

    
    const handleSubmitForm = async e => {
        e.preventDefault()
        addTodo({title,  completed:false})
    }

    return(
        <div>
            <form onSubmit={handleSubmitForm}>
                <div className="input-group">
                    <input 
                    type="text" 
                    value={title}
                    className={`form-control rounded-0 `}
                    onChange={e => setTitle(e.target.value)}
                    />
                    <button 
                    className="btn btn-success rounded-0">
                        <i className="fas fa-plus" />
                    </button>
                </div>
        </form>
        </div>
    )
}

export default AddTodo;