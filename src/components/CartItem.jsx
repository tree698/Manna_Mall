import React from 'react';
import { AiOutlineMinusSquare } from 'react-icons/ai';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addOrUpdateToCard, removeFromCart } from '../service/firebase';

const ICONCLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-2';

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCard(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateToCard(uid, { ...product, quantity: quantity + 1 });
  const handleDelete = () => removeFromCart(uid, id);

  return (
    <li className="flex justify-between items-center my-2 px-6">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
      <div className="flex justify-between flex-1 ml-4">
        <div className="basis-1/2">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold text-brand">{option}</p>
          <p>
            {price}원, <span className="text-sm">1개 가격</span>
          </p>
        </div>
        <div className="text-2xl flex items-center">
          <AiOutlineMinusSquare className={ICONCLASS} onClick={handleMinus} />
          <span className="mx-1">총 {quantity}개</span>
          <AiOutlinePlusSquare className={ICONCLASS} onClick={handlePlus} />
          <RiDeleteBin5Fill className={ICONCLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
