import React , {useEffect, useState} from 'react'
import Sample from '../assets/d.jpg'
import { useDispatch } from 'react-redux'
import { deleteItem, increaseQuantity, decreaseQuantity } from '../Redux/cart'

function CartItem({image, title , price, id,quantity}) {
    const dispatch = useDispatch();
    const [cost,setCost] = useState();
    useEffect(()=>{
        setCost((quantity*price).toPrecision(6))
    },[quantity])
    useEffect(()=>{
        if(!quantity) dispatch(deleteItem(id));
    },[quantity])
  return (
    <div className='m-2 p-2 border-2 border-gray-500'>
      <div className='flex items-center gap-5 mb-4'>
        <div>
            <button onClick={()=>{
                dispatch(deleteItem(id));
            }}>❌</button>
        </div>
        <div>
            <img src={image} className='h-[11rem] w-[9rem]' alt="" />
        </div>
        <div>
            {title}
        </div>
      </div>




      <div className='flex justify-between items-center w-[50%] p-3'>
        <div className='ml-[5rem]'>
            ${price}
        </div>
        <div className='flex items-center justify-between w-[5rem]'>
            <button
            disabled = {quantity ? 0 : 1}
             className='text-2xl bg-black text-white rounded-md p-1 flex justify-center items-center h-[1.6rem]'
            onClick={()=>{
                dispatch(decreaseQuantity(id));
            }}
            >-</button>
            <span>{quantity}</span>
            <button className='text-2xl bg-black text-white rounded-md p-1 flex justify-center items-center h-[1.6rem]'
            onClick={()=>{
                dispatch(increaseQuantity(id));
            }}
            >+</button>
        </div>
        <div>
            {cost}
        </div>
      </div>
    </div>
  )
}

export default CartItem
