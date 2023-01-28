import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewProduct, getProducts } from '../service/firebase';

export default function useProducts() {
  const queryClient = useQueryClient();
  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(['products']),
    }
  );

  const productQuery = useQuery(['products'], () => getProducts(), {
    staleTime: 1000 * 60 * 1,
  });

  return { addProduct, productQuery };
}
