import React from "react";
import Slider from "react-slick";

interface SliderComponentProps {
  children: React.ReactNode;
  slidesToShow: number;
  speed: number;
  slidesToScroll: number;
  dots: boolean;
  adaptiveHeight: boolean;
}

const SliderComponent: React.FC<SliderComponentProps> = ({
  children,
  slidesToShow,
  speed,
  slidesToScroll,
  dots,
  adaptiveHeight,
}) => {
  const settings = {
    dots: dots,
    adaptiveHeight: adaptiveHeight,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrow: true,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default SliderComponent;
