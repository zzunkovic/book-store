import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Libre_Baskerville } from "next/font/google";
import { useMediaQuery } from "react-responsive";

const Libre = Libre_Baskerville({ weight: "400", subsets: ["latin"] });

interface SliderItemProps {
  image: string;
}

const SliderItem3: React.FC<SliderItemProps> = ({ image }) => {
  const isMobile = useMediaQuery({ query: "(max-width:700px)" });
  return (
    <div className="  relative">
      {<Image src={image} alt="Promotion" width={1280} height={480}></Image>}
      <Link
        className={`absolute text-xl bottom-[10%] left-[15%]  px-4 py-2  bg-white  text-red-400  font-serif ${
          Libre.className
        } ${
          isMobile
            ? "max-[700px]:left-[43%] max-[550px]:left-[40%] max-[450px]:left-[35%] max-[390px]:left-[32%]"
            : ""
        }`}
        href="/products/Tell-Me-a-Story-Ravinder-Singh-64fda7e2d7368c46bec0bc1b"
      >
        Buy Now
      </Link>
    </div>
  );
};

export default SliderItem3;
