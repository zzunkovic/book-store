import Link from "next/link";
import Image from "next/image";
import { useCartContext } from "@/store/CartContext";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { Transition } from "react-transition-group";

/*Contains a navigation that is responsive. On smaller screens a hamburger menu is added. Inside of it are links that lead to different pages of the app*/

const MainNav: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width:980px)" });
  const { cart, toggleCartHandler } = useCartContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const shoppingCartClickHandler = () => {
    toggleCartHandler();
  };

  const menuClickHandler = () => {
    setMenuOpen((prevMenu) => {
      return !prevMenu;
    });
  };

  const mobileNav = (
    <Transition in={menuOpen} timeout={100} unmountOnExit>
      {(state) => (
        <ul
          className={`flex gap-4 text-lg absolute  flex-col  top-10 right-[-350%]  bg-white w-screen px-8 py-4 transition-transform transform translateY-${
            state === "entered" ? "0" : "[100px]"
          }`}
        >
          <Link className="font-semibold hover:text-black/80" href="/Fiction">
            Fiction
          </Link>
          <Link
            className="font-semibold hover:text-black/80"
            href="/Non-Fiction"
          >
            Non-Fiction
          </Link>
          <Link className="font-semibold hover:text-black/80" href="/Children">
            Children
          </Link>
          <Link className="font-semibold hover:text-black/80" href="/Education">
            Education
          </Link>
        </ul>
      )}
    </Transition>
  );

  return (
    <header className="flex items-center justify-between gap-8  px-16 py-2 sticky top-0 bg-white z-[999] max-[980px]:px-2">
      <Link href="/">
        {" "}
        <Image
          className="h-auto w-64 max-[980px]:w-36 "
          src="/img/logo.png"
          alt="Bookverse logo"
          width={300}
          height={100}
        ></Image>
      </Link>

      <nav className="flex gap-16 max-[980px]:gap-4">
        {isMobile ? (
          <button onClick={menuClickHandler} className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
            {mobileNav}
          </button>
        ) : (
          <ul className="flex gap-4 text-lg">
            <Link className="font-semibold hover:text-black/80" href="/Fiction">
              Fiction
            </Link>
            <Link
              className="font-semibold hover:text-black/80"
              href="/Non-Fiction"
            >
              Non-Fiction
            </Link>
            <Link
              className="font-semibold hover:text-black/80"
              href="/Children"
            >
              Children
            </Link>
            <Link
              className="font-semibold hover:text-black/80"
              href="/Education"
            >
              Education
            </Link>
          </ul>
        )}

        <ul className="flex gap-4">
          <Link href="/search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </Link>
          {/* <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 448 512"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
          </Link> */}
          <button onClick={shoppingCartClickHandler} className="relative">
            {cart.length > 0 && (
              <div
                className={`absolute top-0 -right-1 animate-bounce  pb-2 w-2 rounded-full bg-red-600 z-[9999]`}
              ></div>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
