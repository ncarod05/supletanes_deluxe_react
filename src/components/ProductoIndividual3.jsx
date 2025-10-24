import React from 'react';
import { Container, Row, Col, Form, Button, Table, Badge } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';

function ProductoIndividual() {
  return (
    <>
      <Navbar />
      <main>
        <Container className="my-5 product-page">
          <Row>
            <Col md={5}>
              <img
                src="/assets/img/Multivitaminico.jpg"
                alt="MultiVita Plus 60 cápsulas"
                className="img-fluid rounded"
              />
            </Col>

            <Col md={7}>
              <p className="text-uppercase text-muted brand-text">Health Plus</p>
              <h2 className="mb-3">MultiVita Plus 60 cápsulas</h2>
              <p className="text-muted mb-2"><strong>Categoría:</strong> Multivitamínicos</p>
              <p className="mb-3">
                MultiVita Plus es un suplemento multivitamínico completo que aporta vitaminas y minerales esenciales
                para fortalecer tu sistema inmunológico, aumentar tu energía y mejorar tu bienestar general.
              </p>

              <div className="mb-3 price-container-vertical">
                <span className="card-price-highlight">
                  <i className="bi bi-tag-fill me-1"></i> $11.990
                </span>
                <span className="old-price ms-2">$29.990</span>
              </div>

              <div className="mb-3">
                <Badge bg="success"><i className="bi bi-check-circle me-1"></i> Disponible</Badge>
                <p className="text-muted mt-1">Unidades restantes: <strong>50</strong></p>
              </div>

              <Form.Group className="mb-3 w-25">
                <Form.Label>Cantidad:</Form.Label>
                <Form.Control type="number" min={1} defaultValue={1} />
              </Form.Group>

              <Form.Group className="mb-3 w-50">
                <Form.Label>Método de despacho:</Form.Label>
                <Form.Select>
                  <option value="retiro">Retiro en tienda</option>
                  <option value="domicilio">Domicilio</option>
                </Form.Select>
              </Form.Group>

              <div className="d-flex gap-3 mb-3">
                <Button variant="success" size="lg" className="flex-grow-1">
                  <i className="bi bi-cart-plus me-1"></i> Agregar al carrito
                </Button>
                <Button variant="outline-danger" size="lg" className="flex-grow-1">
                  <i className="bi bi-heart me-1"></i> Agregar a deseos
                </Button>
              </div>
            </Col>
          </Row>

          {/* Sección nutricional */}
          <Row className="mt-5 product-page-nutrition row section-box">
            <Col md={6}>
              <h4>Descripción del producto</h4>
              <p>
                MultiVita Plus combina vitaminas A, C, D, E y complejo B con minerales como zinc, magnesio y calcio
                para apoyar tus defensas, mejorar el metabolismo energético y promover la salud general.
              </p>
              <ul>
                <li>Complejo completo de vitaminas y minerales</li>
                <li>Apoya sistema inmunológico</li>
                <li>60 cápsulas por envase</li>
                <li>Fácil de tomar y digestible</li>
              </ul>
            </Col>

            <Col md={6}>
              <h4>Información nutricional</h4>
              <Table bordered>
                <thead>
                  <tr>
                    <th>Componente</th>
                    <th>Por porción (2 cápsulas)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Vitamina A</td><td>900 mcg (100% VD)</td></tr>
                  <tr><td>Vitamina C</td><td>80 mg (89% VD)</td></tr>
                  <tr><td>Vitamina D</td><td>20 mcg (400 UI) (100% VD)</td></tr>
                  <tr><td>Vitamina E</td><td>15 mg (100% VD)</td></tr>
                  <tr><td>Complejo B</td><td>Incluye B1, B2, B3, B6, B12</td></tr>
                  <tr><td>Calcio</td><td>120 mg (12% VD)</td></tr>
                  <tr><td>Magnesio</td><td>50 mg (12% VD)</td></tr>
                  <tr><td>Zinc</td><td>10 mg (91% VD)</td></tr>
                </tbody>
              </Table>
            </Col>
          </Row>

          {/* Reseñas */}
          <div id="reseñas" className="mt-5">
            <h3 className="mb-3">Reseñas de clientes</h3>

            <div className="mt-4 mb-4">
              <h4>Valoración General</h4>
              <div className="d-flex align-items-center">
                <div className="rating me-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-half text-warning"></i>
                </div>
                <span className="text-muted">(4.5/5 basado en 150 reseñas)</span>
              </div>
            </div>

            {/* Reseña 1 */}
            <div className="card mb-3 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title reseña-titulo">Mejora mi energía</h5>
                <div className="rating mb-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star text-muted"></i>
                </div>
                <p className="card-text">Desde que tomo MultiVita Plus, siento más energía durante el día.</p>
                <small className="text-muted">Laura Pérez - hace 2 días</small>
              </div>
            </div>

            {/* Reseña 2 */}
            <div className="card mb-3 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title reseña-titulo">Excelente complemento</h5>
                <div className="rating mb-2">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <p className="card-text">Lo tomo todos los días y me ayuda a mantenerme saludable.</p>
                <small className="text-muted">Jorge Ramírez - hace 1 semana</small>
              </div>
            </div>

            <div className="text-center mt-4">
              <a href="/reseñas" className="button">
                <i className="bi bi-chat-left-text me-1"></i> Ver todas las reseñas
              </a>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default ProductoIndividual;
