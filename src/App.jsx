import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route,BrowserRouter} from 'react-router-dom'
import  AdministrarUsuario from './components/AdministrarUsuario'
import Pdf from './components/Pdf'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdministrarUsuario />}></Route>
        <Route path="pdf" element={<Pdf></Pdf>}></Route>
    
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
