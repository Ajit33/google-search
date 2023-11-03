import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import SearchResult from './components/SearchResult'
function App() {
  const [count, setCount] = useState(0)
   
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' excat element={<Home />} />
        <Route path='/' element={<SearchResult />  } />
     </Routes>
    
    </BrowserRouter>
  )
}

export default App
