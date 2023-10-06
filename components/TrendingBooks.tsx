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
  const [showError, setShowError] = useState({
    display: false,
    message: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/books/getTrendingBooks");
        const data = await res.json();
        if (!res.ok) throw new Error("Failed to fetch data");
        setBooks([...data.data.books]);
      } catch (err) {
        console.error(err);
        setShowError({
          display: true,
          message: "Something went wrong while fetching the data.",
        });
      }
    }

    fetchData();
  }, []);

  return (
    <section className="max-w-section mx-auto mb-48 px-8">
      <h2 className="text-4xl font-bold mb-8 max-[980px]:text-2xl max-[980px]:mb-4 ">
        Trending Books
      </h2>
      {showError.display ? (
        <div className="text-center">{showError.message}</div>
      ) : (
        <SliderComponent
          speed={500}
          slidesToShow={isMobile ? 2 : 5}
          slidesToScroll={isMobile ? 2 : 5}
          dots={true}
          adaptiveHeight={false}
          arrows={false}
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
      )}
    </section>
  );
};

export default TrendingBooks;
