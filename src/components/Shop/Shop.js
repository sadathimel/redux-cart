import React from "react";
import { connect } from "react-redux";
import { addToCART } from "../../redux/actions/cartActions";
import Product from "../Product/Product";

const Shop = () => {
  const products = [
    { name: "Lenovo Laptop", id: 1 },
    { name: "Afsus Laptop", id: 2 },
    { name: "Dell Laptop", id: 3 },
    { name: "HP Laptop", id: 4 },
    { name: "Toshiba Laptop", id: 5 },
  ];
  return (
    <div>
      <h2>This is Shop</h2>
      {
          products.map(pd=> <Product product= {pd}></Product>)
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.products
  }
}

const mapDispatchToProps = {
  addToCART: addToCART
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

connectToStore(Shop);

export default Shop;
