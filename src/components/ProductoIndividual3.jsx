import React from 'react';
import { Container, Row, Col, Form, Button, Table, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductoIndividual3({ setCart }) {
    return (
        <>
            <main>
                <Container className="my-5 product-page">
                    <Row>
                        <Col md={5}>
                            <img
                                src="/assets/img/Multivitaminico.jpg"
                                alt="Multivitaminico"
                                className="img-fluid rounded"
                            />
                        </Col>

                        <Col md={7}>
                            <p className="text-uppercase text-muted brand-text">Sunvit Life</p>
                            <h2 className="mb-3">Multivitamínico Completo 60 caps</h2>
                            <p className="text-muted mb-2"><strong>Categoría:</strong> Vitaminas</p>
                            <p className="mb-3">
                                Fórmula completa con vitaminas y minerales esenciales para tu salud diaria y energía.
                            </p>

                            <div className="mb-3 price-container-vertical">
                                <span className="card-price-highlight">
                                    <i className="bi bi-tag-fill me-1"></i> $11.990
                                </span>
                                <span className="old-price ms-2">$29.990</span>
                            </div>

                            <Form.Group className="mb-3 w-50">
                                <Form.Label>Sabor:</Form.Label>
                                <Form.Select>
                                    <option value="chocolate">Sin Sabor</option>
                                </Form.Select>
                            </Form.Group>

                            <div className="mb-3">
                                <Badge bg="success"><i className="bi bi-check-circle me-1"></i> Disponible</Badge>
                                <p className="text-muted mt-1">Unidades restantes: <strong>34</strong></p>
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

                    <Row className="mt-5 product-page-nutrition row section-box">
                        <Col md={6}>
                            <h4>Descripción del producto</h4>
                            <p>
                                Multi Men es un multivitamínico sugerido para hombres con el fin de incrementar su ingesta de vitaminas, minerales y nutrientes esenciales para ellos. 
                                Contiene vitaminas del complejo B para mejorar la memoria y concentración; además de todas las vitaminas y minerales que tu cuerpo necesita.
                            </p>
                            <ul>
                                <li>Fórmula diseñada para el hombre actual</li>
                                <li>Posee antioxidantes como Vitamina A, E, C y Selenio</li>
                                <li>60 tabletas</li>
                            </ul>
                        </Col>

                        <Col md={6}>
                            <h4>Información nutricional</h4>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>Componente</th>
                                        <th>Por porción (2 tabletas)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Calorías</td><td>2.55 kcal</td></tr>
                                    <tr><td>Proteínas</td><td>0.01 g</td></tr>
                                    <tr><td>Grasas</td><td>0.07 g</td></tr>
                                    <tr><td>Carbohidratos</td><td>0.96 g</td></tr>
                                    <tr><td>Azúcares</td><td>0 g</td></tr>
                                    <tr><td>Sodio</td><td>4.79 mg</td></tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

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
                                <span className="text-muted">(4.4/5 basado en 45 reseñas)</span>
                            </div>
                        </div>

                        <div className="card mb-3 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title reseña-titulo">Buen multivitamínico</h5>
                                <div className="rating mb-2">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star text-muted"></i>
                                </div>
                                <p className="card-text">Contiene aquellas vitaminas esenciales para el cuerpo.</p>
                                <small className="text-muted">Carlos Martínez - hace 6 días</small>
                            </div>
                        </div>

                        <div className="card mb-3 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title reseña-titulo">Muy bueno</h5>
                                <div className="rating mb-2">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                </div>
                                <p className="card-text">Lo consumo regularmente, me ayuda a sentirme mejor y estar más atento.</p>
                                <small className="text-muted">Ana Gómez - hace 1 semana</small>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <a href="/resenas" className="button btn btn-danger">
                                <i className="bi bi-chat-left-text me-1"></i> Ver todas las reseñas
                            </a>
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
}

export default ProductoIndividual3;
