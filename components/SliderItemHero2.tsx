import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Libre_Franklin } from "next/font/google";

const LibreFranklin = Libre_Franklin({ weight: "800", subsets: ["latin"] });

interface SliderItemProps {
  image: string;
}

const SliderItem2: React.FC<SliderItemProps> = ({ image }) => {
  return (
    <div className=" h-[30rem] relative">
      {<Image src={image} alt="Promotion" width={1280} height={480}></Image>}
      <Link
        className={`absolute text-xl top-[50%] left-[50%] translate-x-[-50%] uppercase px-4 py-2 font-bold bg-black text-white ${LibreFranklin.className}`}
        href="/products/The-Witcher-The-Last-Wish-Andrzej-Sapkowski-64fda29ad7368c46bec0bc19"
      >
        Buy Now
      </Link>
    </div>
  );
};

export default SliderItem2;
