import Link from "next/link";
import Image from "next/image";
interface CategoryItemProps {
  name: string;
  img: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, img }) => {
  return (
    <Link className=" overflow-hidden" href={`/${name}`}>
      <div className="relative h-full z-20 border-b-2 border-gray-900 rounded-xl overflow-hidden">
        <div className="absolute z-10 bg-gradient-to-b from-black/10 from-[1%] to-black/80 w-full h-full  hover:from-transparent hover:from-[1%] hover:to-black/50 "></div>
        <div className="drop-shadow-xl  w-full  text-white text-center text-2xl   font-semibold py-4 absolute bottom-0  left-1/2 -translate-x-1/2 whitespace-nowrap z-20 max-[980px]:text-lg">
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
