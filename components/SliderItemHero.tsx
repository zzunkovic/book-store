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
  const isMobile = useMediaQuery({ query: "(max-width:700px)" });
  return (
    <div className="  relative">
      {
        <Image
          src={image}
          alt="Promotion"
          width={isMobile ? 626 : 1280}
          height={isMobile ? 702 : 480}
        ></Image>
      }
      <Link
        className={`absolute whitespace-nowrap text-3xl max-[509px]:text-base max-[400px]:text-sm  top-[75%] left-[65%] uppercase px-8 py-4 font-bold rounded-xl bg-white text-black ${
          LibreFranklin.className
        } max-[980px]:text-2xl ${
          isMobile
            ? "top-[30%] translate-y-[-280%] left-[60%] translate-x-[-70%] max-[475px]:translate-y-[-240%] max-[400px]:translate-y-[-190%]"
            : ""
        }`}
        href="/search"
      >
        Search Books
      </Link>
    </div>
  );
};

export default SliderItem1;
