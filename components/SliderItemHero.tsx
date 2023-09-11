import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Libre_Franklin } from "next/font/google";

const LibreFranklin = Libre_Franklin({ weight: "800", subsets: ["latin"] });
interface SliderItemProps {
  image: string;
}

const SliderItem1: React.FC<SliderItemProps> = ({ image }) => {
  const isMobile = useMediaQuery({ query: "(max-width:800px)" });
  return (
    <div className="  relative">
      {<Image src={image} alt="Promotion" width={1280} height={480}></Image>}
      <Link
        className={`absolute whitespace-nowrap text-3xl top-[75%] left-[65%] uppercase px-8 py-4 font-bold bg-black text-white ${
          LibreFranklin.className
        } max-[980px]:text-2xl ${
          isMobile ? "top-[30%] translate-y-[-230%] left-[20%]" : ""
        }`}
        href="/search"
      >
        Search Books
      </Link>
    </div>
  );
};

export default SliderItem1;
