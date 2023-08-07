import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import NavBar from "../NavBar/NavBar";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import "./CartContent.css"

function CartContent() {
  const { carrito } = useContext(dataContext);

  return (
    <div className="bodyCartContent">
      <NavBar />
      <CartElements />
      {carrito.length > 0 ? <CartTotal /> : <h1 className="h1-carritoVacio">CARRITO VACIO</h1>}
    </div>
  );
}

export default CartContent;
