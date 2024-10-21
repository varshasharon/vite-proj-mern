import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MenuComp from './components/MenuComp'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'




function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <MenuComp/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/blog" element={<BlogPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
