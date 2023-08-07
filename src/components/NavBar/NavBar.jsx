import { Link, useLocation } from "react-router-dom";


import "./NavBar.css";

function NavBar() {
  const location = useLocation();

  return (
    <div>
      <nav>
        <Link to={"/"} style={location.pathname === "/" ? { color: "red" } : {}}>
          HOME
        </Link>
        <Link to={"/cart"} style={location.pathname === "/cart" ? { color: "red" } : {}}>
          CART
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;

