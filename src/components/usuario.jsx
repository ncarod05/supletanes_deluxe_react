import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';

const Usuario = () => {
  return (
    <>
      <Navbar />
      <main className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card usuario-card shadow-sm">
                <div className="card-header">
                  <h2 className="mb-0 text-white">Mi Perfil</h2>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="nombre" className="form-label">Nombre completo</label>
                      <input type="text" className="form-control" id="nombre" placeholder="Juan Pérez" disabled />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Correo electrónico</label>
                      <input type="email" className="form-control" id="email" placeholder="juan@example.com" disabled />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="telefono" className="form-label">Teléfono</label>
                      <input type="tel" className="form-control" id="telefono" placeholder="+56 9 1234 5678" disabled />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="direccion" className="form-label">Dirección</label>
                      <input type="text" className="form-control" id="direccion" placeholder="Av. Siempre Viva 742" disabled />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="button" className="button me-2" id="editarPerfil">Editar</button>
                      <button type="submit" className="button d-none" id="guardarCambios">Guardar cambios</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-5">
            <h4 className="mb-3">Mis últimos pedidos</h4>
            <div className="card mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <strong>#PED-00123</strong><br />
                  Prostar Whey Protein 5LB<br />
                  <small>Fecha: 03/09/2025</small>
                </div>
                <div className="text-end">
                  <span className="badge bg-success mb-2">Entregado</span><br />
                  <a href="/reseñas" className="btn btn-outline-primary btn-sm">
                    <i className="bi bi-pencil-square me-1"></i> Dejar reseña
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <a href="/pedidos" className="button">Ver más</a>
            </div>
          </section>

          <section className="mt-5">
            <h4 className="mb-3">Mis favoritos</h4>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="product-card h-100 d-flex flex-column position-relative">
                  <img src="/assets/img/Prostar 5LB.webp" className="img-fluid mb-3" alt="Ultimate Nutrition" style={{maxHeight:"180px", objectFit:"contain"}} />
                  <h5 className="mb-1">Prostar Whey Protein 5LB</h5>
                  <p className="old-price">$69.990</p>
                  <div className="card-price-highlight mb-2">$59.990</div>
                  <div className="d-flex justify-content-between mt-auto">
                    <a href="/producto_individual" className="button">Ver más</a>
                    <button className="btn btn-outline-danger btn-sm" title="Quitar de favoritos">
                      <i className="bi bi-heartbreak"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-card h-100 d-flex flex-column position-relative">
                  <img src="/assets/img/Multivitaminico.jpg" className="img-fluid mb-3" alt="Multivitamínicos Deluxe" style={{maxHeight:"180px", objectFit:"contain"}} />
                  <h5 className="mb-1">Multivitamínicos Deluxe</h5>
                  <p className="old-price">$14.990</p>
                  <div className="card-price-highlight mb-2">$11.990</div>
                  <div className="d-flex justify-content-between mt-auto">
                    <a href="/producto_individual3" className="button">Ver más</a>
                    <button className="btn btn-outline-danger btn-sm" title="Quitar de favoritos">
                      <i className="bi bi-heartbreak"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Usuario;