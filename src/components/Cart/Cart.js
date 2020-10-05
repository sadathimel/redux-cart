import React from "react";
import { connect } from "react-redux";
import { removeFromCART } from "../../redux/actions/cartActions";

const Cart = (props) => {
  const { cart, removeFromCART } = props;
  return (
    <div>
      <h4>This is Cart</h4>
      <ul>
        {cart.map((id) => (
          <li>
            {id} <button onClick={() => removeFromCART(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCART: removeFromCART,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
