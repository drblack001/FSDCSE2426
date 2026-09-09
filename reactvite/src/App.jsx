import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Icard from './components/Icard'
import ICardGallery from './components/ICardGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style = {{border:'2px solid red', width:'800px',height:'800px'}}>
    <h2 style = {{color:'red'}}>Welcome to React App Development</h2>
    <ICardGallery />
    </div>
  )
}

export default App
