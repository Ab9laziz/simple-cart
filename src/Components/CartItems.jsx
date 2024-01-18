import React from 'react'



export default function CartItems({name,price,url,idx,setArr,quantity}) {
  let remove=()=>{
    setArr((previousState)=>{
      let newArr=previousState.filter((item,index)=>{
        return idx !== index
      })
      return [...newArr]
    })
  }
  const handleChange=(e)=>{
    console.log(e.target.value)
    setArr((previousState)=>{
        let otherItems=previousState.filter(({name:nm})=>{
          return nm !== name
        })
        let currentItem=previousState.find(({name:nm})=>{
          return nm === name
        })
        return[...otherItems,{...currentItem,quantity:parseInt(e.target.value)}]
    })
  }
  return (
    <div className='products'>
       <h3>{name}</h3>
        <h4>${price}</h4>
        <img src={url} alt={name} /> <br />
        <label htmlFor="qt">Quantity: </label>
        <input id='qt'name='quantity'type="number" value={quantity} onChange={handleChange} step={1} min='1'/><br />
        <button id="btn" onClick={remove}>Remove</button>
    </div>
  )
}
