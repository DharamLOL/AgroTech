import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vendas from "./pages/Vendas";
import Home from "./pages/Home";
import Doar from "./pages/Doar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Vendas" element={<Vendas />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Doar" element={<Doar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
