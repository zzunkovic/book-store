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
  setQuantity: (quantity: number, id: string) => void;
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
  setQuantity: () => {},
  removeFromCartHandler: () => {},
});

export function useCartContext() {
  return useContext(CartContext);
}
const CartContextProvider = (props: any) => {
  const [cart, setCart] = useState<CartInterface[]>([
    {
      book: {
        _id: "6506c4853a92328ff162597a",
        title: "Obstacle is the Way",
        author: "Ryan Holiday",
        price: 12.78,
        trending: true,
        newRelease: false,
        categories: ["Non-Fiction", "Business"],
        img: "https://wordery.com/jackets/299305b8/obstacle-is-the-way-ryan-holiday-9781781251492.jpg?width=261",
        description:
          "A marketing guru and media strategist, Ryan Holiday explores how the Stoic philosophy has helped create some of the most powerful people in the world succeed. Advocating a simple change in attitude, Holiday encourages you to think of adversity as an opportunity, rather than an insurmountable problem. When you accept that giving up is not an option, every challenge becomes a chance to display your ingenuity, courage and dedication, leading to success whatever the situation. With examples ranging from politicians and military leaders to sports stars, celebrities and business tycoons, the Stoic philosophy of self-mastery can turn any problem into a successful solution and completely revolutionise your life.",
        publicationDate: "4 Jun 2015",
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

  const setQuantity = (quantity: number, id: string) => {
    const bookIndex = cart.findIndex((el) => {
      return el.book._id === id;
    });

    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[bookIndex].quantity = quantity;
      return newCart;
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
        setQuantity,
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
