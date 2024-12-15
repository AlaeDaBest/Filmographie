import React, { useState } from "react";
import MovieList from "./MoviesList";
import SortButtons from "./SortButtons";
import Select from "./Select";
import SearchBar from "./SearchBar";
import MovieDetails from "./MovieDetails";
import Form from "./AddFilmForm";
import Header from "./Header";
const Apps=()=>{
    const Movies=[ 
        { 
          "title": "Inception", 
          "director": "Christopher Nolan", 
          "releaseYear": 2010, 
          "genre": "Science Fiction", 
          "rating": 8.8 
        }, 
        { 
          "title": "The Godfather", 
          "director": "Francis Ford Coppola", 
          "releaseYear": 1972, 
          "genre": "Crime", 
          "rating": 9.2 
        }, 
        { 
          "title": "The Dark Knight", 
          "director": "Christopher Nolan", 
          "releaseYear": 2008, 
          "genre": "Action", 
          "rating": 9.0 
        }, 
        { 
          "title": "Pulp Fiction", 
          "director": "Quentin Tarantino", 
          "releaseYear": 1994, 
          "genre": "Crime", 
          "rating": 8.9 
        }, 
        { 
          "title": "Schindler's List", 
          "director": "Steven Spielberg", 
          "releaseYear": 1993, 
          "genre": "Historical Drama", 
          "rating": 9.0 
        }, 
        { 
          "title": "The Shawshank Redemption",
          "director": "Frank Darabont", 
          "releaseYear": 1994, 
          "genre": "Drama", 
          "rating": 9.3 
        }, 
        { 
          "title": "Forrest Gump", 
          "director": "Robert Zemeckis", 
          "releaseYear": 1994, 
          "genre": "Comedy-Drama", 
          "rating": 8.8 
        }, 
        { 
          "title": "The Matrix", 
          "director": "Lana Wachowski, Lilly Wachowski", 
          "releaseYear": 1999, 
          "genre": "Science Fiction", 
          "rating": 8.7 
        }, 
        { 
          "title": "Fight Club", 
          "director": "David Fincher", 
          "releaseYear": 1999, 
          "genre": "Drama", 
          "rating": 8.8 
        }, 
        { 
          "title": "The Lord of the Rings: The Return of the King", 
          "director": "Peter Jackson", 
          "releaseYear": 2003, 
          "genre": "Fantasy", 
          "rating": 9.0 
        } 
      ]
      const[result,setResult]=useState(Movies)
      const[searchTerm,setSearchTerm]=useState("")
      const [favorite,setFavorite]=useState([])
      const [currentPage,setCurrentPage]=useState(1)
      const MoviePerPage=5;
      const [TotalPages, setTotalPages] = useState(Math.ceil(result.length /MoviePerPage));
      const Search=()=>{
        let filteredBooks=result.filter((movie)=>(searchTerm ? movie.title.toLowerCase().includes(searchTerm.toLowerCase()):true ))
        return filteredBooks
      }
      var filteredBooks=Search()
      var SortByRating=()=>{
        let sortedResult=filteredBooks.sort((a,b)=>(b.rating-a.rating))
        setResult(sortedResult)
      }
      var SortByReleaseYear=()=>{
        let sortedResult=result
        sortedResult=filteredBooks.sort((a,b)=>(b.releaseYear-a.releaseYear))
        setResult(sortedResult)
      }
      // const [sortType,setSortType]=useState("")
      // var Sort=()=>{
      //   let sortedResult=filteredBooks
      //   console.log(sortType)
      //   if(sortType==="releaseYear"){
      //       sortedResult=filteredBooks.sort((a,b)=>(b.releaseYear-a.releaseYear))
      //   }
      //   else if(sortType==="rating"){
      //       sortedResult=filteredBooks.sort((a,b)=>(b.rating-a.rating))
      //   }
      //   return sortedResult
      // }
      // const sortedResult=Sort()
      var PageItems=filteredBooks.slice((currentPage-1)*MoviePerPage,currentPage*MoviePerPage)
    return(
        <div>
          <Header/>
            <article className="SearchButton">
              <section>
                  <SearchBar setSearchTerm={setSearchTerm}/>
              </section>
              {/* <section><Select setSortType={setSortType} /></section> */}
              <section>
              <SortButtons SortByRating={SortByRating} SortByReleaseYear={SortByReleaseYear} />
              </section>
            </article>
            <section id="All">
              <h1>Our Movies</h1>
                <MovieList list={PageItems} setFavorite={setFavorite} favorite={favorite} />
            </section>
            <section className="Pagination">
                <input type="button" value="Previous" disabled={currentPage===1?true:false} onClick={()=>setCurrentPage(currentPage-1)} />
                <span>{currentPage}</span>
                <input type="button" value="Next"  disabled={currentPage===TotalPages?true:false} onClick={()=>setCurrentPage(currentPage+1)} />
            </section>
            <section id="Favorites">
              <h1>Favorites</h1>
              <MovieList list={favorite} setFavorite={setFavorite} favorite={favorite} />
            </section>
            <section>
              <h1>Add A Film</h1>
              <Form setResult={setResult} result={result} setTotalPages={setTotalPages} />
            </section>
        </div>
    );
}
export default Apps;