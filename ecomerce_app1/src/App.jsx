import { useState, useEffect } from "react";
import ProductCard from "./component/productCard";
import './App.css';
export default function App(){

  const [product, setproduct]=useState([])
  const [loading, setLoading]=useState(true)
  const [error, setError]=useState("")
  const [search, setSearch]=useState("");
  const [selectedCategory, setSelectedCategory]=useState("");
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
  if (loading) {
    return <div className="spinner"></div>;
  }
  if (error) {
    return <div>Error has happened: {error}</div>;
  }
  const filteredProducts = product
    .filter(p => selectedCategory === '' || p.category === selectedCategory)
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  return(
    <div className="app-container">
      <h1 className="title">Product Store</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="">All Categories</option>
          {Array.from(new Set(product.map(p => p.category))).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <div className="empty-state">No products found.</div>
        ) : (
          filteredProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))
        )}
      </div>
    </div>
  ) 
}
