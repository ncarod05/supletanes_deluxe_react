import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Productos({ setCart }) {
  const agregarAlCarrito = (producto) => {
    setCart(prev => {
      const existe = prev.find(p => p.nombre === producto.nombre);
      if (existe) {
        return prev.map(p =>
          p.nombre === producto.nombre
            ? { ...p, cantidad: p.cantidad + producto.cantidad }
            : p
        );
      } else {
        return [...prev, producto];
      }
    });

    alert("Producto agregado al carrito 🛒");
  };
  return (
    <>
      <main>
        <Container fluid className="p-4">
          <Row className="g-4">
            {/* Imagen superior */}
            <img
              src="/assets/img/strongman-with-can-of-supplements-royalty-free-image-1574954622.avif"
              alt="Banner productos"
              style={{ height: '250px', objectFit: 'cover' }}
            />

            {/* Barra lateral */}
            <Col md={3} className="mb-4">
              <div className="sidebar p-3">
                <h5 className="mb-3">Filtros</h5>

                {/* Búsqueda */}
                <div className="mb-3">
                  <Form.Label htmlFor="search">Buscar producto</Form.Label>
                  <Form.Control type="text" id="search" placeholder="Ej: proteína..." />
                </div>

                {/* Categorías */}
                <div className="mb-3">
                  <h6 className="sidebar-title">Categorías</h6>
                  {[
                    'Proteínas',
                    'Creatinas',
                    'Pre-entrenos',
                    'Vitaminas',
                    'Omega-3',
                    'Barras Proteicas',
                    'Ganadores De Peso',
                    'Probióticos',
                  ].map((categoria, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      id={categoria.toLowerCase().replace(/\s/g, '')}
                      label={categoria}
                    />
                  ))}
                </div>

                {/* Rango de precios */}
                <div className="mb-3">
                  <h6 className="sidebar-title">Precio</h6>
                  <Form.Range min={10000} max={100000} step={5000} />
                  <div className="d-flex justify-content-between small">
                    <span>$10.000</span>
                    <span>$100.000+</span>
                  </div>
                </div>

                {/* Botón aplicar */}
                <Button variant="danger" className="w-100">Aplicar filtros</Button>
              </div>
            </Col>

            {/* Sección de productos */}
            <Col md={9}>
              <Row className="g-3">
                {/* Producto 1 */}
                <Col sm={6} md={4} lg={3}>
                  <ProductCard
                    name="Gold Standard Whey 5LB"
                    brand="Optimum Nutrition"
                    description="Proteína de suero de leche reconocida como una de las mejores proteínas del mercado por su gran calidad, sabor, absorción y rápida digestibilidad."
                    price="$69.990"
                    oldPrice="$79.990"
                    image="/assets/img/Gold Standard 5LB.webp"
                    link="/producto_individual2"
                    onAdd={() => agregarAlCarrito({
                      nombre: "Gold Standard Whey 5LB",
                      cantidad: 1,
                      precio: 69990
                    })}
                  />
                </Col>

                {/* Producto 2 */}
                <Col sm={6} md={4} lg={3}>
                  <ProductCard
                    name="Prostar Whey Protein 5LB"
                    brand="Ultimate Nutrition"
                    description="Mezcla de concentrado y aislado de proteína de suero de leche, aporta 25gr de proteína. En su versión de 5LB con 80 porciones."
                    price="$59.990"
                    oldPrice="$69.990"
                    image="/assets/img/Prostar 5LB.webp"
                    link="/producto_individual"
                    onAdd={() => agregarAlCarrito({
                      nombre: "Prostar Whey Protein 5LB",
                      cantidad: 1,
                      precio: 69990
                    })}
                  />
                </Col>

                <Col sm={6} md={4} lg={3}>
                  <ProductCard
                    name="Multivitamínico Completo 60 caps"
                    brand="Sunvit Life"
                    description="Fórmula completa con vitaminas y minerales esenciales para tu salud diaria y energía."
                    price="$11.990"
                    oldPrice="$29.990"
                    image="/assets/img/Multivitaminico.jpg"
                    link="/producto_individual3"
                    onAdd={() => agregarAlCarrito({
                      nombre: "Multivitamínico Completo 60 caps",
                      cantidad: 1,
                      precio: 69990
                    })}
                  />
                </Col>

                <Col sm={6} md={4} lg={3}>
                  <ProductCard
                    name="Nutrex creatina monohidratada 1kg"
                    brand="Nutrex"
                    description="Suplemento de máxima pureza para optimizar el rendimiento deportivo. Cada porción proporciona 5 gramos de creatina monohidratada de calidad premium"
                    price="$49.990"
                    oldPrice="$54.990"
                    image="/assets/img/creatina nutrex.webp"
                    link="/producto_individual4"
                    onAdd={() => agregarAlCarrito({
                      nombre: "Nutrex creatina monohidratada 1kg",
                      cantidad: 1,
                      precio: 69990
                    })}
                  />
                </Col>

                {/* Más productos aquí */}
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Productos;