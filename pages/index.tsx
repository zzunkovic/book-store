import { Inter } from "next/font/google";
import SliderComponent from "@/components/SliderComponent";
import SliderItem1 from "@/components/SliderItemHero";
import SliderItem2 from "@/components/SliderItemHero2";
import SliderItem3 from "@/components/SliderItemHero3";
import BrowseCategories from "@/components/BrowseCategories";
import TrendingBooks from "@/components/TrendingBooks";
import NewReleases from "@/components/NewReleases";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useMediaQuery } from "react-responsive";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width:700px)" });

  return (
    <>
      <div className="  max-w-section mx-auto  mb-40 px-8">
        <SliderComponent
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          dots={true}
          adaptiveHeight={true}
        >
          <SliderItem1
            image={`${
              isMobile
                ? "/img/Home-Slider-1-mobile.jpg"
                : "/img/Home-Slider-1.jpg"
            }`}
          ></SliderItem1>
          <SliderItem2
            image={`${
              isMobile
                ? "/img/Home-Slider-2-mobile.jpg"
                : "/img/Home-Slider-2.jpg"
            }`}
          ></SliderItem2>
          <SliderItem3
            image={`${
              isMobile
                ? "/img/Home-Slider-3-mobile.jpg"
                : "/img/Home-Slider-3.jpg"
            }`}
          ></SliderItem3>

          {/* <SliderItem2 image="/img/Home-Slider-2.jpg"></SliderItem2>
          <SliderItem3 image="/img/Home-Slider-3.jpg"></SliderItem3> */}
        </SliderComponent>
      </div>
      <BrowseCategories></BrowseCategories>
      <TrendingBooks></TrendingBooks>
      <NewReleases></NewReleases>
      <WhyChooseUs></WhyChooseUs>
    </>
  );
}
