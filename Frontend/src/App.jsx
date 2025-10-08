import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuthContext } from "./Hooks/useAuthContext"

// Pages & Components
import Home from './Views/Home'
import Signup from './Views/Signup'
import Login from './Views/Login'
import Navbar from "./Components/Navbar"
import LandingPage from "./Views/LandingPage"

function App() {

  const { user } = useAuthContext();


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={!user ? <LandingPage /> : <Navigate to={'/home'} />} />
            <Route path="/home" element={user ? <Home /> : <Navigate to={'/login'} />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to={'/home'} />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to={'/home'} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
