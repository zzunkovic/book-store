import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookSearchItem from "@/components/BookSearchItem";
import Image from "next/image";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useCartContext } from "@/store/CartContext";
import BookInterface from "@/models/BookInterface";

/*
  After getting the id of the book from the query, this component fetches the book from the
  database and displays it.

*/

const BookDisplay: React.FC = () => {
  const router = useRouter();
  const { bookDetails } = router.query;
  const [book, setBook] = useState<BookInterface>();
  const [otherBooks, setOtherBooks] = useState<BookInterface[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [showErrorBook, setShowErrorBook] = useState({
    display: false,
    message: "",
  });
  const [showErrorOtherBooks, setShowErrorOtherBooks] = useState({
    display: false,
    message: "",
  });
  const { addToCartHandler } = useCartContext();

  let bookId: string | undefined = undefined;
  let bookAlt: string = "";

  if (typeof bookDetails === "string") {
    bookId = bookDetails!.split("-").pop();
  }

  useEffect(() => {
    async function fetchData(id: string | undefined) {
      setIsLoading(true);
      if (id === undefined) return;
      const idJSON = JSON.stringify(id);

      try {
        const res = await fetch("/api/books/getBook", {
          method: "POST",
          headers: {
            "Content-Type": "application/JSON",
          },
          body: idJSON,
        });
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();

        setBook(data.data?.book);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        setShowErrorBook({
          display: true,
          message: "Something went wrong while fetching the data.",
        });
      }
    }
    fetchData(bookId);
    // setBook(curBook);
  }, [bookId]);

  useEffect(() => {
    const category = book?.categories[0] as string;
    // const othBooks = DUMMY_BOOKS.filter((el) => el.categories[0] === category);
    async function fetchData(category: string) {
      try {
        const categoryJSON = JSON.stringify(category);
        const res = await fetch("/api/books/getCategory", {
          method: "POST",
          headers: {
            "Content-Type": "application/JSON",
          },
          body: categoryJSON,
        });
        if (!res.ok) throw new Error("Failed to fetch data");
        const othBooks = await res.json();
        setOtherBooks([...othBooks.data.books]);
      } catch (err) {
        setShowErrorOtherBooks({
          display: true,
          message: "Something went wrong while fetching the data.",
        });
      }
    }

    fetchData(category);
  }, [book]);

  if (book) {
    bookAlt = book.title;
  }

  const onClickCartHandler = () => {
    addToCartHandler(book as BookInterface);
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner fullscreen={true}></LoadingSpinner>
      ) : showErrorBook.display ? (
        <div className="h-screen w-screen flex flex-col justify-center items-center text-3xl ">
          {showErrorBook.message}
        </div>
      ) : (
        <section className="max-w-section mx-auto mb-32 mt-16 px-8">
          <h2 className="text-5xl font-bold mb-12 max-[609px]:text-4xl">
            {book?.title}
          </h2>
          <div className="flex gap-16 mb-16 max-[980px]:flex-col">
            <div className="w-1/3 flex-shrink-0 max-[980px]:w-1/2 max-[609px]:w-full ">
              <Image
                src={book?.img as string}
                width={1000}
                height={2000}
                alt={bookAlt}
                className="w-full"
              ></Image>
            </div>

            <div className=" flex-shrink">
              <p className="font-bold text-6xl mb-3">${book?.price}</p>
              <p className=" text-green-500 mb-3 flex gap-4">Available</p>
              <button
                onClick={onClickCartHandler}
                className="text-white bg-black rounded-2xl py-4 px-8 font-bold flex gap-4 mb-8"
              >
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
              <h3 className="font-bold text-xl mb-2">Description</h3>
              <p className="mb-8">{book?.description}</p>
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
                  {book?.categories?.map((el, ind) => {
                    if (ind !== book.categories?.length - 1) {
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
                  <span className=" font-semibold">Weight:</span> {book?.weight}{" "}
                  g
                </li>
                <li>
                  <span className=" font-semibold">Language:</span>{" "}
                  {book?.language}
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
            {showErrorOtherBooks.display ? (
              <div>{showErrorOtherBooks.message}</div>
            ) : (
              <div className="grid grid-cols-5 gap-2 max-[1130px]:grid-cols-3 max-[860px]:grid-cols-2 max-[530px]:grid-cols-1">
                {otherBooks?.slice(0, 5).map((el) => {
                  return (
                    <BookSearchItem
                      title={el.title}
                      author={el.author}
                      price={el.price}
                      id={el._id}
                      img={el.img}
                      key={el._id}
                    ></BookSearchItem>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default BookDisplay;
