import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookSearchItem from "@/components/BookSearchItem";
import Image from "next/image";
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

interface BookInterface {
  id: string;
  title: string;
  author: string;
  price: number;
  trending: boolean;
  newRelease: boolean;
  categories: string[];
  img: string;
  description: string;
  publicationDate: string;
  ISBN: string;
  dimension: string;
  weight: number;
  language: string;
  publisher: string;
}

const BookDisplay: React.FC = () => {
  const router = useRouter();
  const { bookDetails } = router.query;
  const [book, setBook] = useState<BookInterface>();
  const [otherBooks, setOtherBooks] = useState<BookInterface[]>();

  let bookId: string | undefined = undefined;
  let bookAlt: string = "";

  if (typeof bookDetails === "string") {
    bookId = bookDetails!.split("-").pop();
  }

  useEffect(() => {
    const curBook = DUMMY_BOOKS.find((el) => el.id === bookId);

    setBook(curBook);
  }, [bookId]);

  useEffect(() => {
    const category = book?.categories[0];
    const othBooks = DUMMY_BOOKS.filter((el) => el.categories[0] === category);

    setOtherBooks([...othBooks]);
  }, [book]);

  if (book) {
    bookAlt = book.title;
  }

  return (
    <section className="max-w-section mx-auto mb-32 mt-16">
      <h2 className="text-5xl font-bold mb-12">{book?.title}</h2>
      <div className="flex gap-16 mb-16">
        <div className="w-1/3 flex-shrink-0 h-auto">
          <Image
            src="/img/book2.jpg"
            width={1000}
            height={2000}
            alt={bookAlt}
            className="w-full h-full "
          ></Image>
        </div>

        <div className=" flex-shrink">
          <p className="font-bold text-6xl mb-3">${book?.price}</p>
          <p className=" text-green-500 mb-3 flex gap-4">Available</p>
          <button className="text-white bg-black rounded-2xl py-4 px-8 font-bold flex gap-4 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5rem"
              fill="white"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            Add to Cart
          </button>
          <h3 className="font-bold text-xl">Description</h3>
          <p className="mb-8">
            To Kill a Mockingbird is a gripping novel that explores themes of
            racial injustice and moral growth in the American South during the
            1930s. Written by the acclaimed author Harper Lee, this classic work
            of literature delves into the life of Scout Finch, a young girl who
            witnesses her fathers courageous fight for justice as he defends a
            black man accused of raping a white woman. Lees masterful
            storytelling, rich character development, and powerful exploration
            of societal issues make this book an enduring and thought-provoking
            read.
          </p>
          <h3 className="font-bold text-xl mb-2">Product Details</h3>
          <ul className="flex flex-col">
            <li>
              <span className=" font-semibold">Title:</span> {book?.title}
            </li>
            <li>
              <span className=" font-semibold">Author:</span> {book?.author}
            </li>
            <li>
              <span className=" font-semibold">Categories:</span>&nbsp;
              {book?.categories.map((el, ind) => {
                if (ind !== book.categories.length - 1) {
                  return `${el}, `;
                } else {
                  return el;
                }
              })}
            </li>
            <li>
              <span className=" font-semibold">Publication Date:</span>{" "}
              {book?.publicationDate}
            </li>
            <li>
              <span className=" font-semibold">ISBN:</span> {book?.ISBN}
            </li>
            <li>
              <span className=" font-semibold">Dimensions:</span>{" "}
              {book?.dimension}
            </li>
            <li>
              <span className=" font-semibold">Weight:</span> {book?.weight} g
            </li>
            <li>
              <span className=" font-semibold">Language:</span> {book?.language}
            </li>
            <li>
              <span className=" font-semibold">Publisher:</span>{" "}
              {book?.publisher}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-3xl mb-8">Other books you might like</h3>
        <div className="grid grid-cols-5 gap-2">
          {otherBooks?.slice(0, 4).map((el) => {
            return (
              <BookSearchItem
                title={el.title}
                author={el.author}
                price={el.price}
                id={el.id}
                img=""
                key={el.id}
              ></BookSearchItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BookDisplay;
