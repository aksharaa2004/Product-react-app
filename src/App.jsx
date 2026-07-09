import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddProduct from './Compontents/AddProduct'
import SearchProd from './Compontents/SearchProd'
import Delete from './Compontents/Delete'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewProduct from './Compontents/ViewProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddProduct/>} />
        <Route path='/SearchProd' element={<SearchProd/>} />
        <Route path='/Delete' element={<Delete/>} />
        <Route path='/ViewProduct' element={<ViewProduct/>} />
      </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App
