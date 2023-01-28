import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { addNewProduct } from '../service/firebase';
import { uploadImage } from '../service/uploader';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const queryClient = useQueryClient();
  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(['products']),
    }
  );

  // {} & () => {} 주의
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file)
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess('상품이 성공적으로 추가되었습니다');
              setTimeout(() => {
                setSuccess(null);
              }, 4000);
            },
          }
        );
      })
      .finally(() => {
        setIsUploading(false);
        setProduct({});
        setFile();
      });
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
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">새 상품 등록하기</h2>
      {success && <p className="my-2">✅ {success}</p>}
      {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="열대과일 이미지"
        />
      )}
      <form className="flex flex-col px-20" onSubmit={handleSubmit}>
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
        {/* disabled => isUploadingd이 true면 작동 못하도록... */}
        <Button
          text={isUploading ? '업로드 중...' : '상품 등록하기'}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}
