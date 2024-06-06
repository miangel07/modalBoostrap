import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route,BrowserRouter} from 'react-router-dom'
import  AdministrarUsuario from './components/AdministrarUsuario'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdministrarUsuario />} />
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
