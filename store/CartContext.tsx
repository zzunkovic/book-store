import React, { useState } from "react";
import { useContext } from "react";

interface Item {
  price: number;
}

interface CartContextType {
  cart: Item[];
  addToCartHandler: (item: Item) => void;
}

const CartContext = React.createContext<CartContextType>({
  cart: [],
  addToCartHandler: () => {},
});

export function useCartContext() {
  return useContext(CartContext);
}
const CartContextProvider = (props: any) => {
  const [cart, setCart] = useState<Item[]>([]);

  const addToCartHandler = (item: Item) => {
    setCart((prevCart) => {
      return [...prevCart, item];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCartHandler }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
