import Image from "next/image";
import { Inter } from "next/font/google";
import SliderComponent from "@/components/SliderComponent";
import SliderItemHero from "@/components/SliderItemHero";
import BrowseCategories from "@/components/BrowseCategories";
import TrendingBooks from "@/components/TrendingBooks";
import NewReleases from "@/components/NewReleases";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="  max-w-section mx-auto  bg-slate-400 mb-16">
        <SliderComponent
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          dots={true}
        >
          <SliderItemHero text="1"></SliderItemHero>
          <SliderItemHero text="2"></SliderItemHero>
          <SliderItemHero text="3"></SliderItemHero>
        </SliderComponent>
      </div>
      <BrowseCategories></BrowseCategories>
      <TrendingBooks></TrendingBooks>
      <NewReleases></NewReleases>
    </>
  );
}
