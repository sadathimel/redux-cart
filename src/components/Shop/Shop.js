import React from "react";
import { connect } from "react-redux";
import { addToCART } from "../../redux/actions/cartActions";
import Product from "../Product/Product";

const Shop = (props) => {
  console.log(props);
  const { products,addToCART } = props;
  return (
    <div>
      <h2>This is Shop</h2>
      {products.map((pd) => (
        <Product product={pd} key={pd.id} addToCART={addToCART}></Product>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCART: addToCART,
};

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// connectToStore(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
