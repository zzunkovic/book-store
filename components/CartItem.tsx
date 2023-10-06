import Link from "next/link";
import Image from "next/image";
import { useCartContext } from "@/store/CartContext";
import slugify from "slugify";
interface CartItemProps {
  id: string;
  title: string;
  author: string;
  price: number;
  img: string;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  author,
  price,
  img,
  quantity,
}) => {
  const { removeFromCartHandler } = useCartContext();

  const removeOnClickHandler = () => {
    removeFromCartHandler(id);
  };
  const slug = slugify(title + " " + author + " " + id);
  return (
    <div className="flex justify-between">
      <Link
        href={`/products/${slug}`}
        className="flex-grow hover:bg-black/5 duration-300 transition-all"
      >
        <div className=" text-black mb-2 px-4 mx-2 py-2 rounded-md flex gap-4 w-full">
          <Image
            className="w-12 h-auto"
            alt={title}
            src={img}
            width={50}
            height={100}
          ></Image>
          <div className="w-full">
            <div className="">{title}</div>

            <p className="font-bold text-xl">${price}</p>
            <div>x{quantity}</div>
          </div>
        </div>
      </Link>
      <div className="flex items-center w-10 ">
        <button
          onClick={removeOnClickHandler}
          className=" h-full  w-full  flex justify-center items-center hover:bg-black/5 duration-300 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-black"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
