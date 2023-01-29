import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useAuthContext } from '../context/AuthContext';
import useCart from '../hooks/useCart';

export default function ProductDeatail() {
  const { user } = useAuthContext();
  const { addOrUpdateItem } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState();
  const {
    state: {
      product: { id, image, title, price, description, option },
    },
  } = useLocation();
  const [selected, setSelected] = useState();
  const [optionSelect, setOptionSelect] = useState();
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = () => {
    if (user == null) {
      alert('어라!!! 로그인이 필요해요~ 😅');
      return;
    }

    if (selected == null) {
      setOptionSelect('옵션을 선택해 주세요 😅');
      return;
    }
    setOptionSelect('');
    const products = { id, image, title, price, option: selected, quantity: 1 };
    setIsLoading(true);
    addOrUpdateItem.mutate(products, {
      onSuccess: () => {
        setIsLoading(false);
        setSuccess('장바구니에 추가되었습니다.');
        setTimeout(() => setSuccess(), 3000);
      },
    });
  };

  return (
    <section className="flex flex-col md:flex-row p-4">
      <img className="w-full px-4 basis-7/12" src={image} alt={title} />
      <div className="w-full basis-5/12 flex flex-col p-4">
        <p className="text-3xl font-bold py-2">{title}</p>
        <p className="text-2xl font-bold py-2 border-b border-gray-400">
          💁‍♀️ 1개: {price}원
        </p>
        <p className="py-4 text-lg">{description}</p>
        <div className="flex items-center">
          <label className="text-brand font-bold" htmlFor="product-select">
            옵션:
          </label>
          <select
            name="product"
            id="product-select"
            value={selected}
            onChange={handleSelect}
            className="p-2 m-4 flex-1 border-2 border-gray-200 rounded-md outline-none"
          >
            <option value="" className="text-center">
              ---- 어떻게 포장해 드릴까요? ----
            </option>
            {option &&
              option.map((o, index) => (
                <option key={index} value={o}>
                  {o}
                </option>
              ))}
          </select>
        </div>
        {success && <p className="my-2">✅ {success}</p>}
        {optionSelect && <p className="my-2"> {optionSelect}</p>}
        <Button
          text={isLoading ? '장바구니에 추가 중...' : '장바구니에 추가'}
          onClick={handleClick}
        />
      </div>
    </section>
  );
}
