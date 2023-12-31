import Link from "next/link";
import CartItem from "./CartItem";
import { useCartContext } from "@/store/CartContext";
import styles from "../styles/scrollbar.module.css";

/*
Contains items that are currently in the shopping cart context. Also contains a link that leads to the checkout page but is only available when there are actually products inside of the cart

*/

const ShoppingCart: React.FC = () => {
  const { cart, cartOpen, closeCartHandler, totalPrice } = useCartContext();

  return (
    //if the cartOpen value is set to true, then display the cart, otherwise move it off the screen
    <div
      className={` fixed  z-50 right-0 bg-white text-white  w-96 top-0 pt-16 h-full   transition-all  duration-300 max-[500px]:w-80 ${
        cartOpen ? "" : " translate-x-[100%]"
      } shadow-md`}
    >
      <h2 className="font-bold text-xl text-center mt-4 mb-4 text-black">
        Shopping Cart
      </h2>
      <div className="flex flex-col h-full justify-between px-4 ">
        <div className={` overflow-y-scroll h-full ${styles.element}  `}>
          {cart.map((el) => {
            return (
              <CartItem
                key={el.book._id}
                title={el.book.title}
                author={el.book.author}
                img={el.book.img}
                id={el.book._id}
                price={el.book.price}
                quantity={el.quantity}
              ></CartItem>
            );
          })}
        </div>
        <div className="pb-16 pt-8">
          <div className="flex justify-between items-center">
            <p className=" text-black">Total Price</p>
            <div className="text-black mr-4 font-bold text-xl">
              ${totalPrice}
            </div>
          </div>
          {/* prevents user from being able to click the button if the cart is empty */}
          <Link
            href="/checkout"
            className={`text-white bg-black p-2 font-bold block text-center rounded-xl hover:bg-black/90 transition-all duration-300 mt-4  ${
              cart.length === 0 ? "pointer-events-none bg-black/50" : ""
            }`}
            onClick={closeCartHandler}
          >
            Go to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
