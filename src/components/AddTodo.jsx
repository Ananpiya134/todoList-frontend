function AddTodo(){
    return(
        <div className="input-group">
            <input type="text" className="form-control rounded-0 is-invalid" />
            <button className="btn btn-success rounded-0">
                <i className="fas fa-plus" />
            </button>
            <div className="invalid-feedback">Error Message</div>
        </div>
    )
}

export default AddTodo;