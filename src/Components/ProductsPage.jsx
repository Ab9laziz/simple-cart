import React, {useEffect } from 'react';
import data from '../Data'
import Product from './Product';

export default function ProductsPage({setPage,setArr,cartArr,dt,setdt}) {
    let cards=dt.map(({name,price,img,id,quantity},idx)=>{
        return <Product key={idx} name={name} price={price} url={img} id={id} setArr={setArr} dt={dt} quantity={quantity} idx={idx}/>
    })

    const handleCategory=(e)=>{
      switch(e.target.value){
        case 'supplies':{
          let newArr=data.filter(({category})=>{
            return category === "supplies"
          })
          // console.log(newArr)
          setdt(newArr)
          break;
        }
        case 'drinks':{
          let newArr=data.filter(({category})=>{
            return category === "drinks"
          })
          // console.log(newArr)
          setdt(newArr)
          break;
        }
        default:
          setdt(data);
      }
    }

    // Total number of items
    let totalItems=cartArr.reduce((total,{quantity})=>{
      // console.log(cartArr,total,quantity)
      return total + quantity
  },0)

  useEffect(()=>{
    if(document.getElementById('ct').value === 'all'){
        setdt(data)
    }
  })
  return (
    <>
    <h1>Products</h1>
      <div className="cart">
        <button className='btn1' onClick={()=>{setPage('cartItems')}}>Cart Items:{totalItems}</button>
      </div>
      <select name="category" id="ct" onChange={handleCategory}>
        <option value="all">All</option>
        <option value="supplies">Home Supplies</option>
        <option value="drinks">Drinks</option>
      </select>
      {cards}
      </>
  )
}
