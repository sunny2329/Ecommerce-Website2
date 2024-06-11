import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setSearch, setSort, setUserCat } from '../Redux/cart';
import { MdSort } from 'react-icons/md';

function NavBottom() {
  const products = useSelector(state => state.ecommerce);
  const dispatch = useDispatch();
  const cartq = products.cart.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 z-51 items-center h-auto md:h-[12vh] bg-[#fbfff1] opacity-[0.98]">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full justify-center md:ml-[6rem]">
        <div className="flex bg-gray-100 p-4 w-full md:w-72 space-x-4 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            value={products.search}
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
            className="bg-gray-100 text-primary outline-none w-full" type="text" placeholder="Search Product" />
        </div>
        <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer w-full md:w-auto">
          <select
            onChange={(e) => {
              console.log(e.target.value);
              dispatch(setUserCat(e.target.value));
            }}
            value={products.userCat}
            className="bg-transparent text-primary w-full md:w-auto"
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's Clothes</option>
            <option value="women's clothing">Women's Clothes</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>
        <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer w-full md:w-auto">
          <select
            value={products.sort}
            onChange={(e) => {
              dispatch(setSort(e.target.value));
            }}
            className="bg-transparent text-primary w-full md:w-auto"
          >
            <option value="none">
              <MdSort />
              Sort
            </option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price : High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      <div className="mt-4 md:mt-0 relative" onClick={() => { navigate('/cart') }}>
        <FaShoppingCart
          onClick={() => { navigate('/cart'); }}
          className={`text-3xl ${cartq ? 'text-primary cursor-pointer' : 'text-red-600 cursor-pointer'} `}
        />
        <span className="absolute right-0 left-7 top-5 text-2xl">{cartq}</span>
      </div>
    </div>
  );
}

export default NavBottom;
