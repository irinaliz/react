import React from "react";
import propTypes from "prop-types"

function Movie({year,title,summary,poster, genres}){
    return (
    <div className="movie"> 
    <img src={poster} alt={title} title={title}></img>
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <ul className="genres">
                {genres.map((genre,index )=>
                    <li key = {index} className="genres_genre" >{genre} </li> )}
            </ul>
            <h5 className="movie_title">{year}</h5>
            <p className="movie_title">{summary}</p>
        </div>
    </div>
    )
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;