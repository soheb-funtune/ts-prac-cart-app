import { createContext, useContext, ReactNode, useState } from "react";
import ShopingCart from "../components/ShopingCart";

type ShopingCartProviderPropType = {
  children: ReactNode;
};

type ShopingCartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: cartItem[];
};

type cartItem = {
  id: number;
  quantity: number;
};

const ShopingCartContext = createContext({} as ShopingCartContextType);

export const useShopingCart = () => {
  return useContext(ShopingCartContext);
};

export const ShopingCartProvider = ({
  children,
}: ShopingCartProviderPropType) => {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  function openCart() {
    setCartOpen(true);
  }
  function closeCart() {
    setCartOpen(false);
  }

  function getItemQuantity(id: number) {
    return cartItems?.find((item) => item?.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setCartItems((currItem) => {
      if (currItem?.find((item) => item?.id === id) == null) {
        return [...currItem, { id, quantity: 1 }];
      } else {
        return currItem?.map((item) => {
          if (item?.id === id) {
            return { ...item, quantity: item?.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((currItem) => {
      if (currItem?.find((item) => item?.id === id)?.quantity === 1) {
        return currItem?.filter((item) => item?.id !== id);
      } else {
        return currItem?.map((item) => {
          if (item?.id === id) {
            return { ...item, quantity: item?.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItem) => currItem?.filter((item) => item?.id !== id));
  }

  const cartQuantity = cartItems?.reduce(
    (quantity, item) => item?.quantity + quantity,
    0
  );
  return (
    <ShopingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <ShopingCart cartOpen={cartOpen} />
    </ShopingCartContext.Provider>
  );
};
