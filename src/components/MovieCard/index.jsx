import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props

  const {id, title, genre, rating, poster} = movieDetails

  return (
    <li className="movie-item">
      <Link to={`/movies/${id}`} className="movie-link">
        <div
          className="movie-card"
          style={{backgroundImage: `url(${poster})`}}
        >
          <div className="movie-overlay">
            <h1 className="movie-title">{title}</h1>

            <div className="movie-details">
              <p className="movie-genre">{genre}</p>
              <p className="movie-rating">★ {rating}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default MovieCard