import TextFilter from "./TextFilter";
import StatusFilter from "./StatusFilter";

function SearchBar(){
    return(
        <div className="mt-4">
            <TextFilter/>
            <StatusFilter/>
        </div>
    )
}

export default SearchBar;