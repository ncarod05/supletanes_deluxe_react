import React, { useState } from 'react';
import '../assets/css/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setCart }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //navegar a la pagina principal
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Permitir acceso con cualquier usuario/contraseña
    setError('');
    localStorage.setItem('usuario', email); // Guardar usuario temporal

    // Precargar productos administrables si no existen
    const productosAdminIniciales = [
      {
        id: 1,
        nombre: 'Proteína Whey',
        precio: 19990,
        descripcion: 'Proteína de suero para recuperación muscular',
        categoria: 'Proteína',
        stock: 36
      },
      {
        id: 2,
        nombre: 'Creatina Monohidratada',
        precio: 14990,
        descripcion: 'Creatina para fuerza y rendimiento',
        categoria: 'Creatina',
        stock: 67
      }
    ];
    localStorage.setItem('adminProductos', JSON.stringify(productosAdminIniciales));

    // Precargar productos del carrito
    const productosIniciales = [
      { nombre: "Prostar Whey Protein 5LB", cantidad: 1, precio: 59990 },
      { nombre: "Multivitamínico Completo 60 caps", cantidad: 2, precio: 23980 },
    ];

    localStorage.setItem("carrito", JSON.stringify(productosIniciales));
    setCart(productosIniciales);

    window.location.href = '/'; // redirige
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="login-error">{error}</div>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
