import React,{useState,useEffect} from 'react';
import ProductsPage from './ProductsPage';
import CartPage from './CartPage';
import data from '../Data'  

const cartFromLocalStorage=JSON.parse(localStorage.getItem('cart')) || []
// console.log(cartFromLocalStorage)

function App() {
  let [cartArr,setArr]=useState(cartFromLocalStorage);
  let [page,setPage]=useState('products');
  let [dt,setdt]=useState(data);
 
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cartArr))
  },[cartArr])

  return (
    page ==='products'?<ProductsPage setPage={setPage} setArr={setArr} cartArr={cartArr} setdt={setdt} dt={dt}/> : <CartPage setPage={setPage} setArr={setArr} cartArr={cartArr}/>
  )
}

export default App;
