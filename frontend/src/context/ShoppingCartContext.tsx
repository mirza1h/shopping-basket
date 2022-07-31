import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { getProducts, updateProduct } from "../adapters/api";
import { Product } from "../types/ProductType";

type ShoppingCartContext = {
  getItemAdded: (id: number) => boolean;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  cartItems: CartItem[];
  cartQuantity: number;
  productData: Product[];
};

type CartItem = {
  id: number;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [productData, setProductData] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [open, setIsOpen] = useState(false);

  useEffect(() => {
    getProducts().then((data) => {
      setProductData(data);
    });
  }, []);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function addToCart(id: number) {
    setCartItems((currItems) => {
      return [...currItems, { id }];
    });
  }

  function removeFromCart(id: number) {
    updateProduct(productData.find((product) => product.id === id)!);
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id != id);
    });
  }

  function getItemAdded(id: number) {
    return cartItems.find((item) => item.id === id) ? true : false;
  }

  const cartQuantity = cartItems.length;

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemAdded,
        addToCart,
        removeFromCart,
        openCart,
        closeCart,
        cartQuantity,
        cartItems,
        productData,
      }}
    >
      {children}
      <ShoppingCart isOpen={open} />
    </ShoppingCartContext.Provider>
  );
}
