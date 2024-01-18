import React from 'react'


export default function Product({name,price,url,id,setArr,idx,dt}) {
  
  const handleClick= (e) =>{
    // console.log(this)
    setArr((previousState)=>{
      let newArr=previousState.find(({id:idno})=>{
        return idno === id
      })
      if(newArr){
        // console.log(newArr);
        let otherItems=previousState.filter(({id:idno})=>{
          return idno!==id
        })
      return [...otherItems,{...newArr,quantity:++newArr.quantity}]
      }else{
      return [...previousState,{...dt[idx],quantity:1}]
       }
    })
  }
  return (
    <div className='products'>
        <h3>{name}</h3>
        <h4>${price}</h4>
        <img src={url} alt={name} /> <br />
        <button id="btn" onClick={handleClick}>Add to cart</button> 
    </div>
  )
}


