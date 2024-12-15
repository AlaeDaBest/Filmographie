import React, { useState } from "react";
const MovieDetails=(props)=>{
    function addMovie(){
        const Movie={
            "title":props.title,
            "director":props.director,
            "releaseYear":props.releaseYear,
            "genre":props.genre,
            "rating":props.rating
        }
        var exist=false;
        let favorites=props.favorite
        console.log("favorites")
        favorites.forEach(movie=>{
            if(movie.title===Movie.title){
                exist=true
            }
        });
        if(exist==false){
            props.favorite.push(Movie)
        }
        props.setFavorite([...favorites])
    }
    const [hidden,setHidden]=useState(true)
    return(
        <div onClick={()=>setHidden(!hidden)} className="MovieCard">
            <h2>{props.title}</h2>
            {hidden? "" :
            <div>
                <h4><span>Director:</span>{props.director}</h4>
                <h4><span>Release Year:</span>{props.releaseYear}</h4>
                <h4><span>Genre:</span>{props.genre}</h4>
                <h4><span>Rating:</span>{props.rating}</h4>
                <div>
                    <input type="button" value="Add To Favorite" onClick={addMovie} />
                </div>
            </div>
            }
        </div>
    )
}
export default MovieDetails;