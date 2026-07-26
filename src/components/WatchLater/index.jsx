import {Link} from 'react-router-dom'

import Header from '../Header'
import MoviesGrid from '../MoviesGrid'

import {useWatchLater} from '../../context/WatchLaterContext'

import './index.css'

const WatchLater = () => {
  const {watchLater} = useWatchLater()

  return (
    <div className="watch-page">
      <Header />

      <div className="watch-content">
        <h1 className="watch-title">Watch Later</h1>

        {watchLater.length === 0 ? (
          <div className="empty-view">
            <p>Your Watch Later list is empty.</p>

            <Link to="/">
              <button type="button" className="browse-btn">
                Browse Movies
              </button>
            </Link>
          </div>
        ) : (
          <MoviesGrid movies={watchLater} />
        )}
      </div>
    </div>
  )
}

export default WatchLater