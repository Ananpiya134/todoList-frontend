import {useState, useContext} from 'react'
import { TodoListContext } from '../contexts/TodoListContext'

function EditTodo({cancelEdit, title:oldTitle, id}){
    const [title,setTitle] = useState(oldTitle)

    const {updateTodo} = useContext(TodoListContext)

    const handleSubmitForm = e => {
        e.preventDefault()
        updateTodo(id,{title})
        cancelEdit()
    }
    return(
        <form className="flex-grow-1" onClick={handleSubmitForm}>
            <div className="input-group">
                <input 
                type="text" 
                className={`form-control rounded-0`}
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                <button className="btn btn-primary rounded-0" >
                    <i className="far fa-edit"/>
                </button>
                <button 
                className="btn btn-danger rounded-0"
                type='button'
                onClick={() => cancelEdit()}
                >
                    <i className="fas fa-times"/>
                </button>
                {/* <div className='invalid-feedback'>error</div> */}
            </div>
        </form>
    )
}

export default EditTodo;