import type { Product } from '../models/product.model.js';

export function calculateSubtotal(products: Product[]): number {
  return products.reduce((total: number, product: Product) => total + product.price, 0);
}

export function calculateTax(subtotal: number): number {
  return subtotal * 0.08;
}

export function calculateTotal(products: Product[]): number {
  const subtotal: number = calculateSubtotal(products);
  return subtotal + calculateTax(subtotal);
}
