import React, { useEffect, useState } from 'react';

function Navbar({ cartCount }) {
  const isAdmin = true; // Simulación de usuario administrador
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('usuario');
    setUsuario(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    localStorage.removeItem("carrito");
    window.location.href = '/';
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand custom-brand" href="/">Supletanes Deluxe</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active custom-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="/productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="/quienes">Quienes somos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="/login">Iniciar Sesión</a>
            </li>
          </ul>
          <form className="d-flex align-items-center" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
            <button className="btn btn-danger me-3" type="submit">Buscar</button>
          </form>
          <div className="d-flex align-items-center gap-3">
            <a href="/carrito" className="text-white text-decoration-none position-relative" title="Carrito de compras">
              <i className="bi bi-cart3 fs-4"></i>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </a>
            <div className="dropdown">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center"
                id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false" title="Mi cuenta">
                <i className="bi bi-person-circle fs-4"></i>
                {usuario && <span className="ms-2">Hola, {usuario}</span>}
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                {!usuario && <li><a className="dropdown-item" href="/login">Iniciar Sesión</a></li>}
                {!usuario && <li><a className="dropdown-item" href="/nuevousuario">Crear Cuenta</a></li>}
                {usuario && isAdmin && <li><a className="dropdown-item" href="/admin">Panel Admin</a></li>}
                {usuario && <li><a className="dropdown-item" href="/usuario">Mi Perfil</a></li>}
                {usuario && <li><a className="dropdown-item" href="/pedidos">Mis Pedidos</a></li>}
                {usuario && <li><button className="dropdown-item" onClick={handleLogout}>Cerrar sesión</button></li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;