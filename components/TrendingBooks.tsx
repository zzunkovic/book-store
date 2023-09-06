import SliderComponent from "./SliderComponent";
import SliderItemBook from "./SliderItemBook";
import HomeBookItem from "./HomeBookItem";
import { useEffect, useState } from "react";
import BookInterface from "@/models/BookInterface";

const TrendingBooks: React.FC = () => {
  const [books, setBooks] = useState<BookInterface[]>();

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
    <section className="max-w-section mx-auto mb-32">
      <h2 className="text-center text-4xl font-bold mb-16">Trending Books</h2>
      <SliderComponent
        speed={500}
        slidesToShow={5}
        slidesToScroll={3}
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
