import React from "react";
import MovieDetails from "./MovieDetails";
const MovieList=(props)=>{
    return(
        <div className="MovieList">
            {props.list.map((movie,index)=>(
                <MovieDetails key={index} title={movie.title} director={movie.director} releaseYear={movie.releaseYear} genre={movie.genre} rating={movie.rating} setFavorite={props.setFavorite} favorite={props.favorite} />
            ))}
        </div>
    )
}
export default MovieList;