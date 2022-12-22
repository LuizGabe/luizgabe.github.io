import React from "react";
import Home from "./Home";
import { Routes, Route, Link } from 'react-router-dom'

const Rotas = () => {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={
        <>
          <h1>Pagina 404</h1>
          <Link to='/'>
            Retornar para a Home
          </Link>
        </>
      }/>
    </Routes>
  )
}

export default Rotas