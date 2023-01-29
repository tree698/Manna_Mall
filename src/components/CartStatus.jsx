import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className="relative">
      <AiOutlineShoppingCart />
      {products && (
        <p className="w-5 h-5 text-center text-white font-bold rounded-full absolute text-sm -top-1 -right-2 bg-brand">
          {products.length}
        </p>
      )}
    </div>
  );
}
