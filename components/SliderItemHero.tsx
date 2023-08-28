import React from "react";
import Image from "next/image";

interface SliderItemProps {
  text: string;
}

const SliderItem: React.FC<SliderItemProps> = ({ text }) => {
  return <div className=" h-[30rem]  text-center">{text}</div>;
};

export default SliderItem;
