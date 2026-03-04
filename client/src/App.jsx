import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Hmes from './Pages/Hmes';
import Login from './components/Login/Login';

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
