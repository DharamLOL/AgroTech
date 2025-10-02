import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vendas from "./pages/Vendas";
import Home from "./pages/Home";
import Doar from "./pages/Doar";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import PerfilCliente from "./pages/PerfilCliente";
import FaleConosco from "./pages/FaleConosco";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Vendas" element={<Vendas />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Doar" element={<Doar />} />
        <Route path="/perfilcliente" element={<PerfilCliente />}/>
        <Route path="/faleconosco" element={<FaleConosco/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
