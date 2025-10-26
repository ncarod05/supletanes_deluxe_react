import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';

const STORAGE_KEYS = ['loggedUser', 'user', 'usuario'];

describe('Navbar', () => {
  let originalLocation;

  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();

    originalLocation = window.location;
    delete window.location;
    window.location = { href: '' };
  });

  afterEach(() => {
    window.location = originalLocation;
  });

  it('muestra el nombre del usuario si está logeado', () => {
    const mockUser = { nombre: 'Juan', email: 'juan@mail.com' };
    localStorage.setItem('loggedUser', JSON.stringify(mockUser));
    window.dispatchEvent(new CustomEvent('userUpdated', { detail: mockUser }));

    render(<Navbar cartCount={0} />);

    expect(screen.getByText('Juan')).toBeInTheDocument();
    expect(screen.getByText('juan@mail.com')).toBeInTheDocument();
  });

  it('muestra el contador del carrito correctamente', () => {
    render(<Navbar cartCount={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
