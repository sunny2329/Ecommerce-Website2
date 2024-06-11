import React, {useEffect,useState} from 'react';
import Item from './Item';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function Display() {
    const [data,setData] = useState([]);
    // const navigation = useNavigate();
    const info = useSelector(state => state.ecommerce)

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
            data.filter(
                (item) =>{
                    if(info.userCat === 'all') return true;
                    return item.category === info.userCat;
                }
            ).sort((a,b)=>{
                if(info.sort === 'low') return a.price - b.price;
                if(info.sort === 'high') return b.price - a.price;
                if(info.sort === 'rating')  return b.rating.rate - a.rating.rate
                return;
            }).filter((item) => item.title.split('').join("").toLowerCase().includes(info.search.toLowerCase()))
            .map((item,idx)=>{
                return (
                    <>
                        <Item rating = {item.rating.rate} title={item.title} des={item.description} price={item.price} image={item.image} id={item.id}/>
                    </>
                )
            })
        }
    </div>
  )
}

export default Display
