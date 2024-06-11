import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { addItem } from '../Redux/cart';

function ProductInfo() {
  const location = useLocation();
  const dispatch = useDispatch();
  // console.log(location.state.image);
  const highlightStyle = {
    color: "#d0121a",
    fontWeight: "bold",
  };
  const renderDescription = () => {
    if (!location.state.des) {
      return null;
    }
    const description = location.state.des.split(/:(.*?)-/).map((part, index) => {

      return (
        <span key={index} style={index % 2 === 1 ? highlightStyle : {}}>
          {part}
        </span>
      );
    });

    return <>{description}</>;
  };

  return (
    <>
    <div className='flex mt-8'>
    <div className='mr-9'>
      <img src={location.state.image}  alt="" />
    </div>
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{location.state.title}</h2>
      <p className="text-2xl font-semibold">
        ${location.state.price} 
      </p>
      <hr />
      <p className="text-base text-gray-600">{renderDescription()}</p>
      <p className="text-base text-green-600 font-medium">In Stock</p>
      <button
        onClick={() =>
          dispatch(
            addItem({
              id: location.state.id,
              title: location.state.title,
              price: location.state.price,
              image : location.state.image,
              quantity: 1,
            })
          )
        }
        className="w-[60%] py-4 bg-blue-500 hover:bg-blue-600 duration-300 text-white text-lg font-titleFont self-center rounded-md"
      >
        Add to Cart
      </button>
    </div>
    </div>
   
    </>
  )
  
}

export default ProductInfo
