export default function productCard({product}){
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-category">{product.category}</p>
      </div>
    </div>
  );
}