import {useState, useEffect} from 'react'

function TextFilter(props){
    const {setSearchText} = props 
    const  [input,setInput] = useState('')

    useEffect(() => {                                                                      //the useEffect id created to decrease working of sending request to database
        const timeoutId = setTimeout(()=> {                                                //by using setTimeout to send search request after 1500 ms
            // setSearchText(input)
            console.log('input changed')
        },1500)
        return () => {  
            clearTimeout(timeoutId)                                                        //the return of clearTimeout is for clearing effect from the previos effect
        }
    },[input,setSearchText])

    const handleChangeText = e => {
       setInput(e.target.value)
    
    }
    
    return(
        <div className="input-group">
            <input 
            type="text" 
            className="form-control rounded-0" 
            value={input}
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