import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Teams from './Teams/Teams.jsx'
import Home from './pages/Home.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/teams" element={<Teams/>}/>
    
    <Route path="/home" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
    
)
