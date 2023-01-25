import React from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-3">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <RiShoppingBagLine />
        <h1 className="text-3xl">맛나몰</h1>
      </Link>
      <nav className="flex items-center gap-6 font-semibold">
        <Link to="/products">모든 상품</Link>
        <Link to="/carts">내 카트</Link>
        <Link to="/products/new">새 상품</Link>
        <button>로그인</button>
      </nav>
    </header>
  );
}
