import React from "react";

const Product = (props) => {
    const {name, id } = props.product;
  return (
    <div style = {{border: '1px solid red', margin:'10px', paddingTop: '10px'}}>
      <button>add to cart</button>
      <h5>{name}</h5>
    </div>
  );
};

export default Product;
