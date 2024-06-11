import React, {useEffect,useState} from 'react';
import Item from './Item';
import { useNavigate } from 'react-router';

function Display() {
    const [data,setData] = useState([]);
    const navigation = useNavigate();

    useEffect(()=>{
        ;(async ()=>{
            let response = await fetch('https://fakestoreapi.com/products');
            let prodcuts = await response.json();
            // console.log(data);
            setData(prodcuts);
        })()
    },[])

  return (
    <div className='flex flex-wrap gap-0 justify-evenly bg-secondary
    '>
        {
            data.map((item,idx)=>{
                return (
                    <>
                        <Item title={item.title} des={item.description} price={item.price} image={item.image} id={item.id}/>
                    </>
                )
            })
        }
    </div>
  )
}

export default Display