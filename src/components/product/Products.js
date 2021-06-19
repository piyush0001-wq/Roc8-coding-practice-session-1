import React, { useState } from 'react'
import ProductData from '../../data.json';
import ProductCard from './ProductCard';
import './products.css';

function Products() {

  const [data, setData] = useState(ProductData)
  // const [filtered, setFiltered] = useState(null);

  console.log(data)

  function handleCategory(e) {

    if (e.target.value === "male") {
      const filtered = [...data].filter(p => p.category === "male");
      setData(filtered);
    }
    if (e.target.value === "female") {
      const filtered = [...data].filter(p => p.category === "female");
      setData(filtered);
    }
    if (e.target.value === "All") {
      setData(ProductData);
    }
  }

  function handlePriceSorting(e) {
    if (e.target.value === "highTolow") {
      const sorted = [...data].sort((a, b) => {
        return b.price - a.price;
      });
      setData(sorted);
    }
    if (e.target.value === "lowTohigh") {
      const sorted = [...data].sort((a, b) => {
        return a.price - b.price;
      });
      setData(sorted);
    }
    if (e.target.value === "showAll") {
      setData(ProductData);
    }
  }

  function handleSizeFilter(e) {
    if (e.target.value === "M") {
      const filtered = [...data].filter(p => p.size === "M");
      setData(filtered);
    }
    if (e.target.value === "S") {
      const filtered = [...data].filter(p => p.size === "S");
      setData(filtered);
    }
    if (e.target.value === "L") {
      const filtered = [...data].filter(p => p.size === "L");
      setData(filtered);
    }

    if (e.target.value === "showAll") {
      setData(ProductData);
    }
  }

  function handleClearFilters(e) {
    setData(ProductData)
  }

  return (
    <div className="products">

      <div className="filters">

        <div className="filterOptions">

          <div className="input">
            <select name="size" id="size" onChange={handleSizeFilter}>
              <option value="showAll">Size</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="S">S</option>
            </select>
          </div>
          <div className="input">
            <select name="price" id="price" onChange={handlePriceSorting}>

              <option value="ShowAll">Price</option>
              <option value="highTolow">High to Low</option>
              <option value="lowTohigh">Low to high</option>

            </select>
          </div>
          <div className="input">
            Category :
            <select name="Ideal For" id="category" onChange={handleCategory}>
              <option value="All">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>

            </select>
          </div>

          <div className="input" onClick={handleClearFilters}>
            Clear All
          </div>

        </div>
      </div>
      <div className="productsGrid">

        {
          data.map((product) => (
            <ProductCard image={product.image} size={product.size} title={product.title} price={product.price} category={product.category} />
          ))
        }



      </div>
    </div>
  )
}

export default Products
