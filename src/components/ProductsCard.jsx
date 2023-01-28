import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductsCard({
  product,
  product: { id, image, title, price, description },
}) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className="rounded-lg shadow-lg overflow-hidden cursor-pointer hover:-translate-y-1 hover:brightness-125 transition delay-150 duration-300 ease-in-out"
    >
      <img className="w-full" src={image} alt={title} />
      <div className="p-3 text-center ">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-2xl my-2">{price}원</p>
        <p className=" text-sm truncate px-2 text-gray-500">{description}</p>
      </div>
    </li>
  );
}
