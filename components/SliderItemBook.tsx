import Image from "next/image";

interface SliderItemTrendingProps {
  name: string;
  img: string;
  author: string;
  price: number;
}

const SliderItemBook: React.FC<SliderItemTrendingProps> = ({
  name,
  img,
  author,
  price,
}) => {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          className="mb-4 h-48 w-auto"
          src={img}
          alt={name}
          width={100}
          height={100}
        ></Image>
      </div>

      <p className="font-bold text-center">{name}</p>
      <p className="text-center">{author}</p>
      <p className="text-center">{price}$</p>
    </div>
  );
};

export default SliderItemBook;
