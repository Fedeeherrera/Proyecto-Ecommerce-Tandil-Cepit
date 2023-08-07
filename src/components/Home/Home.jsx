import NavBar from "../NavBar/NavBar";
import Products from "../Products/Products";
import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />
      <h1 className="home__h1">
        Bienvenido, elija el producto que desee comprar{" "}
      </h1>
      <div className="productCardContainer">
      <Products />
      </div>
    </>
  );
}

export default Home;
