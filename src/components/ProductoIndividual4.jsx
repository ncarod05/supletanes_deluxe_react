import React from 'react';
import { Container, Row, Col, Form, Button, Table, Badge } from 'react-bootstrap';

function ProductoIndividual4({ setCart }) {
    return (
        <>
            <main>
                <Container className="my-5 product-page">
                    <Row>
                        <Col md={5}>
                            <img
                                src="/assets/img/creatina nutrex.webp"
                                alt="C"
                                className="img-fluid rounded"
                            />
                        </Col>

                        <Col md={7}>
                            <p className="text-uppercase text-muted brand-text">Nutrex</p>
                            <h2 className="mb-3">Nutrex creatina monohidratada 1kg</h2>
                            <p className="text-muted mb-2"><strong>Categoría:</strong> Creatinas</p>
                            <p className="mb-3">
                                Suplemento de máxima pureza para optimizar el rendimiento deportivo.
                                Cada porción proporciona 5 gramos de creatina monohidratada de calidad premium
                            </p>

                            <div className="mb-3 price-container-vertical">
                                <span className="card-price-highlight">
                                    <i className="bi bi-tag-fill me-1"></i> $49.990
                                </span>
                                <span className="old-price ms-2">$54.990</span>
                            </div>

                            <div className="mb-3">
                                <Badge bg="success"><i className="bi bi-check-circle me-1"></i> Disponible</Badge>
                                <p className="text-muted mt-1">Unidades restantes: <strong>24</strong></p>
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
                                La creatina Nutrex monohidratada de 1kg es un suplemento de máxima pureza formulado para optimizar tu rendimiento deportivo.
                                Cada porción proporciona 5 gramos de creatina monohidratada de calidad premium, diseñada para aumentar significativamente la fuerza, potencia muscular y resistencia durante los entrenamientos intensos.
                            </p>
                            <ul>
                                <li>Altamente soluble</li>
                                <li>De rápida absorción</li>
                                <li>200 porciones por envase</li>
                            </ul>
                        </Col>

                        <Col md={6}>
                            <h4>Información nutricional</h4>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>Componente</th>
                                        <th>Por porción (5 gramos)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>Calorías</td><td>0 kcal</td></tr>
                                    <tr><td>Proteínas</td><td>0 g</td></tr>
                                    <tr><td>Grasas</td><td>0 g</td></tr>
                                    <tr><td>Carbohidratos</td><td>0 g</td></tr>
                                    <tr><td>Azúcares</td><td>0 g</td></tr>
                                    <tr><td>Sodio</td><td>0 mg</td></tr>
                                    <tr><td>Creatina</td><td>5 mg</td></tr>
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
                                <span className="text-muted">(4.6/5 basado en 85 reseñas)</span>
                            </div>
                        </div>

                        {/* Reseña 1 */}
                        <div className="card mb-3 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title reseña-titulo">Aumentó mi rendimiento</h5>
                                <div className="rating mb-2">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star text-muted"></i>
                                </div>
                                <p className="card-text">Llevo un tiempo tomandola, y ya he notado las mejoras en mi fuerza.</p>
                                <small className="text-muted">Javier González - hace 5 días</small>
                            </div>
                        </div>

                        {/* Reseña 2 */}
                        <div className="card mb-3 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title reseña-titulo">Alta calidad y dura muchísimo</h5>
                                <div className="rating mb-2">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                </div>
                                <p className="card-text">La consumo todos los dias sin falta, y aún asi todavía me queda mucha cantidad, mis entrenamientos son más efectivos.</p>
                                <small className="text-muted">Miguel Cervantes - hace 1 semana</small>
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

export default ProductoIndividual4;
