import { createContext, useState, useEffect } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const URL = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const truncateName = (name) => {
    if (name.length <= 20) {
      return name;
    } else {
      return name.substring(0, 20) + "...";
    }
  };

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);


  return <dataContext.Provider value={{data, carrito, setCarrito, truncateName}}>{children}</dataContext.Provider>;
};

export default DataProvider;
