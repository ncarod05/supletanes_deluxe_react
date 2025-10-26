import React, { useState, useEffect } from 'react';
import './Login.css';
import Footer from './Footer';

const STORAGE_KEYS = ['loggedUser', 'user', 'usuario'];

const notifyUserUpdated = (payload) => {
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
};

const saveTemp = (payload) => {
  try {
    STORAGE_KEYS.forEach(k => localStorage.setItem(k, JSON.stringify(payload)));
    notifyUserUpdated(payload);
  } catch (e) {
    console.warn('Error saving temp user in login', e);
  }
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Prefill email if existe en storage
    try {
      const keys = ['loggedUser','user','usuario'];
      for (const k of keys) {
        const raw = localStorage.getItem(k) || sessionStorage.getItem(k);
        if (!raw) continue;
        try {
          const parsed = JSON.parse(raw);
          if (parsed && parsed.email) {
            setEmail(parsed.email);
            break;
          }
        } catch {
          // raw puede ser un string con el email
          setEmail(String(raw));
          break;
        }
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Permitir acceso con cualquier usuario/contraseña (mock)
    setError('');
    const payload = { nombre: '', email: email, telefono: '', direccion: '' };
    saveTemp(payload);
    // Redirigir a la página principal
    window.location.href = '/';
  };

  return (
    <div className="page-root">
      <div className="page-content">
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        {error && <div className="login-error">{error}</div>}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
