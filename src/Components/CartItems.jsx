import React from 'react'



export default function CartItems({name,price,url,idx,setArr}) {
  let remove=()=>{
    setArr((previousState)=>{
      let newArr=previousState.filter((item,index)=>{
        return idx !== index
      })
      return [...newArr]
    })
  }
  return (
    <div className='products'>
       <h3>{name}</h3>
        <h4>{price}</h4>
        <img src={url} alt={name} /> <br />
        <button id="btn" onClick={remove}>Remove</button>
    </div>
  )
}
