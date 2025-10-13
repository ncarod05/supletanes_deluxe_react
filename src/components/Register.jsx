import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
    telefono: '',
    direccion: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!form.apellido.trim()) newErrors.apellido = 'El apellido es obligatorio';
    if (!form.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = 'Correo inválido';
    if (form.password.length < 6) newErrors.password = 'Mínimo 6 caracteres';
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden';
    if (!form.telefono.match(/^\d{10}$/)) newErrors.telefono = 'Teléfono de 10 dígitos';
    if (!form.direccion.trim()) newErrors.direccion = 'La dirección es obligatoria';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
      setTimeout(() => {
        window.location.href = '/';
      }, 1200); // Redirige tras mostrar mensaje de éxito
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Crear Cuenta</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <div className="register-error">{errors.nombre}</div>}
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={form.apellido}
          onChange={handleChange}
        />
        {errors.apellido && <div className="register-error">{errors.apellido}</div>}
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <div className="register-error">{errors.email}</div>}
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <div className="register-error">{errors.password}</div>}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar Contraseña"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <div className="register-error">{errors.confirmPassword}</div>}
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono (10 dígitos)"
          value={form.telefono}
          onChange={handleChange}
        />
        {errors.telefono && <div className="register-error">{errors.telefono}</div>}
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={form.direccion}
          onChange={handleChange}
        />
        {errors.direccion && <div className="register-error">{errors.direccion}</div>}
        <button type="submit">Registrarse</button>
        {success && <div className="register-success">¡Cuenta creada exitosamente!</div>}
      </form>
    </div>
  );
};

export default Register;
