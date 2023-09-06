import React, { useEffect, useState } from "react";
import { useContext } from "react";
import BookInterface from "@/models/BookInterface";

interface CartInterface {
  book: BookInterface;
  quantity: number;
}
interface CartContextType {
  cart: CartInterface[];
  cartOpen: boolean;
  totalPrice: number;
  openCartHandler: () => void;
  closeCartHandler: () => void;
  toggleCartHandler: () => void;
  addToCartHandler: (item: BookInterface) => void;
  removeFromCartHandler: (id: string) => void;
}

const CartContext = React.createContext<CartContextType>({
  cart: [],
  cartOpen: false,
  totalPrice: 0,
  openCartHandler: () => {},
  closeCartHandler: () => {},
  toggleCartHandler: () => {},
  addToCartHandler: () => {},
  removeFromCartHandler: () => {},
});

export function useCartContext() {
  return useContext(CartContext);
}
const CartContextProvider = (props: any) => {
  const [cart, setCart] = useState<CartInterface[]>([
    {
      book: {
        _id: "a7d51b369e164a79bc2f3421a5f1a8af",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        trending: true,
        newRelease: false,
        categories: ["Non-Fiction", "Business"],
        img: "/img/book2.jpg",
        description: "A story of the decadence and excesses of the Jazz Age.",
        publicationDate: "April 10, 1925",
        ISBN: "978-0-7432-7356-5",
        dimension: "5.2 x 0.6 x 7.9 inches",
        weight: 8.8,
        language: "English",
        publisher: "Scribner",
      },
      quantity: 1,
    },
  ]);

  const [cartOpen, setCartOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCartHandler = (item: BookInterface) => {
    setCart((prevCart) => {
      const existingBook = prevCart.findIndex((el) => {
        return el.book._id === item._id;
      });

      if (existingBook !== -1) {
        const newCart = [...prevCart];
        newCart[existingBook].quantity++;
        return newCart;
      } else {
        const newCartItem = {
          book: item,
          quantity: 1,
        };
        return [...prevCart, newCartItem];
      }
    });
  };

  const removeFromCartHandler = (id: string) => {
    setCart((prevCart) => {
      const bookIndex = prevCart.findIndex((el) => el.book._id === id);
      const newCart = [...prevCart];
      newCart.splice(bookIndex, 1);
      return newCart;
    });
  };

  const openCartHandler = () => {
    setCartOpen(true);
  };
  const closeCartHandler = () => {
    setCartOpen(false);
  };
  const toggleCartHandler = () => {
    setCartOpen((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    let sum = 0;

    cart.forEach((el) => {
      const singlePrice = el.book.price * el.quantity;
      sum += singlePrice;
    });

    sum = +sum.toFixed(2);
    setTotalPrice(sum);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        totalPrice,
        openCartHandler,
        closeCartHandler,
        toggleCartHandler,
        addToCartHandler,
        removeFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
