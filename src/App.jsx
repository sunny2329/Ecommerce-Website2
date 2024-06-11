import { useState } from 'react'
import Item from './components/Item'
import Display from './components/Display'
import Navbar from './components/Navbar'
import NavBottom from './components/NavBottom'
import Cart from './components/Cart'
import CartItem from './components/CartItem'
import { Outlet } from 'react-router'
import ProductInfo from './components/ProductInfo'
import Footer from './components/Footer'

function App() {


  return (
    <div className='bg-secondary'>
      <Navbar />
      <NavBottom />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
