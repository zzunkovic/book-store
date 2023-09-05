import Link from "next/link";
import Image from "next/image";

interface CartItemProps {
  id: string;
  title: string;
  author: string;
  price: number;
  img: string;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  author,
  price,
  img,
}) => {
  console.log(title, price, img);

  return (
    <Link href="#">
      <div className="bg-white border-2 text-black mb-2 px-4 py-2 rounded-md flex gap-4">
        <Image
          className="w-16"
          alt={title}
          src={img}
          width={50}
          height={100}
        ></Image>
        <div>
          <p className="font-bold">{title}</p>
          <p>${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default CartItem;
