import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vendas from "./pages/Vendas";
import Home from "./pages/Home";
import Doar from "./pages/Doar";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Vendas" element={<Vendas />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Doar" element={<Doar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
