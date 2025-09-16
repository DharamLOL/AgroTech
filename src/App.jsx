import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vendas from "./pages/Vendas";
import FaleConosco from "./pages/FaleConosco";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vendas />} />
        <Route path="/faleconosco" element={<FaleConosco />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
