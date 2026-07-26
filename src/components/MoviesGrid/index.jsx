import GridMovieCard from '../GridMovieCard'

import './index.css'

const MoviesGrid = props => {
  const {movies} = props

  return (
    <ul className="movies-grid">
      {movies.map(eachMovie => (
        <GridMovieCard
          key={eachMovie.id}
          movieDetails={eachMovie}
        />
      ))}
    </ul>
  )
}

export default MoviesGrid