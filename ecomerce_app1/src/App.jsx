import { useState, useEffect } from "react";
import ProductCard from "./component/productCard";

export default function App(){

  const [product, setproduct]=useState([])
  const [loading, setLoading]=useState(true)
  const [error, setError]=useState("")
  useEffect(()=>{
    async function fetchProduct(){
      try{
        const response=await fetch("https://fakestoreapi.com/products")
        const data=await response.json()
        setproduct(data)
        console.log(data)
      }catch(error){
        setError("unable to load product")
      }finally{
        setLoading(false)
      } 
    }
    fetchProduct()
  }, [])
  if(loading){
    return <div>loading products...</div>
  }
  if(error){
    return <div>Error has happend:{error}</div>
  }
  return(
     <div>
    <h1>product store</h1>

    <div>
      {
    product.map((product)=>(
      <ProductCard key={product.id} product={product}/>
    ))
  }
    </div>
  </div>
  
  )

  
}