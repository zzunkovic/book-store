import Link from "next/link";
import Image from "next/image";
interface CategoryItemProps {
  name: string;
  img: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, img }) => {
  return (
    <Link className=" overflow-hidden" href={`/${name}`}>
      <div className="relative h-full z-20">
        <div className="absolute z-10 bg-gradient-to-b from-black/50 from-[1%] to-transparent w-full h-full  hover:from-black/20 "></div>
        <div className="drop-shadow-xl text-white text-4xl font-bold absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
          {name}
        </div>
        <Image
          src={img}
          alt={name}
          width={500}
          height={1000}
          className="  object-cover h-full"
        ></Image>
      </div>
    </Link>
  );
};

export default CategoryItem;
