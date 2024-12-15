import React from "react";
const SearchBar=(props)=>{
    return(
        <div className="SearchBar">
            <label htmlFor="">Search :</label>
            <input type="text" placeholder="Search a movie" onChange={(e)=>props.setSearchTerm(e.target.value)} />
        </div>
    )
}
export default SearchBar;