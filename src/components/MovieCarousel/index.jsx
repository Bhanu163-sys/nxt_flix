import MovieCard from '../MovieCard'

import './index.css'

const MovieCarousel = props => {
  const {title, movies, direction = 'left'} = props

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">{title}</h2>

      <div className="carousel-wrapper">
        <div
          className={`carousel-track ${
            direction === 'left'
              ? 'scroll-left'
              : 'scroll-right'
          }`}
        >
          {[...movies, ...movies].map((movie, index) => (
            <MovieCard
              key={`${movie.id}-${index}`}
              movieDetails={movie}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MovieCarousel