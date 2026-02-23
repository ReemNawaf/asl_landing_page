import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProjectMessage from './pages/ProjectMessage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project-message" element={<ProjectMessage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
