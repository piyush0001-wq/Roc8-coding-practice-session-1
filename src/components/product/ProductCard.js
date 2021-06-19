import React from 'react'
import './productCard.css';

function ProductCard({ image, size, title, price, category }) {
  return (
    <div className="productCard">
      <img src={image} alt="" />
      <h4>{title}</h4>
      <div className="description">
        <p>Rs.{price}</p>
        <p>Size : {size}</p>
        <p>{category}</p>
      </div>
      <button>Buy Now</button>
    </div>
  )
}

export default ProductCard
