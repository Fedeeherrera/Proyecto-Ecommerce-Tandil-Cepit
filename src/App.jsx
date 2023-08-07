import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import DataProvider from "./components/Context/DataContext";
import CartContent from "./components/CartContent/CartContent";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
