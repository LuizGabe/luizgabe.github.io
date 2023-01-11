import React from "react";
import Home from "./pages/Home"

import Game from "./pages/Game";

import { Routes, Route, Link } from 'react-router-dom'

const Rotas = () => {

  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path='/game' element={<Game />} />


      <Route path='*' element={
        <>
          <h1>Pagina 404</h1>
          <Link to='/'>
            Retornar para a Game
          </Link>
        </>
      }/>
    </Routes>
  )
}

export default Rotas