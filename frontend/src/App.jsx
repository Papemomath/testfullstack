import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import MovieAdd from './component/MovieAdd'
import MovieList from './component/MovieList'
import NotFound from './component/NotFound'
import MovieDelete from './component/MovieDelete'
import MovieModify from './component/MovieModify'
import DetailMovie from './component/DetailMovie'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<MovieAdd/>}/>
            <Route path='/delete' element={<MovieDelete/>}/>
            <Route path='/modify' element={<MovieModify/>}/>
            <Route path='/list' element={<MovieList/>}/>
            <Route path='/view/:id' element={<DetailMovie/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
  ) 
}

export default App
