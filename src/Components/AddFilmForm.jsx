import React, { useState } from "react";
const Form=(props)=>{
    const [Title,setTitle]=useState("")
    const [Director,setDirector]=useState("")
    const [ReleaseYear,setReleaseYear]=useState(1)
    const [Genre,setGenre]=useState("Science Fiction")
    const [Rating,setRating]=useState(1)
    function HandleSubmit(e){
        e.preventDefault()
        if(Title==="" || Director===""){
            alert("All Fields Are Required!")
        }
        else if(ReleaseYear<1550){
            alert("Release Year Must Be Greater Than 1550!")
        }
        else if(Rating>10 || Rating<0){
            alert("Rating Must Be Between 0 and 10!")
        }
        else{
            const Movie={
                "title":Title,
                "director":Director,
                "releaseYear":parseInt(ReleaseYear),
                "genre":Genre,
                "rating":parseFloat(Rating)
            }
            var exist=false
            props.result.forEach(movie => {
                if(movie.title===Movie.title){
                    exist=true
                }
            });
            if(exist==false){
                props.result.push(Movie)
                props.setTotalPages(Math.ceil(props.result.length /5))
            }
        }
    }
    function Reset(){
        setTitle("")
        setDirector("")
        setGenre("Science Fiction")
        setReleaseYear("")
        setRating("")
    }
    return(
        <div className="FormGlobal">
            <form action="" onSubmit={HandleSubmit} id="Form">
                <label htmlFor="">Title :</label>
                <input type="text" value={Title} onChange={(e)=>setTitle(e.target.value)} />
                <label htmlFor="">Director :</label>
                <input type="text" value={Director} onChange={(e)=>setDirector(e.target.value)} />
                <label htmlFor="">Release Year :</label>
                <input type="text" value={ReleaseYear} onChange={(e)=>setReleaseYear(e.target.value)} />
                <label htmlFor="">Genre :</label>
                <select name="" id="" value={Genre} onChange={(e)=>setGenre(e.target.value)}>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Crime">Crime</option>
                    <option value="Action">Action</option>
                    <option value="Historical Drama">Historical Drama</option>
                    <option value="Drama">Drama</option>
                    <option value="Comedy-Drama">Comedy-Drama</option>
                    <option value="Fantasy">Fantasy</option>
                </select>
                <label htmlFor="">Rating :</label>
                <input type="text" value={Rating} onChange={(e)=>setRating(e.target.value)} />
                <div>
                    <input type="submit" value="Submit" />
                    <input type="button" value="Reset" onClick={Reset} />
                </div>
            </form>
        </div>
    )
}
export default Form;