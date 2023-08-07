import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css"

function CartTotal() {
  const { carrito } = useContext(dataContext);
  const total = carrito.reduce((tot, i) => tot + i.price, 0);

  return (
    <div className="cartTotal">
      <h3 className="totalNumero">Total a pagar: ${total}</h3>
    </div>
  );
}

export default CartTotal;
