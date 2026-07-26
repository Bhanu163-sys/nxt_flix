import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import {useWatchLater} from '../../context/WatchLaterContext'

import './index.css'

const Header = () => {
  const navigate = useNavigate()
  const {watchLater} = useWatchLater()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login', {replace: true})
  }

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo-link">
          <h1 className="logo">NXTFLIX</h1>
        </Link>

        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/watch-later"
              className="nav-link watch-later-link"
            >
              Watch Later

              {watchLater.length > 0 && (
                <span className="watch-later-count">
                  {watchLater.length}
                </span>
              )}
            </Link>
          </li>

          <li className="nav-item">
            <button
              type="button"
              className="logout-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header