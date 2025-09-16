import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vendas from "./pages/Vendas";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vendas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;