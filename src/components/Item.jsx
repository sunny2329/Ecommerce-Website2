import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../Redux/cart';
import { useNavigate } from 'react-router';


function Item({title,price,image,id,des}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/product/${id}`,{state: {title,price,image,id,des}});
    }
    return (
        <div
        onClick={handleNavigation}
        className='max-w-[16rem] min-h-[22rem] bg-white m-4 flex flex-col items-center rounded shadow-2xl cursor-pointer hover:shadow-2xl hover:shadow-[#ffffff]'>
            <div>
                <img className='w-[20rem] h-[15rem]' src={image} alt="" />
            </div>
            <div className='flex items-center w-full justify-between h-full
             p-2'>
                <h1 className='max-w-[10rem] h-auto font-bold'>{title}</h1>
                <h1 className='text-md'>${price}</h1>
            </div>
            <div className='flex justify-evenly items-center w-full'>
                <button
                onClick={handleNavigation}
                className='bg-white text-primary font-bold border-[1px] border-primary border-opacity-40 hover:opacity-90 w-[5rem] rounded p-2 mb-3 '>
                    View
                </button>
                <button className='text-primary font-bold border-[1px] border-primary bg-white border-opacity-40 hover:opacity-90 w-[7rem] rounded p-2 mb-3'
                onClick={(e)=>{
                    e.stopPropagation();
                    dispatch(addItem({
                        id,
                        title,
                        price,
                        image,
                        quantity:1,
                    }))
                }}
                >Add To Cart</button>
            </div>

        </div>
    )
}

export default Item
