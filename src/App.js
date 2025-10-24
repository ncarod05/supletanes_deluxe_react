import Carrito from "./components/carrito";
import HomePage from "./components/HomePage";
import Usuario from "./components/usuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Pedidos from "./components/pedidos";
import AdminDashboard from "./components/AdminDashboard";
import AdminProductos from "./components/AdminProductos";
import AdminPedidos from "./components/AdminPedidos"
import AdminUsuarios from "./components/AdminUsuarios";
import AdminReportes from "./components/AdminReportes";
import QuienesSomos from "./components/QuienesSomos";
import Productos from "./components/Productos";
import ProductoIndividual from './components/ProductoIndividual';
import ProductoIndividual2 from './components/ProductoIndividual2';
import ProductoIndividual3 from './components/ProductoIndividual3';
import ProductoIndividual4 from './components/ProductoIndividual4';
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
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/productos" element={<AdminProductos />} />
        <Route path="/admin/pedidos" element={<AdminPedidos />} />
        <Route path="/admin/usuarios" element={<AdminUsuarios />} />
        <Route path="/admin/reportes" element={<AdminReportes />} />
        <Route path="/quienes" element={<QuienesSomos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto_individual" element={<ProductoIndividual />} />
        <Route path="/producto_individual2" element={<ProductoIndividual2 />} />
        <Route path="/producto_individual3" element={<ProductoIndividual3 />} />
        <Route path="/producto_individual4" element={<ProductoIndividual4 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nuevousuario" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;