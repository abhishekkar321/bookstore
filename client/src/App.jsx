import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hmes from './Pages/Hmes.jsx';
import Login from './components/Login/Login.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar/>
            <Routes>
               <Route path="/"  element={<Hmes/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>

      <Footer/>

    </Router>
      </>
  )
}

export default App
