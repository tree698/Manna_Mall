import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../service/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: product } = useQuery(['cart'], () => getCart(uid));
  return (
    <div className="relative">
      <AiOutlineShoppingCart />
      {product && (
        <p className="w-5 h-5 text-center text-white font-bold rounded-full absolute text-sm -top-1 -right-2 bg-brand">
          {product.length}
        </p>
      )}
    </div>
  );
}
