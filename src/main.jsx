import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './Rotas'
import GlobalStyle from './assets/styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <BrowserRouter>
        <Rotas />
    </BrowserRouter>
  </>
)
