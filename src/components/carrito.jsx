import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialCart = [
  { nombre: "Prostar Whey Protein 5LB", cantidad: 1, precio: 59990 },
  { nombre: "Multivitamínicos Deluxe", cantidad: 2, precio: 11990 },
  { nombre: "Gold Standard Whey 5LB", cantidad: 1, precio: 69990 },
];

function formatCLP(num) {
  return "$" + num.toLocaleString("es-CL");
}

const Carrito = () => {
  const [cart, setCart] = useState(initialCart);

  const handleCantidad = (idx, value) => {
    const nuevaCantidad = Math.max(1, Number(value));
    setCart(cart =>
      cart.map((item, i) =>
        i === idx ? { ...item, cantidad: nuevaCantidad } : item
      )
    );
  };

  const handleEliminar = idx => {
    setCart(cart => cart.filter((_, i) => i !== idx));
  };

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <main className="container my-5">
      <div className="d-flex justify-content-end align-items-center mb-3">
        <form className="d-flex align-items-center" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
          <button className="btn btn-danger me-2" type="submit">Buscar</button>
        </form>
        <Link to="/carrito" className="btn btn-outline-dark ms-2" title="Ir al carrito">
          <i className="bi bi-cart3"></i>
        </Link>
      </div>
      <h2 className="mb-4 text-center">Carrito de Compras</h2>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item.nombre}>
                <td>{item.nombre}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.cantidad}
                    className="form-control form-control-sm cantidad"
                    onChange={e => handleCantidad(idx, e.target.value)}
                  />
                </td>
                <td>{formatCLP(item.precio)}</td>
                <td className="subtotal">{formatCLP(item.precio * item.cantidad)}</td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm btn-eliminar"
                    onClick={() => handleEliminar(idx)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="table-secondary">
              <th colSpan="3" className="text-end">Total:</th>
              <th id="totalCarrito">{formatCLP(total)}</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="text-end">
        <button id="btnComprar" className="btn btn-success btn-lg">Realizar Compra</button>
      </div>
    </main>
  );
};

export default Carrito;