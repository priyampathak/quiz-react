import { useState } from 'react'
import { ConState } from './context'
import './App.css'
import Maincom from './pages/components/Maincom'
import Navbar from './pages/components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lands from './pages/Lands'
import Result from './pages/Result'




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <ConState>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Lands/>}/>
          <Route path='/main' element={<Maincom/>}/>
          <Route path='main/result' element={<Result/>}/>
        </Routes>
      </ConState>
    </BrowserRouter>
  )
}

export default App
