import React, { useState, useEffect, useRef } from "react";
import Navbar from './Navbar';
import Footer from './Footer';

const STORAGE_KEYS = ['loggedUser', 'user', 'usuario'];

const readStored = () => {
  try {
    for (const k of STORAGE_KEYS) {
      const raw = localStorage.getItem(k) || sessionStorage.getItem(k);
      if (!raw) continue;
      try {
        const parsed = JSON.parse(raw);
        return { nombre: parsed.nombre || '', email: parsed.email || '', telefono: parsed.telefono || '', direccion: parsed.direccion || '' };
      } catch (e) {
        // raw is plain string (email)
        return { nombre: '', email: String(raw), telefono: '', direccion: '' };
      }
    }
  } catch (e) {
    console.warn('Error leyendo storage en usuario:', e);
  }
  return { nombre: '', email: '', telefono: '', direccion: '' };
};

const persist = (payload) => {
  try {
    STORAGE_KEYS.forEach(k => localStorage.setItem(k, JSON.stringify(payload)));
    try {
      window.dispatchEvent(new CustomEvent('userUpdated', { detail: payload }));
    } catch (err) {
      try {
        const ev = document.createEvent('CustomEvent');
        ev.initCustomEvent('userUpdated', false, false, payload);
        window.dispatchEvent(ev);
      } catch (e) {
        // ignore
      }
    }
  } catch (e) {
    console.warn('Error persistiendo usuario:', e);
  }
};

const Usuario = () => {
  const [user, setUser] = useState({ nombre: '', email: '', telefono: '', direccion: '' });
  const [original, setOriginal] = useState({ nombre: '', email: '', telefono: '', direccion: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const nombreRef = useRef(null);

  useEffect(() => {
    const stored = readStored();
    setUser(stored);
    setOriginal(stored);
  }, []);

  useEffect(() => {
    if (isEditing) nombreRef.current?.focus();
  }, [isEditing]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'email') return; // email no editable aquí
    setUser(prev => ({ ...prev, [id]: value }));
  };

  const handleEditar = () => setIsEditing(true);

  const handleCancelar = () => {
    setUser(original);
    setIsEditing(false);
  };

  const handleGuardar = (e) => {
    e?.preventDefault?.();
    const toSave = { ...user, email: original.email || user.email };
    setUser(toSave);
    setOriginal(toSave);
    persist(toSave);
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="page-root">
      <div className="page-content">
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
                  <form onSubmit={handleGuardar}>
                    <div className="mb-3">
                      <label htmlFor="nombre" className="form-label">Nombre completo</label>
                      <input
                        ref={nombreRef}
                        id="nombre"
                        type="text"
                        className="form-control"
                        placeholder="Juan Pérez"
                        value={user.nombre}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Correo electrónico</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="juan@example.com"
                        value={user.email}
                        disabled
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="telefono" className="form-label">Teléfono</label>
                      <input
                        id="telefono"
                        type="tel"
                        className="form-control"
                        placeholder="+56 9 1234 5678"
                        value={user.telefono}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="direccion" className="form-label">Dirección</label>
                      <input
                        id="direccion"
                        type="text"
                        className="form-control"
                        placeholder="Av. Siempre Viva 742"
                        value={user.direccion}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="d-flex justify-content-end">
                      {!isEditing && (
                        <button type="button" className="button me-2" id="editarPerfil" onClick={handleEditar}>Editar</button>
                      )}
                      {isEditing && (
                        <>
                          <button type="submit" className="button me-2" id="guardarCambios">Guardar cambios</button>
                          <button type="button" className="button" onClick={handleCancelar}>Cancelar</button>
                        </>
                      )}
                    </div>

                    {saved && (
                      <div className="mt-3">
                        <div className="alert alert-success p-2 mb-0" role="alert">Perfil guardado</div>
                      </div>
                    )}
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
      </div>
      <Footer />
    </div>
  );
};

export default Usuario;