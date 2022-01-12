import TextFilter from "./TextFilter";
import StatusFilter from "./StatusFilter";

function SearchBar(props){
    const {setSearchText,searchText,statusText,setStatusText} = props
    return(
        <div className="mt-4 d-flex ">
            <TextFilter
            setSearchText={setSearchText}
            searchText={searchText}
            />
            <StatusFilter
            statusText={statusText}
            setStatusText={setStatusText}
            />
        </div>
    )
}

export default SearchBar;