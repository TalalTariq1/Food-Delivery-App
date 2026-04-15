import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Loginpopup from './components/Loginpopup'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'

function App() {

  const [showLogin, setshowLogin] = useState(false);

  return (
    <>
    {showLogin?<Loginpopup setshowLogin={setshowLogin}/>:<></>}
    <div className="app">
    <Navbar setshowLogin={setshowLogin}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/order" element={<PlaceOrder/>}/>
     </Routes>
     <Footer/>
     </div>
   
    </>
  )
}

export default App
