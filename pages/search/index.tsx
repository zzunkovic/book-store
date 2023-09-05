import { FormEvent, useEffect, useRef, useState } from "react";
import BookSearchItem from "@/components/BookSearchItem";

interface BookSearchItemInterface {
  title: string;
  author: string;
  price: number;
  _id: string;
  img: string;
}

const SearchPage: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchString, setSearchString] = useState<string | undefined>("");
  const [searchedBooks, setSearchedBooks] =
    useState<BookSearchItemInterface[]>();

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    setSearchString(inputRef.current?.value);
  };

  useEffect(() => {
    async function fetchData() {
      if (searchString === "") return;
      const searchStringJSON = JSON.stringify(searchString);
      try {
        const res = await fetch("/api/books/getBookSearch", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: searchStringJSON,
        });
        const data = await res.json();
        setSearchedBooks([...data.data.books]);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [searchString]);

  return (
    <section className="max-w-section mx-auto  min-h-screen">
      <h2 className="font-bold text-5xl text-center mt-2 mb-16">Book Search</h2>
      <form className="mb-24" onSubmit={onSubmitHandler}>
        <div className="flex">
          <input
            type="text"
            className="w-full border-2 rounded-2xl rounded-r-none p-2 focus:outline-none"
            placeholder="Search for titles, authors, categories.."
            ref={inputRef}
          ></input>
          <button
            type="submit"
            className="bg-black text-white px-4 rounded-r-2xl hover:bg-black/90"
          >
            Search
          </button>
        </div>
      </form>
      <div className="grid grid-cols-4 gap-4">
        {searchedBooks?.map((el) => {
          return (
            <BookSearchItem
              img={el.img}
              title={el.title}
              author={el.author}
              price={el.price}
              id={el._id}
              key={el._id}
            ></BookSearchItem>
          );
        })}
      </div>
    </section>
  );
};

export default SearchPage;
