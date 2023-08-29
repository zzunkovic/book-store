import { useRouter } from "next/router";
import BookSearchItem from "@/components/BookSearchItem";
import { useState, useRef } from "react";

const DUMMY_BOOKS = [
  {
    id: "a7d51b36-9e16-4a79-bc2f-3421a5f1a8af",
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
    id: "fca0733c-735d-49f2-9f95-0ad442ce0e6e",
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
    id: "9aee0a15-7389-446d-97ab-8eb0881a450c",
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
    id: "d1d98792-7f0b-4b21-b040-5ea4066007ee2",
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
    id: "63e63176-08f9-4c49-bcfc-e411f99288f2",
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
    id: "a7d51b36-9e16-4a79-bc2f-3421a5f1a8af43",
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
    id: "fca0733c-735d-49f2-9f95-0ad442ce0e6e433",
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
    id: "9aee0a15-7389-446d-97ab-8eb0881a450c12",
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
    id: "d1d98792-7f0b-4b21-b040-5ea4066007ee54",
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
    id: "63e63176-08f9-4c49-bcfc-e411f99288f2353",
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
    id: "a7d51b36-9e16-4a79-bc2f-3421a5f1a8af253353",
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
    id: "fca0733c-735d-49f2-9f95-0ad442ce0e65252e",
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
    id: "9aee0a15-7389-446d-97ab-8eb05353881a450c",
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
    id: "d1d98792-7f0b-4b21-b040-5ea40660535307ee",
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
    id: "63e63176-08f9-4c49-bcfc-e411f95359288f2",
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
    id: "a7d51b36-9e16-4a79-bc2f-3421a52525f1a8af",
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
    id: "fca0733c-735d-49f2-9f95-0ad444452ce0e6e",
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
    id: "9aee0a15-7389-446d-97ab-82532f33881a450c",
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
    id: "d1d98792-7f0b-4b21-b04325f243106007ee",
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

  const maxPages = Math.trunc(books.length / BOOKS_PER_PAGE) + 1;
  console.log(pageNum);
  function pageSelectHandler(e: React.FormEvent) {
    console.log("setting new page");
    e.preventDefault();
    const enteredPage = +pageInputRef.current!.value;
    setPageNum(enteredPage - 1);
  }
  function pageincrementHandler(pageNumber: number) {
    setPageNum((prevPage) => {
      return prevPage + 1;
    });
  }
  function pageDecrementHandler(pageNumber: number) {
    if (pageNum === 1) return;
    setPageNum((prevPage) => {
      return prevPage - 1;
    });
  }

  return (
    <section className="mb-16 px-8">
      <h2 className="font-bold text-5xl text-center mt-2 mb-32">
        {category} Books
      </h2>
      <div className="flex mb-4 ">
        <div className="w-64">Filter</div>
        <div className=" flex-1 grid grid-cols-5 gap-4">
          {books.slice(pageNum, BOOKS_PER_PAGE).map((el) => {
            return (
              <BookSearchItem
                author={el.author}
                title={el.title}
                key={el.id}
                price={el.price}
                img="/img/book2.jpg"
              ></BookSearchItem>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end ">
        Page
        <form onSubmit={pageSelectHandler} className="mx-2">
          <input
            ref={pageInputRef}
            className="border-2 w-10 focus:outline-none px-2"
          ></input>
        </form>
        of {maxPages}
      </div>
    </section>
  );
};

export default BookSearchDisplay;
