import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./movie";

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [loadng, setLoadng] = useState(false);
    

    useEffect(() => {
        setLoadng(true)

        axios.get(`https://api.themoviedb.org/3/discover/tv`, {
            params: {
              sort_by: 'popularity.desc',
              api_key: process.env.API_KEY
            }
          })
        .then( (response) => {
            setLoadng(false)
            setMovies(response?.data?.results);
        })
        .catch( (error) => {
            console.log(error);
            setLoadng(false)
        })
    }, [])


    return (

        <div className="flex flex-wrap -mb-4">
            {
                !loadng && movies.length ? 
                    movies.map((movie, index)=> <Movie key={movie?.id ?? index} movie={movie} />) 
                    : <h2>Loading...</h2>
            }
        </div>
    )
}

export default Movies;