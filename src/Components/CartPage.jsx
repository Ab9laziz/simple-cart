import React from 'react';
import CartItems from './CartItems'


export default function CartPage({setPage,setArr,cartArr}) {
    let totalExpense=cartArr.reduce((total,{price})=>{
        console.log(cartArr,price,total)
        return total + parseFloat(price.slice(1))
    },0)
    console.log(totalExpense)
  return (
    <>
        <h1>Cart Items</h1>
        <h3>Total: ${totalExpense.toFixed(2)}</h3>
        <button className='btn1' onClick={()=>{setPage('products')}}>Products</button>
        {cartArr.map(({name,price,img},idx)=>{
          return <CartItems key={idx} name={name} price={price} idx={idx} url={img} setArr={setArr}/>
        })}
      </>
  )
}
