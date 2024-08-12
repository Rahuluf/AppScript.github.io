import { useState } from 'react'
import './App.css'
import AllRoutes from './Routs/AllRoutes'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <AllRoutes/>
    </>
  )
}

export default App
