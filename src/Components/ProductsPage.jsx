import React from 'react';
import data from '../Data'
import Product from './Product';

export default function ProductsPage({setPage,setArr,cartArr}) {
    let cards=data.map(({name,price,img,id},idx)=>{
        return <Product key={idx} name={name} price={price} url={img} id={id} setArr={setArr}/>
    })
  return (
    <>
    <h1>Products</h1>
      <div className="cart">
        <button className='btn1' onClick={()=>{setPage('cartItems')}}>Cart Items:{cartArr.length}</button>
      </div>
      {cards}
      </>
  )
}
