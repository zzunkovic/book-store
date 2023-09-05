import Link from "next/link";
import CartItem from "./CartItem";
import { useCartContext } from "@/store/CartContext";

const ShoppingCart: React.FC = () => {
  const { cart } = useCartContext();

  console.log("💚💚", cart);

  return (
    <div className=" fixed  z-50 right-0 bg-black text-white  w-96 top-0 pt-16 h-full">
      <h2 className="font-bold text-xl text-center mt-4 mb-4">Shopping Cart</h2>
      <div className="flex flex-col h-full justify-between px-2 ">
        <div className=" overflow-y-scroll h-full">
          {cart.map((el) => {
            return (
              <CartItem
                key={el._id}
                title={el.title}
                author={el.author}
                img={el.img}
                id={el._id}
                price={el.price}
              ></CartItem>
            );
          })}
        </div>
        <div className="pb-16 pt-8">
          <p className="font-bold mb-4">Total Price</p>

          <Link
            href="#"
            className="text-black bg-white p-2 font-bold block text-center "
          >
            Go to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
