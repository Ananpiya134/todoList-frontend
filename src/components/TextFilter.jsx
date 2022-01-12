import {useState} from 'react'

function TextFilter(props){
    const {setSearchText,searchText} = props 
    
    const handleChangeText = e => {
       setSearchText(e.target.value)
    //    console.log(searchText)
    }
    
    return(
        <div className="input-group">
            <input 
            type="text" 
            className="form-control rounded-0" 
            value={searchText}
            onChange={handleChangeText}
            />
            <button 
            className="btn btn-secondary rounded-0"
            onClick={() => setSearchText('')}
            >
                <i className="fas fa-times"/>
            </button>

        </div>
    )
}

export default TextFilter;