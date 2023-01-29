import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  addOrUpdateToCard,
  getCart,
  removeFromCart,
} from '../service/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  const cartQuery = useQuery(['cart', uid || ''], () => getCart(uid), {
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation(
    (product) => addOrUpdateToCard(uid, product),
    {
      onSuccess: () => queryClient.invalidateQueries(['cart', uid]),
    }
  );

  const removeItem = useMutation(
    (productId) => removeFromCart(uid, productId),
    {
      onSuccess: () => queryClient.invalidateQueries(['cart', uid]),
    }
  );

  return { addOrUpdateItem, cartQuery, removeItem };
}
