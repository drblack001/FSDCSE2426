import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Icard from './components/Icard'
import ICardGallery from './components/ICardGallery'
import MyState from './components/MyState'
import Student from './components/MyState'
import ImageManipulation from './components/ImageManipulation'
import MyUseEffect from './components/MyUseEffect'
import FetchProd from './components/FetchProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/login'
import Regestration from './components/Regestration'
import Dashboard from './components/Dashboard'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div style = {{border:'2px solid red', width:'auto',height:'auto'}}>
//     <h2 style = {{color:'red'}}>Welcome to React App Development</h2>
//     {/* <ICardGallery /> */}
//     {/* <Student> </Student> */}
//     {/* <ImageManipulation></ImageManipulation> */}
//     {/* <MyUseEffect></MyUseEffect> */}
//     <FetchProd></FetchProd>
//
//
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Regestration />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App