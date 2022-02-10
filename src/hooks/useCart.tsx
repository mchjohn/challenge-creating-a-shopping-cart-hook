import { createContext, ReactNode, useContext, useRef, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketShoes:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const prevCartRef = useRef<Product[]>();

  useEffect(() => {
    prevCartRef.current = cart;
  });

  // nullish operator: Se o valor da esquerda for false, atribui a variável o valor direita
  // se o valor da esquerda for true, atribui o valor da esquerda
  const cartPreviousValue = prevCartRef.current ?? cart;

  useEffect(() => {
    if (cartPreviousValue !== cart) {
      // Atualiza o localStorage
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(cart));
    }
  }, [cart, cartPreviousValue]);

  const addProduct = async (productId: number) => {
    try {
      // Verifica se o produto tem em estoque
      const updatedCart = [...cart]; // clona o array de produtos no carrinho
      const productExists = updatedCart.find(product => product.id === productId); // verifica se o produto a ser adicionado no carrinho já existe;

      const stock = (await api.get(`/stock/${productId}`)).data; // Pega o produto na API

      const stockAmount = stock.amount; // Pega a quantidade desse produto no carrinho
      const currentAmount = productExists ? productExists.amount : 0; // Se o produto existe no carrinho, seta a quantidade do produto no carrinho, se não existe a quantidade é 0
      const amount = currentAmount + 1; // Seta a quantidade total desse produto no carrinho

      if (amount > stockAmount) { // Verifica se ainda há produtos em estoque
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      if (productExists) { // Se o produto estiver no carrinho ele já tem a propriedade amount
        productExists.amount = amount; // Atualiza a quantidade no carrinho
      } else {
        // Se o produto não existir no carrinho, busca-o na API e  adiciona a propriedade amount como 1
        const product = (await api.get(`/products/${productId}`)).data

        const newProduct = {
          ...product,
          amount: 1,
        };

        // Adicionada a propriedade amount que a interface Product espera, adiciona o novo produto ao carrinho
        updatedCart.push(newProduct);
      }

      // Atualiza o estado com o novo carrinho
      setCart(updatedCart);
    } catch {
      toast.error('Erro na adição do produto');
      return;
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(product => product.id === productId); // Verifica se existe o produto e retorna seu index

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);

        setCart(updatedCart);
      } else {
        throw Error();
      }
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      // Se não existir o produto sai da função
      if (amount <= 0) {
        return;
      }

      const stockAmount = (await api.get(`stock/${productId}`)).data.amount;

      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      const updatedCart = [...cart];
      const productExists = updatedCart.find(product => product.id === productId);

      if (productExists) {
        productExists.amount = amount;

        setCart(updatedCart);
      } else {
        throw Error();
      }
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
