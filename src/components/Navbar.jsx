import React, { useEffect, useState } from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';
import { login, logout, onAuthChange } from '../service/auth';
import Button from './ui/Button';
import User from './User';

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthChange((user) => {
      // console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <header className="flex justify-between border-b border-gray-300 p-3">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <RiShoppingBagLine />
        <h1 className="text-3xl">맛나몰</h1>
      </Link>
      <nav className="flex items-center gap-6 font-semibold">
        <Link to="/products">모든 상품</Link>
        {user && <Link to="/carts">내 카트</Link>}
        {user && user.isAdmin && <Link to="/products/new">관리자</Link>}

        {user && <User user={user} />}
        {!user && <Button text={'로그인'} onClick={login} />}
        {user && <Button text={'로그아웃'} onClick={logout} />}
      </nav>
    </header>
  );
}
