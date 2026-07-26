import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import {BsFillPlayFill} from 'react-icons/bs'


import './index.css'

const GridMovieCard = props => {
  const {movieDetails} = props

  const {
    id,
    title,
    poster,
    rating,
    genre,
    year,
    duration,
  } = movieDetails

  return (
    <li className="grid-movie-item">
      <Link to={`/movies/${id}`} className="grid-movie-link">
        <div
          className="grid-movie-card"
          style={{backgroundImage: `url(${poster})`}}
        >
          <div className="rating-badge">
            <FaStar className="star-icon" />
            <span>{rating}</span>
          </div>

          <div className="play-overlay">
            <div className="play-btn">
             <BsFillPlayFill className="play-icon" />
            </div>
          </div>

          <div className="movie-content">
            <h1 className="movie-title">{title}</h1>

            <div className="movie-meta">
              <span>{genre}</span>
              <span>•</span>
              <span>{year}</span>
              <span>•</span>
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default GridMovieCard
