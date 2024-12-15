import React from "react";
const Select=(props)=>{
    return(
        <div>
            <select name="" id="" onChange={(e)=>props.setSortType(e.target.value)}>
                <option value="None">None</option>
                <option value="rating">Rating</option>
                <option value="releaseYear">Release Year</option>
            </select>
        </div>
    )
}
export default Select;