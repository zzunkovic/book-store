import HomeBookItem from "./HomeBookItem";
import SliderComponent from "./SliderComponent";
import BookInterface from "@/models/BookInterface";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const NewReleases: React.FC = () => {
  const [books, setBooks] = useState<BookInterface[]>();

  const isMobile = useMediaQuery({ query: "(max-width:800px)" });
  const [showError, setShowError] = useState({
    display: false,
    message: "",
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/books/getNewReleases");

        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();

        setBooks(data.data.books);
      } catch (err) {
        console.error(err);
        setShowError({
          display: true,
          message: "Something went wrong while fetching the data.",
        });
      }
    }

    fetchData();
  });

  return (
    <section className="max-w-section mx-auto mb-48 px-8">
      <h2 className="text-4xl font-bold mb-8 max-[980px]:text-2xl max-[980px]:mb-4">
        New Releases
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
      )}
    </section>
  );
};

export default NewReleases;
