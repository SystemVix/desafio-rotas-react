/*
  DESAFIO - ROTAS REACT
  Projeto integrante do curso FDM, módulo 10, capítulo 3.
  Professor Nélio Alves
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import NotFound from './routes/NotFound/index.tsx'
import Products from './routes/Products/index.tsx'
import Computers from './routes/Products/Computers/index.tsx'
import Eletrocnics from './routes/Products/Eletrocnics/index.tsx'
import Books from './routes/Products/Books/index.tsx'
import About from './routes/About/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Navigate to='/home'/>}/>
          <Route path='home' element={<Home/>}/>        
          <Route path='products' element={<Products/>}>
            <Route path='computers' element={<Computers/>}/>
            <Route path='eletronics' element={<Eletrocnics/>}/>
            <Route path='books' element={<Books/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
          <Route path='about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>    
  </StrictMode>,
)

