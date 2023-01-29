import React from 'react';
import CartItem from '../components/CartItem';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

const SHEPPING = 3000;
export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;
  const hasProduct = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, curr) => prev + parseInt(curr.price) * curr.quantity,
      0
    );
  return (
    <section className="p-8 flex flex-col">
      <p className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        내 장바구니
      </p>
      {!hasProduct && <p>장바구니에 상품이 없습니다.</p>}
      {hasProduct && (
        <>
          <ul className="border-b border-gray-300 mb-8 p-4 px-8">
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className="flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16">
            <PriceCard text="상품 총액" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="배송비" price={SHEPPING} />
            <FaEquals className="shrink-0" />
            <PriceCard text="총 결재액" price={totalPrice + SHEPPING} />
          </div>
          <Button text="주문하기" />
        </>
      )}
    </section>
  );
}
