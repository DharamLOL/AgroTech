import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vendas from "./pages/Vendas";
import PerfilCliente from "./pages/PerfilCliente";
import PerfilEmpresa from "./pages/PerfilEmpresa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vendas />} />
        <Route path="/perfilcliente" element={<PerfilCliente />}/>
        <Route path="/perfilempresa" element={<PerfilEmpresa/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
