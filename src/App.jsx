import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vendas from "./pages/Vendas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vendas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
