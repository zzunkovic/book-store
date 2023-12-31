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
  This element contains a link that leads to the product page. It is a part of TrendingBooks and NewReleases where it is rendered inside a slider

*/

const HomeBookItem: React.FC<BookSearchItemProps> = ({
  img,
  title,
  author,
  price,
  id,
}) => {
  const slug = slugify(title + " " + author + " " + id);

  return (
    <Link href={`/products/${slug}`} className="">
      <div className="py-4 px-4  rounded-xl  hover:bg-black/10 duration-300 transition-all">
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
        <p className="text-center mb-2  text-">{author}</p>
        <p className="text-center text-lg">{price}$</p>
      </div>
    </Link>
  );
};

export default HomeBookItem;
