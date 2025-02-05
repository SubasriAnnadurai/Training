import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  // setProducts({name:"lapto",price:1000})
  // console.log(products)
   
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="product-list">
      {
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>Rating : {product.rating.rate}</p>
            <Link to={`/product/${product.id}`} className="view-btn">View Details</Link>
          </div>
        ))
      }
    </div>
  );
};

export default ProductList;
