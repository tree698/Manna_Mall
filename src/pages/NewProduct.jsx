import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { addNewProduct } from '../service/firebase';
import { uploadImage } from '../service/uploader';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file).then((url) => addNewProduct(product, url));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile((file) => files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt="열대과일 이미지" />}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ''}
          required
          onChange={handleChange}
          placeholder="상품명"
        />
        <input
          type="text"
          name="price"
          value={product.price ?? ''}
          required
          onChange={handleChange}
          placeholder="가격"
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ''}
          required
          onChange={handleChange}
          placeholder="카테고리"
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ''}
          required
          onChange={handleChange}
          placeholder="상품 설명"
        />
        <input
          type="text"
          name="option"
          value={product.option ?? ''}
          required
          onChange={handleChange}
          placeholder="옵션(콤마(,)로 구분)"
        />
        <Button text={'상품 등록하기'} />
      </form>
    </section>
  );
}
