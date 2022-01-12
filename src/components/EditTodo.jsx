import {useState} from 'react'

function EditTodo(props){
    const {onClickCancel, title, id, updateTodo} = props

    const [input,setInput] = useState(title)
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (input === ''){
            return setError('Title is required')
        }
        updateTodo(id,{title : input})
        onClickCancel();
    }
    return(
        <form className="flex-grow-1"
        onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="text" className={`form-control rounded-0 ${error ? 'is-invalid' : ''}`}
                value={input}
                onChange={ e => setInput(e.target.value)}
                />
                <button className="btn btn-primary rounded-0">
                    <i className="far fa-edit"/>
                </button>
                <button 
                className="btn btn-danger rounded-0"
                type='button'
                onClick={onClickCancel}
                >
                    <i className="fas fa-times"/>
                </button>
                {error && <div className='invalid-feedback'> {error}</div>}
            </div>
        </form>
    )
}

export default EditTodo;