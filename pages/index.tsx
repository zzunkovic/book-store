import SliderComponent from "@/components/SliderComponent";
import SliderItem1 from "@/components/SliderItemHero";
import SliderItem2 from "@/components/SliderItemHero2";
import SliderItem3 from "@/components/SliderItemHero3";
import BrowseCategories from "@/components/BrowseCategories";
import TrendingBooks from "@/components/TrendingBooks";
import NewReleases from "@/components/NewReleases";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useMediaQuery } from "react-responsive";

/*
  Renders the home page
*/

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width:700px)" });

  return (
    <>
      <div className="px-4 pb-10 max-[980px]:mt-6 ">
        <div className="  max-w-section mx-auto border-b-4  mb-40 border-black max-[980px]:mb-12   rounded-xl overflow-hidden   ">
          <SliderComponent
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            dots={true}
            adaptiveHeight={true}
            arrows={true}
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
      </div>
      <BrowseCategories></BrowseCategories>
      <TrendingBooks></TrendingBooks>
      <NewReleases></NewReleases>
      <WhyChooseUs></WhyChooseUs>
    </>
  );
}
