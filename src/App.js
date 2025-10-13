import Carrito from "./components/carrito";
import HomePage from "./components/HomePage";
import Usuario from "./components/usuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Pedidos from "./components/pedidos";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nuevousuario" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;