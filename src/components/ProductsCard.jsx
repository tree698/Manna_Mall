import React from 'react';

export default function ProductsCard({
  product: { image, title, price, description },
}) {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>₩ {price}원</p>
        <p>{description}</p>
      </div>
    </li>
  );
}
