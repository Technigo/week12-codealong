import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=0a7bdc5f7b44e6a5230c95a3dbb9bbbc&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
  }, [])

  return (
    <div>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <h1>{movie.title}</h1>
        </Link>
      ))}
    </div>
  )
}
