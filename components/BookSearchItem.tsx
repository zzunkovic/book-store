import Image from "next/image";
import Link from "next/link";

import slugify from "slugify";

interface BookSearchItemProps {
  img: string;
  title: string;
  author: string;
  price: number;
  id: string;
}

/*

Displays an item that is found by fetching the data through a user query provided at the serach page.
Links to the product page.


*/

const BookSearchItem: React.FC<BookSearchItemProps> = ({
  img,
  title,
  author,
  price,
  id,
}) => {
  const slug = slugify(title + " " + author + " " + id);

  return (
    <Link href={`/products/${slug}`} className="">
      <div className=" border-2 py-4 px-4 rounded-xl h-full hover:bg-black/10 duration-300 transition-all">
        <div className="mb-4 flex justify-center">
          <Image
            className="h-36 w-auto"
            src={img}
            alt={title}
            width={100}
            height={200}
          ></Image>
        </div>
        <p className="font-bold text-lg text-center">{title}</p>
        <p className="text-center mb-2">{author}</p>
        <p className="text-center text-lg">{price}$</p>
      </div>
    </Link>
  );
};

export default BookSearchItem;
