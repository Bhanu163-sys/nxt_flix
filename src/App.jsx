import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import SignIn from './components/SignIn'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import WatchLater from './components/WatchLater'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<SignIn />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/movies/:id"
        element={
          <ProtectedRoute>
            <MovieDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/watch-later"
        element={
          <ProtectedRoute>
            <WatchLater />
          </ProtectedRoute>
        }
      />

      <Route path="/not-found" element={<NotFound />} />

      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  </BrowserRouter>
)

export default App