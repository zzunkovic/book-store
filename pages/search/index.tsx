import { FormEvent, useEffect, useRef, useState } from "react";
import BookSearchItem from "@/components/BookSearchItem";
import LoadingSpinner from "@/components/LoadingSpinner";

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

  const [noResultsFound, setNoResultsFound] = useState(true);
  const [showError, setShowError] = useState({
    display: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    setSearchString(inputRef.current?.value);
  };

  useEffect(() => {
    async function fetchData() {
      if (searchString === "") return;
      const searchStringJSON = JSON.stringify(searchString);
      try {
        setIsLoading(true);
        const res = await fetch("/api/books/getBookSearch", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: searchStringJSON,
        });
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();

        if (data.data.books.length === 0) {
          setNoResultsFound(true);
        } else {
          setNoResultsFound(false);
        }

        setSearchedBooks([...data.data.books]);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setShowError({
          display: true,
          message: "Something went wring while fetching data",
        });
      }
    }

    fetchData();
  }, [searchString]);

  return (
    <section className="max-w-section mx-auto  min-h-screen px-8">
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
            className="bg-black text-white px-4 rounded-r-2xl font-bold hover:bg-black/90"
          >
            Search
          </button>
        </div>
      </form>
      {isLoading ? (
        <div className="">
          {" "}
          <LoadingSpinner fullscreen={false}></LoadingSpinner>
        </div>
      ) : showError.display ? (
        <div className="text-center text-xl">{showError.message}</div>
      ) : noResultsFound ? (
        <div className="text-center text-xl">No results found.</div>
      ) : (
        <div className="grid grid-cols-4 gap-4 max-[1050px]:grid-cols-3 max-[700px]:grid-cols-2 max-[550px]:grid-cols-1">
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
      )}
    </section>
  );
};

export default SearchPage;
