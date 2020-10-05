import React from "react";

const Product = (props) => {
    const {addToCART,product} = props;
    console.log(props)
  return (
    <div style = {{border: '1px solid red', margin:'10px', padding: '10px'}}>
      <h5>{product.name}</h5>
  <h3>{product.id}</h3>
      <button onClick = {()=>addToCART(product.id)}>add to cart</button>
    </div>
  );
};

export default Product;
