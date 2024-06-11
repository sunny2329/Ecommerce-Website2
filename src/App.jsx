import { useState } from 'react'
import Item from './components/Item'
import Display from './components/Display'
import Navbar from './components/Navbar'
import NavBottom from './components/NavBottom'
import Cart from './components/Cart'
import CartItem from './components/CartItem'
import { Outlet, useLocation } from 'react-router'
import Footer from './components/Footer'

function App() {
  const location = useLocation();
  console.log(location.pathname.split('/')[1])

  return (
    <div className='bg-secondary'>
      <Navbar />
      {
        location.pathname === '/shop' || location.pathname.split('/')[1] === 'product' || location.pathname ==='/cart' ? <NavBottom/> : <div></div>
      }
      {/* <NavBottom /> */}
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
