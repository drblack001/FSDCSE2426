import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Icard from './src'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style = {{border:'2px solid black', width:'600px', height:'800px'}}>
        <h1 style={{color:'red'}}> WElcome TO ABES EC</h1>
        <h2 style={{color:'blue'}} > MY name is Rajat</h2>
        <h2 style={{color:'red'}}> Roll No :2400320100879 </h2>
        <h2 style={{color:'pink'}}> Branch : Computer Science and Engineering</h2>
        <h2 style={{color:'brown'}}  > Domain : AI/ML </h2>

      </div>
    </>
  )
}

export default App
