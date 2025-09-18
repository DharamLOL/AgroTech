import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vendas from "./pages/Vendas";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Vendas" element={<Vendas />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
