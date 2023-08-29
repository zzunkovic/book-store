import Image from "next/image";

interface BookSearchItemProps {
  img: string;
  title: string;
  author: string;
  price: number;
}

const BookSearchItem: React.FC<BookSearchItemProps> = ({
  img,
  title,
  author,
  price,
}) => {
  return (
    <div className=" border-2 py-4 px-4 rounded-xl">
      <div className="mb-4 flex justify-center">
        <Image
          src="/img/book2.jpg"
          alt={title}
          width={100}
          height={200}
        ></Image>
      </div>
      <p className="font-bold text-lg text-center">{title}</p>
      <p className="text-center mb-2">{author}</p>
      <p className="text-center text-lg">{price}$</p>
    </div>
  );
};

export default BookSearchItem;
