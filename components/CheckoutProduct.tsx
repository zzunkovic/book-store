import Image from "next/image";
import { useCartContext } from "@/store/CartContext";
import React from "react";

interface CheckoutPageProps {
  id: string;
  title: string;
  author: string;
  price: number;
  quantity: number;
  img: string;
}

const CheckoutProduct: React.FC<CheckoutPageProps> = ({
  id,
  title,
  author,
  price,
  quantity,
  img,
}) => {
  const { setQuantity, removeFromCartHandler } = useCartContext();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const qty = +e.target.value;
    setQuantity(qty, id);
  };

  const removeItemHandler = () => {
    removeFromCartHandler(id);
  };

  return (
    <div className="flex gap-4 border-[1px] py-4 px-8 w-full max-[700px]:flex-col max-[700px]: items-center">
      <div>
        <Image
          src={img}
          alt={title}
          width={500}
          height={1000}
          className="w-16"
        ></Image>
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="mb-2">{author}</p>
        <p className="text-2xl">${price}</p>
      </div>
      <div className="ml-auto flex gap-2  items-center max-[700px]:ml-0">
        <div className="inline-block mr-2 font-semibold">Quantity</div>
        <input
          className="w-[5ch] h-8 text-center focus:outline-none border-[1px]"
          type="number"
          value={quantity}
          onChange={inputChangeHandler}
          max="99"
          min="1"
        ></input>
        <button
          onClick={removeItemHandler}
          className="inline-block bg-red-500 hover:bg-red-500/90 p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 fill-white"
            viewBox="0 0 448 512"
          >
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
