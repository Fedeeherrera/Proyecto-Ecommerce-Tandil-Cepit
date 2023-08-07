import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import Swal from 'sweetalert2'
import "./CartContent.css"

function CartElements() {
  const { carrito, truncateName, setCarrito } = useContext(dataContext);
   function handleButton (product){
    const carritoNuevo = carrito.filter((item) => item.id != product.id)
    setCarrito(carritoNuevo)
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Tu Producto Ha Sido Eliminado',
      showConfirmButton: false,
      timer: 1500
    })
    
}
  return carrito.map((product) => {
    return(
        <div className="cartContent " key={product.id}>
            <img className="card-img" src={product.image} alt="Product Card" />
            <h3 className="card-title">{truncateName(product.title)}</h3>
            <h4 className="card-price">${product.price}</h4>
            <button onClick={() => handleButton(product)} className="card-button">Eliminar</button>
        </div>
    )
  })
}

export default CartElements;
