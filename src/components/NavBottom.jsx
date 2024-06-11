import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { setSearch } from '../Redux/cart';

function NavBottom() {
  const products = useSelector(state => state.ecommerce);
  const dispatch = useDispatch();
  const cartq = products.cart.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();
  return (
    <div className='flex justify-between p-4  z-51 items-center h-[12vh] bg-[#fbfff1] opacity-[0.98] '>
      
      <div class="flex items-center p-6 space-x-6 bg-transparent rounded-xl transform  transition duration-500 w-[100%] justify-center ml-[6rem]">
        <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
          // value={products.search}
          onChange={(e)=>{
            dispatch(setSearch(e.target.value));
          }}
          class="bg-gray-100 text-primary outline-none w-full" type="text" placeholder="Search Product" />
        </div>
        <div class="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
        <div>
        <select className='bg-transparent text-primary' name="" id="">
          <option value="electronics">Electronics</option>
          <option value="clothes">Clothes</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </div>
        </div>
        <div class="bg-primary py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
          <span>Search</span>
        </div>
      </div>
      <div className='mr-4 relative' onClick={() => {
        navigate('/cart')
      }}>
        <FaShoppingCart 
        onClick={()=>{
          navigate('/cart');
        }}
        className={`text-3xl ${cartq ? 'text-primary cursor-pointer' : 'text-red-600 cursor-pointer'} `} />
        <span className='absolute right-0 left-7 top-5 text-2xl'>{cartq}</span>
      </div>
    </div>
  )
}

export default NavBottom
