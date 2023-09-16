import { useRouter } from "next/router";
import BookSearchItem from "@/components/BookSearchItem";
import { useState, useRef, useEffect, FormEvent } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

const allCategories: any = {
  Fiction: [
    "Adventure",
    "Crime",
    "Mystery",
    "Thriller",
    "Graphic Novels",
    "Romance",
    "Fantasy",
    "Science Fiction",
  ],
  "Non-Fiction": [
    "Art",
    "Biography",
    "Business",
    "Computing",
    "Health&Lifestyle",
    "History",
    "Philosophy",
    "Music",
    "Sport",
    "Travel",
  ],
  Children: ["Activities", "Comics", "Early Learning", "Picture Books"],
  Education: ["Geography", "Languages", "Mathematics", "Medical", "Technology"],
};

const BOOKS_PER_PAGE = 15;

const BookSearchDisplay: React.FC = () => {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [filterOptions, setFilterOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (
      router.query.category === "Fiction" ||
      router.query.category === "Non-Fiction" ||
      router.query.category === "Children" ||
      router.query.category === "Education"
    )
      setCategory(router.query.category as string);
    else {
      router.replace("/404");
    }
  }, [router.query.category, router]);

  const pageInputRef = useRef<HTMLInputElement>(null);

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [pageNum, setPageNum] = useState(0);

  const [inputPageNum, setInputPageNum] = useState(pageNum + 1);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const categoryJSON = JSON.stringify(category);

      try {
        const res = await fetch("/api/books/getCategory", {
          method: "POST",
          headers: {
            "Content-Type": "application/JSON",
          },
          body: categoryJSON,
        });
        const data = await res.json();
        console.log("💢💌💢💌", data.data.books);
        setBooks(data.data.books);
        setFilteredBooks(data.data.books);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [category]);

  const maxPages = Math.trunc(filteredBooks?.length / BOOKS_PER_PAGE) + 1;

  interface SortOptions {
    sortParam: "none" | "title" | "price" | "publicationDate";
    asc: boolean;
  }

  const [sortOptions, setSortOptions] = useState<SortOptions>({
    sortParam: "none",
    asc: true,
  });

  function pageSelectHandler(e: React.FormEvent) {
    e.preventDefault();
    const enteredPage = +pageInputRef.current!.value;
    if (enteredPage > maxPages || enteredPage < 1) return;
    setPageNum(enteredPage - 1);
    setInputPageNum(enteredPage);
  }

  function pageincrementHandler() {
    if (pageNum === maxPages - 1) return;
    setPageNum((prevPage) => {
      return prevPage + 1;
    });
    setInputPageNum((prevInput) => {
      return prevInput + 1;
    });
  }

  function pageDecrementHandler() {
    if (pageNum === 0) return;
    setPageNum((prevPage) => {
      return prevPage - 1;
    });
    setInputPageNum((prevInput) => {
      return prevInput - 1;
    });
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputPageNum(+e.target.value);
  }

  function sortChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    const sortMethod = e.target.value;
    setPageNum(0);
    setInputPageNum(1);
    switch (sortMethod) {
      case "none":
        setSortOptions({ sortParam: "none", asc: true });
        break;

      case "priceHtl":
        setSortOptions({ sortParam: "price", asc: false });
        break;
      case "priceLth":
        setSortOptions({ sortParam: "price", asc: true });
        break;
      case "titleAtz":
        setSortOptions({ sortParam: "title", asc: true });
        break;
      case "titleZta":
        setSortOptions({ sortParam: "title", asc: false });
        break;
      case "pubDateNto":
        setSortOptions({ sortParam: "publicationDate", asc: false });
        break;
      case "pubDateOtn":
        setSortOptions({ sortParam: "publicationDate", asc: true });
        break;
    }
  }

  function sortBooks(param: string, asc: boolean, booksArray: Array<any>) {
    // console.log(booksArray);
    const sortedBooks = [...booksArray];
    const sortParam = param;

    if (sortParam === "price") {
      sortedBooks.sort((a, b) => {
        return asc ? a[sortParam] - b[sortParam] : b[sortParam] - a[sortParam];
      });

      return [...sortedBooks];
    }

    if (sortParam === "title") {
      sortedBooks.sort((a, b) => {
        return asc
          ? a[sortParam].localeCompare(b[sortParam])
          : b[sortParam].localeCompare(a[sortParam]);
      });
      return [...sortedBooks];
    }

    if (sortParam === "publicationDate") {
      sortedBooks.sort((a, b) => {
        const dateA = new Date(a[sortParam]).getTime();
        const dateB = new Date(b[sortParam]).getTime();

        return asc ? dateA - dateB : dateB - dateA;
      });
      return [...sortedBooks];
    }
    if (sortParam === "none") {
      return [...sortedBooks];
    }
  }

  const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target;

    if (value.checked) {
      setFilterOptions((prevOptions) => {
        return [...prevOptions, value.value] as never[];
      });
    } else {
      setFilterOptions((prevOptions) => {
        return prevOptions?.filter((option) => option !== value.value);
      });
    }
  };

  const bookFilter = (books: Array<any>) => {
    let filtered = [...books];

    if (filterOptions.length > 0) {
      filtered = filtered.filter((el) => {
        return filterOptions.includes(el.categories[1] as never);
      });
    }

    console.log(filtered);
    setFilteredBooks(filtered as never[]);
  };

  const checkboxFormSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    bookFilter(books);
    setPageNum(0);
    setInputPageNum(1);
  };

  const sortedBooks = sortBooks(
    sortOptions.sortParam,
    sortOptions.asc,
    filteredBooks
  );

  const slicedBooks = sortedBooks!.slice(
    pageNum * BOOKS_PER_PAGE,
    BOOKS_PER_PAGE + pageNum * BOOKS_PER_PAGE
  );

  const clearFilterHandler = () => {
    setFilterOptions([]);
  };

  return (
    <section className="mb-16 px-8">
      <h2 className="font-bold text-5xl text-center mt-2 mb-32">
        {category} Books
      </h2>
      <div className="flex mb-4 max-[1050px]:flex-col max-[1050px]:gap-8  ">
        <div className="w-64 max-[1050px]:flex max-[1050px]:w-full max-[1050px]:gap-16 max-[780px]:flex-col max-[780px]:gap-2  ">
          <div className="mb-8 ">
            <form>
              <label htmlFor="sort" className="font-bold max-[1050px]:block">
                Sort by:
              </label>
              <select
                id="sort"
                name="sort"
                className="focus:outline-none border-2 rounded-lg mt-2  "
                onChange={sortChangeHandler}
              >
                <option value="none">none</option>
                <option value="priceHtl">Price - High to Low</option>
                <option value="priceLth">Price - Low to High</option>
                <option value="titleAtz">Title - A to Z</option>
                <option value="titleZta">Title - Z to A</option>

                <option value="pubDateNto">
                  Publication Date - New to Old
                </option>
                <option value="pubDateOtn">
                  Publication Date - Old to New
                </option>
              </select>
            </form>
          </div>
          <div>
            <form
              onSubmit={checkboxFormSubmitHandler}
              className="max-[1050px]:flex max-[1050px]:gap-4 max-[630px]:flex-col"
            >
              <h4 className="font-bold">Filter</h4>
              <div className="max-[1050px]:grid max-[1050px]:grid-cols-3 max-[1050px]:gap-4 max-[950px]:grid-cols-2 max-[780px]:grid-cols-3 max-[630px]:grid-cols-1   ">
                {" "}
                {allCategories[category]?.map((subCat: string) => {
                  const isChecked = filterOptions.includes(subCat as never);
                  return (
                    <div key={subCat} className="flex items-center">
                      <input
                        className="mr-2 h-4 w-4  rounded-full text-blue-500"
                        type="checkbox"
                        id={subCat}
                        value={subCat}
                        checked={isChecked}
                        onChange={checkboxChangeHandler}
                      ></input>
                      <label className="whitespace-nowrap" htmlFor={subCat}>
                        {subCat}
                      </label>
                    </div>
                  );
                })}
              </div>

              <button
                type="submit"
                className="text-white font-bold bg-black px-4 py-2  mt-2 max-[1050px]:self-start "
              >
                Filter
              </button>
              <button
                type="button"
                className="ml-4"
                onClick={clearFilterHandler}
              >
                Clear Filters
              </button>
            </form>
          </div>
        </div>
        {isLoading ? (
          <div className="flex-grow">
            <LoadingSpinner fullscreen={false}></LoadingSpinner>
          </div>
        ) : (
          <div className=" flex-1 grid grid-cols-5 gap-4 max-[1500px]:grid-cols-3 max-[630px]:grid-cols-2 max-[470px]:grid-cols-1 ">
            {slicedBooks!.map((el) => {
              return (
                <BookSearchItem
                  author={el.author}
                  title={el.title}
                  key={el._id}
                  price={el.price}
                  id={el._id}
                  img={el.img}
                ></BookSearchItem>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex justify-end ">
        <button onClick={pageDecrementHandler} className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 320 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </button>
        Page
        <form onSubmit={pageSelectHandler} className="mx-2">
          <input
            ref={pageInputRef}
            className="border-2 w-10 focus:outline-none px-2 text-center"
            value={inputPageNum}
            onChange={onChangeHandler}
            placeholder="1"
          ></input>
        </form>
        of {maxPages}
        <button onClick={pageincrementHandler} className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default BookSearchDisplay;
