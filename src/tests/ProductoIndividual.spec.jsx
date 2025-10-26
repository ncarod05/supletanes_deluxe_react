import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductoIndividual from '../components/ProductoIndividual';

describe('ProductoIndividual', () => {
  it('acumula cantidad al hacer múltiples clics en "Agregar al carrito"', () => {
    let carrito = [];

    const mockSetCart = (actualizador) => {
      carrito = typeof actualizador === 'function' ? actualizador(carrito) : actualizador;
    };

    render(<ProductoIndividual setCart={mockSetCart} />);

    const boton = screen.getByRole('button', { name: /Agregar al carrito/i });

    // Simular 3 clics
    boton.click();
    boton.click();
    boton.click();

    // Verificar que solo hay un producto
    expect(carrito.length).toBe(1);

    // Verificar que la cantidad es 3
    expect(carrito[0].cantidad).toBe(3);

    // Verificar que el nombre del producto es correcto
    expect(carrito[0].nombre).toBe("Prostar Whey Protein 5LB");
  });
});