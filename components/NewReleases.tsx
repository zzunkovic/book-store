import HomeBookItem from "./HomeBookItem";
import SliderComponent from "./SliderComponent";
import BookInterface from "@/models/BookInterface";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const NewReleases: React.FC = () => {
  const [books, setBooks] = useState<BookInterface[]>();

  const isMobile = useMediaQuery({ query: "(max-width:800px)" });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/books/getNewReleases");
        const data = await res.json();

        setBooks(data.data.books);
      } catch (err) {}
    }

    fetchData();
  });

  return (
    <section className="max-w-section mx-auto mb-32">
      <h2 className="text-center text-4xl font-bold mb-16">New Releases</h2>
      <SliderComponent
        speed={500}
        slidesToShow={isMobile ? 2 : 5}
        slidesToScroll={isMobile ? 2 : 5}
        dots={true}
        adaptiveHeight={false}
      >
        {books?.map((el) => {
          return (
            <HomeBookItem
              key={el._id}
              img={el.img}
              author={el.author}
              title={el.title}
              price={el.price}
              id={el._id}
            ></HomeBookItem>
          );
        })}
      </SliderComponent>
    </section>
  );
};

export default NewReleases;
