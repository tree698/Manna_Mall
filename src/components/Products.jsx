import React from 'react';
import useProducts from '../hooks/useProducts';
import ProductsCard from './ProductsCard';

export default function Products() {
  const {
    productQuery: { isLoading, error, data: products },
  } = useProducts();
  return (
    <>
      {isLoading && <p>데이터를 받아 오는 중...</p>}
      {error && <p>어라~ 네트워크에 문제가 있네요. 잠시 후 다시 시도하세요!</p>}
      <ul className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products &&
          products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
