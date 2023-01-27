import React from 'react';
import Products from '../components/Products';

export default function Home() {
  return (
    <section>
      <img className="w-full h-auto" src="/banner.png" alt="" />
      {/* <div
        className="bg-fixed w-full h-60"
        style={{ backgroundImage: url('/banner1.jpg') }}
      ></div> */}
      <Products />
    </section>
  );
}
