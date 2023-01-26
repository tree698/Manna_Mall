import React, { useEffect, useState } from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { login, logout, onAuthChange } from '../service/auth';
import User from './User';

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthChange(setUser);
  }, []);

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

        {!user && <button onClick={login}>로그인</button>}
        {user && <User user={user} />}
        {user && <button onClick={logout}>로그아웃</button>}
      </nav>
    </header>
  );
}
