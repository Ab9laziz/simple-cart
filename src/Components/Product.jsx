import React from 'react'
import data from '../Data'


export default function Product({name,price,url,id,setArr}) {
  
  const handleClick= (e) =>{
    // console.log(this)
    setArr((previousState)=>{
      let newArr=data.filter(({id:idno})=>{
        return idno === id
      })
      return [...previousState,...newArr]
    })
  }
  return (
    <div className='products'>
        <h3>{name}</h3>
        <h4>{price}</h4>
        <img src={url} alt={name} /> <br />
        <button id="btn" onClick={handleClick}>Add to cart</button> 
    </div>
  )
}


