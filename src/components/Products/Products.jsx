import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import Swal from 'sweetalert2'
import "./Products.css";

function Products() {
  const { data, carrito, setCarrito, truncateName} = useContext(dataContext);
  const handleButton = (product) => {
    setCarrito([...carrito, product]);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tu Producto Ha Sido Agregado',
      showConfirmButton: false,
      timer: 1500
    })
  };

  return data?.map((product) => {
    return (
      <div className="card" key={product.id}>
        <h2 className="products-h2-map">{truncateName(product.title)}</h2>
        <img className="img-map" src={product.image} alt="card-producto" />
        <h3 className="products-h3-map">${product.price}</h3>
        <button onClick={() => handleButton(product)}>
          Agregar al Carrito
        </button>
      </div>
    );
  });
}

export default Products;
