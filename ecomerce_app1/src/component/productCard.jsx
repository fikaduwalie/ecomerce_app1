export default function productCard({product}){
    return(
        <div>
         <div>   
         <img src={product.image} alt={product.title}/>
    </div>
    <div>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <p>{product.category}</p>

    </div>
    </div>
    

    )
}