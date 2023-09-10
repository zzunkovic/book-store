import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Libre_Franklin } from "next/font/google";

const LibreFranklin = Libre_Franklin({ weight: "800", subsets: ["latin"] });
interface SliderItemProps {
  image: string;
}

const SliderItem1: React.FC<SliderItemProps> = ({ image }) => {
  return (
    <div className=" h-[30rem] relative">
      {<Image src={image} alt="Promotion" width={1280} height={480}></Image>}
      <Link
        className={`absolute text-3xl top-[75%] left-[65%] uppercase px-8 py-4 font-bold bg-black text-white ${LibreFranklin.className}`}
        href="/search"
      >
        Search Books
      </Link>
    </div>
  );
};

export default SliderItem1;
