import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vendas from "./pages/Vendas";
import PerfilCliente from "./pages/PerfilCliente";
import PerfilEmpresa from "./pages/PerfilEmpresa";
import FaleConosco from "./pages/FaleConosco";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vendas />} />
        <Route path="/perfilcliente" element={<PerfilCliente />}/>
        <Route path="/perfilempresa" element={<PerfilEmpresa/>}/>
        <Route path="/faleconosco" element={<FaleConosco/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
