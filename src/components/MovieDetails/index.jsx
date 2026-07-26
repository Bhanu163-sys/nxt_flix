import {useState} from 'react'
import {useParams, useNavigate, Navigate} from 'react-router-dom'

import {useWatchLater} from '../../context/WatchLaterContext'
import Header from '../Header'
import movies from '../../data/movie'

import './index.css'

const MovieDetails = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const {isInWatchLater, toggleWatchLater} = useWatchLater()

  const movie = movies.find(eachMovie => eachMovie.id === Number(id))

  if (!movie) {
    return <Navigate to="/not-found" replace />
  }

  const {
    title,
    poster,
    backdrop,
    genre,
    year,
    duration,
    rating,
    overview,
  } = movie

  const onClickWatchLater = () => {
    setWatchLater(prev => !prev)
  }

  const onClickGoBack = () => {
    navigate(-1)
  }

  return (
    <div className="movie-details-page">
      <Header />

      <div
        className="movie-details-banner"
        style={{
          backgroundImage: `url(${backdrop})`,
        }}
      >
        <div className="movie-details-overlay">
          <div className="movie-details-content">

            <img
              src={poster}
              alt={title}
              className="details-poster"
            />

            <div className="details-info">

              <h1 className="details-title">
                {title}
              </h1>

              <div className="details-meta">

                <span className="genre-tag">
                  {genre}
                </span>

                <span>{year}</span>

                <span>{duration}</span>

                <span className="rating">
                  ⭐ {rating}
                </span>

              </div>

              <p className="details-overview">
                {overview}
              </p>

              <div className="details-buttons">

                <button
                  className={isInWatchLater(movie.id) ? 'watch-later-btn added' : 'watch-later-btn'}
                  onClick={() => toggleWatchLater(movie)}
                >
                  {isInWatchLater(movie.id)
                    ? '✓ Added to Watch Later'
                    : '+ Watch Later'}
                </button>

                <button
                  className="back-btn"
                  onClick={onClickGoBack}
                >
                  Go Back
                </button>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails