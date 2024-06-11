import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import { resetCart } from '../Redux/cart';
import emptyCart from '../assets/emptyCart.png'
import { Link } from 'react-router-dom';

function Cart() {
    const products = useSelector(state => state.ecommerce);
    const dispatch = useDispatch();
    const [total,setTotal] = useState(0);
    const subtotal = (products.cart.reduce((total,item)=> total + item.quantity*item.price, 0));

    useEffect(()=>{
        setTotal((subtotal + 20).toPrecision(4));
    },[subtotal])

    return (
        <>
        {
            products.cart.length > 0 ? (
                <div className='flex flex-col items-center mb-9'>
                <h1 className='text-5xl font-bold self-start ml-3 mb-4 mt-4'>Cart</h1>
                <div className='w-[100%]'>
                    {
                        products.cart.map((item) => {
                            return (
                                <div>
                                   <CartItem image={item.image} 
                                   title={item.title} price={item.price} id={item.id} quantity={item.quantity}
                                   />
                                </div>
                            )
                        })
                    }
                </div>
    
                <div>
                    <button className='p-3 text-white bg-orange-500 rounded mt-7'
                    onClick={()=>{
                        dispatch(resetCart());
                    }}
                    >RESET CART</button>
                </div>
    
    
                <div className='cost w-[40%] mt-9'>
                    <h1 className='text-center text-3xl font-bold mb-6'>Your Total</h1>
                    <table className='text-2xl w-[100%]'>
                        <tr className='border-2 border-gray-200'>
                            <td className='p-1'>
                                Subtotal
                            </td>
                            <td className='p-1'>
                                ${subtotal}
                            </td>
                        </tr>
    
                        <tr className='border-2 border-gray-200 border-b-black'>
                            <td className='p-1'>
                                Shipping Charge
                            </td>
                            <td className='p-1'>
                                $20
                            </td>
                        </tr>
    
                        <tr className='border-2 border-black'>
                            <td className='p-1'>
                                Total 
                            </td>
                            <td className='font-bold p-1'>
                                ${total}
                            </td>
                        </tr>
                        
                    </table>
                </div>
    
    
            </div>
            ) : (
                <div
                className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
              >
                <div>
                  <img
                    className="w-80 rounded-lg p-4 mx-auto"
                    src={emptyCart}
                    alt="emptyCart"
                  />
                </div>
                <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
                  <h1 className="font-titleFont text-xl font-bold uppercase">
                    Your Cart feels lonely.
                  </h1>
                  <p className="text-sm text-center px-10 -mt-2">
                    Your Shopping cart lives to serve. Give it purpose - fill it with
                    books, electronics, videos, etc. and make it happy.
                  </p>
                  <Link to="/shop">
                    <button className="bg-primary rounded-md cursor-pointer hover:bg-primary px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            )
        }

       
        </>
       
    )
}

export default Cart
