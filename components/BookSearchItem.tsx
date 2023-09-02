import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import slugify from "slugify";

interface BookSearchItemProps {
  img: string;
  title: string;
  author: string;
  price: number;
  id: string;
}

const BookSearchItem: React.FC<BookSearchItemProps> = ({
  img,
  title,
  author,
  price,
  id,
}) => {
  const slug = slugify(title + " " + author + " " + id);

  return (
    <Link href={`/products/${slug}`}>
      <div className=" border-2 py-4 px-4 rounded-xl h-full">
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
