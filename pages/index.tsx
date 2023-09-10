import { Inter } from "next/font/google";
import SliderComponent from "@/components/SliderComponent";
import SliderItem1 from "@/components/SliderItemHero";
import SliderItem2 from "@/components/SliderItemHero2";
import SliderItem3 from "@/components/SliderItemHero3";
import BrowseCategories from "@/components/BrowseCategories";
import TrendingBooks from "@/components/TrendingBooks";
import NewReleases from "@/components/NewReleases";
import WhyChooseUs from "@/components/WhyChooseUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="  max-w-section mx-auto  bg-slate-400 mb-24">
        <SliderComponent
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          dots={true}
          adaptiveHeight={true}
        >
          <SliderItem2 image="/img/Home-Slider-2.jpg"></SliderItem2>
          <SliderItem1 image="/img/Home-Slider-1.jpg"></SliderItem1>
          <SliderItem3 image="/img/Home-Slider-3.jpg"></SliderItem3>
        </SliderComponent>
      </div>
      <BrowseCategories></BrowseCategories>
      <TrendingBooks></TrendingBooks>
      <NewReleases></NewReleases>
      <WhyChooseUs></WhyChooseUs>
    </>
  );
}
