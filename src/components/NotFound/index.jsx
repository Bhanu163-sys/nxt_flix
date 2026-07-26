import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <div className="overlay">
      <div className="not-found-card">
        <h1 className="error-code">404</h1>

        <h2 className="error-title">Page Not Found</h2>

        <p className="error-description">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link to="/">
          <button type="button" className="home-btn">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default NotFound