import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Productos() {
  return (
    <>
      <Navbar />
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
                  <div className="card h-100 product-card position-relative">
                    <span className="promo promo-sticker">¡Oferta!</span>
                    <a href="/producto_individual2">
                      <img
                        src="/assets/img/Gold Standard 5LB.webp"
                        className="card-img-top"
                        alt="Producto 1"
                      />
                    </a>
                    <div className="card-body d-flex flex-column">
                      <p className="card-text text-uppercase text-muted mb-1 brand-text">Optimum Nutrition</p>
                      <h5 className="card-title">Gold Standard Whey 5LB</h5>
                      <p className="card-text flex-grow-1">
                        Proteína de suero de leche reconocida como una de las mejores proteínas del mercado por su gran calidad, sabor, absorción y rápida digestibilidad.
                      </p>
                      <p className="card-price-highlight">
                        <span className="me-2">$69.990</span>
                        <span className="old-price">$79.990</span>
                      </p>
                      <Button variant="success" className="mt-auto p-2">
                        <i className="bi bi-cart-plus me-1"></i> Agregar al carrito
                      </Button>
                    </div>
                  </div>
                </Col>

                {/* Producto 2 */}
                <Col sm={6} md={4} lg={3}>
                  <div className="card h-100 product-card position-relative">
                    <span className="promo promo-sticker">¡Oferta!</span>
                    <a href="/producto_individual">
                      <img
                        src="/assets/img/Prostar 5LB.webp"
                        className="card-img-top"
                        alt="Producto 2"
                      />
                    </a>
                    <div className="card-body d-flex flex-column">
                      <p className="card-text text-uppercase text-muted mb-1 brand-text">Ultimate Nutrition</p>
                      <h5 className="card-title">
                        <a href="/producto_individual" className="card-link">Prostar Whey Protein 5LB</a>
                      </h5>
                      <p className="card-text flex-grow-1">
                        Mezcla de concentrado y aislado de proteína de suero de leche, aporta 25gr de proteína. En su versión de 5LB con 80 porciones.
                      </p>
                      <p className="card-price-highlight">
                        <span className="me-2">$59.990</span>
                        <span className="old-price">$69.990</span>
                      </p>
                      <Button variant="success" className="mt-auto p-2">
                        <i className="bi bi-cart-plus me-1"></i> Agregar al carrito
                      </Button>
                    </div>
                  </div>
                </Col>

                {/* Puedes agregar más productos aquí */}
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Productos;