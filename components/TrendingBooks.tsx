import SliderComponent from "./SliderComponent";
import SliderItemBook from "./SliderItemBook";
import HomeBookItem from "./HomeBookItem";
import { useEffect, useState } from "react";
import BookInterface from "@/models/BookInterface";
import { useMediaQuery } from "react-responsive";

const TrendingBooks: React.FC = () => {
  const [books, setBooks] = useState<BookInterface[]>();

  const isMobile = useMediaQuery({ query: "(max-width:800px)" });
  const isMobileXS = useMediaQuery({ query: "(max-width:450px)" });

  console.log(books);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/books/getTrendingBooks");
        const data = await res.json();
        console.log(data);
        setBooks([...data.data.books]);
      } catch (err) {}
    }

    fetchData();
  }, []);

  return (
    <section className="max-w-section mx-auto mb-32 px-8">
      <h2 className="text-center text-4xl font-bold mb-16">Trending Books</h2>
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
              img={el.img}
              title={el.title}
              author={el.author}
              price={el.price}
              id={el._id}
              key={el._id}
            ></HomeBookItem>
          );
        })}
      </SliderComponent>
    </section>
  );
};

export default TrendingBooks;
