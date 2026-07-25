import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import SignIn from './components/SignIn'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
)

export default App