import React from "react";
const SortButtons=(props)=>{
    return(
        <div>
            <input type="button" value="Sort By Rating" onClick={props.SortByRating} />
            <input type="button" value="Sort By Release Year" onClick={props.SortByReleaseYear} />
        </div>
    )
}
export default SortButtons;