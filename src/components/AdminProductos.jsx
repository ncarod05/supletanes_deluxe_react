import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';

function AdminProductos() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Proteína Whey', precio: 19990 },
    { id: 2, nombre: 'Creatina Monohidratada', precio: 14990 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', precio: '' });
  const [modoEdicion, setModoEdicion] = useState(false);
  const [productoEditando, setProductoEditando] = useState(null);

  const abrirModal = (producto = null) => {
    setModoEdicion(!!producto);
    setProductoEditando(producto);
    setNuevoProducto(producto || { nombre: '', precio: '' });
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
    setNuevoProducto({ nombre: '', precio: '' });
    setProductoEditando(null);
  };

  const guardarProducto = () => {
    if (modoEdicion) {
      setProductos(productos.map(p =>
        p.id === productoEditando.id ? { ...productoEditando, ...nuevoProducto } : p
      ));
    } else {
      const nuevo = {
        id: productos.length + 1,
        nombre: nuevoProducto.nombre,
        precio: parseInt(nuevoProducto.precio),
      };
      setProductos([...productos, nuevo]);
    }
    cerrarModal();
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <h2 className="mb-3">Gestión de Productos</h2>
        <Button variant="success" className="mb-3" onClick={() => abrirModal()}>
          Agregar Producto
        </Button>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(producto => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>${producto.precio.toLocaleString()}</td>
                <td>
                  <Button variant="warning" size="sm" className="me-2" onClick={() => abrirModal(producto)}>Editar</Button>{' '}
                  <Button variant="danger" size="sm" onClick={() => eliminarProducto(producto.id)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Footer />

      {/* Modal */}
      <Modal show={showModal} onHide={cerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modoEdicion ? 'Editar Producto' : 'Nuevo Producto'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={nuevoProducto.nombre}
                onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={nuevoProducto.precio}
                onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>Cancelar</Button>
          <Button variant="primary" onClick={guardarProducto}>Guardar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdminProductos;