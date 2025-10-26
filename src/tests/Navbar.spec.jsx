import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it('muestra el nombre del usuario si está logeado', () => {
    const mockUser = { nombre: 'Juan', email: 'juan@mail.com' };
    localStorage.setItem('loggedUser', JSON.stringify(mockUser));

    render(<Navbar cartCount={0} />);

    expect(screen.getByText('Juan')).not.toBeNull();
    expect(screen.getByText('juan@mail.com')).not.toBeNull();
  });

  it('muestra el contador del carrito correctamente', () => {
    render(<Navbar cartCount={5} />);
    expect(screen.getByText('5')).not.toBeNull();
  });
});
