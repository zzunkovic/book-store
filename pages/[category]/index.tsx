import { useRouter } from "next/router";
import BookSearchItem from "@/components/BookSearchItem";
import { useState, useRef } from "react";

const DUMMY_BOOKS = [
  {
    id: "a7d51b369e164a79bc2f3421a5f1a8af",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    trending: true,
    newRelease: false,
    categories: ["Non-Fiction", "Business"],
    img: "",
    description: "A story of the decadence and excesses of the Jazz Age.",
    publicationDate: "April 10, 1925",
    ISBN: "978-0-7432-7356-5",
    dimension: "5.2 x 0.6 x 7.9 inches",
    weight: 8.8,
    language: "English",
    publisher: "Scribner",
  },
  {
    id: "fca0733c735d49f29f950ad442ce0e6e",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 10.95,
    trending: true,
    newRelease: false,
    categories: ["Fiction", "Horror"],
    img: "",
    description: "A gripping novel about racial injustice and moral growth.",
    publicationDate: "July 11, 1960",
    ISBN: "978-0-06-112008-4",
    dimension: "6.1 x 1.1 x 9.3 inches",
    weight: 1.6,
    language: "English",
    publisher: "Harper Perennial Modern Classics",
  },
  {
    id: "9aee0a157389446d97ab8eb0881a450c",
    title: "1984",
    author: "George Orwell",
    price: 9.99,
    trending: true,
    newRelease: false,
    categories: ["Fiction", "Romance"],
    img: "",
    description:
      "A chilling portrayal of a totalitarian society and thought control.",
    publicationDate: "June 8, 1949",
    ISBN: "978-0-452-28423-4",
    dimension: "4.2 x 0.8 x 7.5 inches",
    weight: 7.2,
    language: "English",
    publisher: "Signet Classics",
  },
  {
    id: "d1d987927f0b4b21b0405ea4066007ee2",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 7.99,
    trending: true,
    newRelease: false,
    categories: ["Fiction", "Romance"],
    img: "",
    description:
      "The magical tale of a young wizard's journey into the world of magic.",
    publicationDate: "June 26, 1997",
    ISBN: "978-0-545-01022-5",
    dimension: "5.2 x 0.8 x 7.5 inches",
    weight: 12.8,
    language: "English",
    publisher: "Scholastic",
  },
  {
    id: "63e631768f94c49bcfce411f99288f2",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 8.97,
    trending: false,
    newRelease: false,
    categories: ["Fiction", "Adventure"],
    img: "",
    description:
      "An enchanting journey of a hobbit's quest to reclaim a treasure from a dragon.",
    publicationDate: "September 21, 1937",
    ISBN: "978-0-261-10236-4",
    dimension: "5 x 1 x 7.8 inches",
    weight: 8.5,
    language: "English",
    publisher: "HarperCollins",
  },
  {
    id: "a7d51b369e164a79bc2f3421a5f1a8af43",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    trending: true,
    newRelease: false,
    categories: ["Non-Fiction", "Business"],
    img: "",
    description: "A story of the decadence and excesses of the Jazz Age.",
    publicationDate: "April 10, 1925",
    ISBN: "978-0-7432-7356-5",
    dimension: "5.2 x 0.6 x 7.9 inches",
    weight: 8.8,
    language: "English",
    publisher: "Scribner",
  },
  {
    id: "fca0733c735d49f29f950ad442ce0e6e433",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 10.95,
    trending: true,
    newRelease: false,
    categories: ["Fiction", "Horror"],
    img: "",
    description: "A gripping novel about racial injustice and moral growth.",
    publicationDate: "July 11, 1960",
    ISBN: "978-0-06-112008-4",
    dimension: "6.1 x 1.1 x 9.3 inches",
    weight: 1.6,
    language: "English",
    publisher: "Harper Perennial Modern Classics",
  },
  {
    id: "9aee0a15738446d97ab8eb0881a450c12",
    title: "1984",
    author: "George Orwell",
    price: 9.99,
    trending: true,
    newRelease: false,
    categories: ["Fiction", "Romance"],
    img: "",
    description:
      "A chilling portrayal of a totalitarian society and thought control.",
    publicationDate: "June 8, 1949",
    ISBN: "978-0-452-28423-4",
    dimension: "4.2 x 0.8 x 7.5 inches",
    weight: 7.2,
    language: "English",
    publisher: "Signet Classics",
  },
  {
    id: "d1d987927f0b4b21b0405ea4066007ee54",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 7.99,
    trending: true,
    newRelease: false,
    categories: ["Fiction", "Romance"],
    img: "",
    description:
      "The magical tale of a young wizard's journey into the world of magic.",
    publicationDate: "June 26, 1997",
    ISBN: "978-0-545-01022-5",
    dimension: "5.2 x 0.8 x 7.5 inches",
    weight: 12.8,
    language: "English",
    publisher: "Scholastic",
  },
  {
    id: "63e6317608f94c49bcfce411f99288f2353",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 8.97,
    trending: false,
    newRelease: false,
    categories: ["Fiction", "Adventure"],
    img: "",
    description:
      "An enchanting journey of a hobbit's quest to reclaim a treasure from a dragon.",
    publicationDate: "September 21, 1937",
    ISBN: "978-0-261-10236-4",
    dimension: "5 x 1 x 7.8 inches",
    weight: 8.5,
    language: "English",
    publisher: "HarperCollins",
  },
  {
    id: "a7d51b369e164a79bc2f3421a5f1a8af253353",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    trending: true,
    newRelease: false,
    categories: ["Non-Fiction", "Business"],
    img: "",
    description: "A story of the decadence and excesses of the Jazz Age.",
    publicationDate: "April 10, 1925",
    ISBN: "978-0-7432-7356-5",
    dimension: "5.2 x 0.6 x 7.9 inches",
    weight: 8.8,
    language: "English",
    publisher: "Scribner",
  },
  {
    id: "fca0733c735d49f29f950ad442ce0e65252e",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 10.95,
    trending: true,
    newRelease: false,
    categories: ["Fiction", "Horror"],
    img: "",
    description: "A gripping novel about racial injustice and moral growth.",
    publicationDate: "July 11, 1960",
    ISBN: "978-0-06-112008-4",
    dimension: "6.1 x 1.1 x 9.3 inches",
    weight: 1.6,
    language: "English",
    publisher: "Harper Perennial Modern Classics",
  },
  {
    id: "9aee0a157389446d97ab8eb05353881a450c",
    title: "1984",
    author: "George Orwell",
    price: 9.99,
    trending: true,
    newRelease: false,
    categories: ["Fiction", "Romance"],
    img: "",
    description:
      "A chilling portrayal of a totalitarian society and thought control.",
    publicationDate: "June 8, 1949",
    ISBN: "978-0-452-28423-4",
    dimension: "4.2 x 0.8 x 7.5 inches",
    weight: 7.2,
    language: "English",
    publisher: "Signet Classics",
  },
  {
    id: "d1d987927f0b4b21b0405ea40660535307ee",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 7.99,
    trending: true,
    newRelease: false,
    categories: ["Fiction", "Romance"],
    img: "",
    description:
      "The magical tale of a young wizard's journey into the world of magic.",
    publicationDate: "June 26, 1997",
    ISBN: "978-0-545-01022-5",
    dimension: "5.2 x 0.8 x 7.5 inches",
    weight: 12.8,
    language: "English",
    publisher: "Scholastic",
  },
  {
    id: "63e6317608f94c49bcfe411f95359288f2",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 8.97,
    trending: false,
    newRelease: false,
    categories: ["Fiction", "Adventure"],
    img: "",
    description:
      "An enchanting journey of a hobbit's quest to reclaim a treasure from a dragon.",
    publicationDate: "September 21, 1937",
    ISBN: "978-0-261-10236-4",
    dimension: "5 x 1 x 7.8 inches",
    weight: 8.5,
    language: "English",
    publisher: "HarperCollins",
  },
  {
    id: "a7d51b369e164a79bc2f3421a52525f1a8af",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    trending: true,
    newRelease: false,
    categories: ["Non-Fiction", "Business"],
    img: "",
    description: "A story of the decadence and excesses of the Jazz Age.",
    publicationDate: "April 10, 1925",
    ISBN: "978-0-7432-7356-5",
    dimension: "5.2 x 0.6 x 7.9 inches",
    weight: 8.8,
    language: "English",
    publisher: "Scribner",
  },
  {
    id: "fca0733c735d49f9f950ad444452ce0e6e",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 10.95,
    trending: true,
    newRelease: false,
    categories: ["Fiction", "Horror"],
    img: "",
    description: "A gripping novel about racial injustice and moral growth.",
    publicationDate: "July 11, 1960",
    ISBN: "978-0-06-112008-4",
    dimension: "6.1 x 1.1 x 9.3 inches",
    weight: 1.6,
    language: "English",
    publisher: "Harper Perennial Modern Classics",
  },
  {
    id: "9aee0a157389446d97ab82532f33881a450c",
    title: "1984",
    author: "George Orwell",
    price: 9.99,
    trending: true,
    newRelease: false,
    categories: ["Fiction", "Romance"],
    img: "",
    description:
      "A chilling portrayal of a totalitarian society and thought control.",
    publicationDate: "June 8, 1949",
    ISBN: "978-0-452-28423-4",
    dimension: "4.2 x 0.8 x 7.5 inches",
    weight: 7.2,
    language: "English",
    publisher: "Signet Classics",
  },
  {
    id: "d1d987927f0b4b21b04325f243106007ee",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 7.99,
    trending: true,
    newRelease: false,
    categories: ["Fiction", "Romance"],
    img: "",
    description:
      "The magical tale of a young wizard's journey into the world of magic.",
    publicationDate: "June 26, 1997",
    ISBN: "978-0-545-01022-5",
    dimension: "5.2 x 0.8 x 7.5 inches",
    weight: 12.8,
    language: "English",
    publisher: "Scholastic",
  },
];

const BOOKS_PER_PAGE = 15;

const BookSearchDisplay: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;

  const pageInputRef = useRef<HTMLInputElement>(null);

  const [books, setBooks] = useState([...DUMMY_BOOKS]);
  const [pageNum, setPageNum] = useState(0);

  const [inputPageNum, setInputPageNum] = useState(pageNum + 1);

  const maxPages = Math.trunc(books.length / BOOKS_PER_PAGE) + 1;

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

  const sortedBooks = sortBooks(sortOptions.sortParam, sortOptions.asc, books);

  const slicedBooks = sortedBooks!.slice(
    pageNum * BOOKS_PER_PAGE,
    BOOKS_PER_PAGE + pageNum * BOOKS_PER_PAGE
  );

  return (
    <section className="mb-16 px-8">
      <h2 className="font-bold text-5xl text-center mt-2 mb-32">
        {category} Books
      </h2>
      <div className="flex mb-4 ">
        <div className="w-64">
          <div className="mb-8">
            <form>
              <label htmlFor="sort" className="font-bold">
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
          <div>Filter</div>
        </div>
        <div className=" flex-1 grid grid-cols-5 gap-4">
          {slicedBooks!.map((el) => {
            return (
              <BookSearchItem
                author={el.author}
                title={el.title}
                key={el.id}
                price={el.price}
                id={el.id}
                img="/img/book2.jpg"
              ></BookSearchItem>
            );
          })}
        </div>
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
