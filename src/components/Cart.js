import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  // const [sum, setSum] = useState(0);

  // const addTotal = () => {
  //   // eslint-disable-next-line array-callback-return
  //   props.cart.map((cartItem) => {
  //     if (cartItem.quantity > 0) {
  //       let currentSum = cartItem.quantity * cartItem.product.price;
  //       console.log(`Price on item`, cartItem.product.name, sum);
  //       setSum(sum + currentSum);
  //     }
  //   });
  // };
  // useEffect(() => {
  //   addTotal();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [props.product]);

  const allProducts = props.cart.map((cartItem) => (
    <CartItem
      cartItem={cartItem.product}
      key={cartItem.product.id}
      img={cartItem.product.img}
      quantity={cartItem.quantity}
      handleCartAdd={props.handleCartAdd}
      // handleCartAdd = {props.handleCartAdd}
    />
  ));
  let total = 0;
  props.cart.map((cartItem) => {
    let sum = cartItem.quantity * cartItem.product.price;
    console.log(sum);
    total = total + sum;
    return total;
  });

  return (
    <>
      {props.cart.length === 0 && <div>nothing in the bag</div>}
      {allProducts}
      {/* <div>your total: {sum}</div> */}
      <button className="checkout">Checkout</button>
      <div> Total: {total}</div>
    </>
  );
};

export default Cart;
