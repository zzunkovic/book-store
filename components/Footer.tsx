import Link from "next/link";
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-32 px-8">
      <div className="max-w-section mx-auto grid grid-cols-3 gap-4 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1">
        <div>
          <Link href="" className="">
            <Image
              src="/img/logo-blackbg.png"
              alt="bookverse logo"
              width={1000}
              height={500}
              className="w-64"
            ></Image>
          </Link>
          <ul className="flex gap-4 mt-4">
            <li>
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" fill-white h-6 w-6"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </Link>
            </li>{" "}
            <li>
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" fill-white h-6 w-6"
                  viewBox="0 0 448 512"
                >
                  <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                </svg>
              </Link>
            </li>{" "}
            <li>
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" fill-white h-6 w-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </Link>
            </li>
          </ul>
          <p className="mt-4 max-w-[40ch]">
            This company is fictional. This website is a part of Žiga
            Žunkovič&apos;s portfolio
          </p>
        </div>

        <div className="text-white">
          <h3 className="font-bold mb-4">Quick Menu</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/Fiction">Fiction</Link>
            </li>{" "}
            <li>
              <Link href="/Non-Fiction">Non-Fiction</Link>
            </li>{" "}
            <li>
              <Link href="/Children">Children</Link>
            </li>{" "}
            <li>
              <Link href="/Education">Education</Link>
            </li>{" "}
            <li>
              <Link href="/search">Book Search</Link>
            </li>{" "}
          </ul>
        </div>
        <div className="max-[980px]:col-span-full">
          <h3 className="font-bold mb-4">Contact Us</h3>
          <address className=" flex flex-col gap-4 not-italic">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-white"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <p>123 Main Street Anytown, USA</p>
            </div>

            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-white"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <a className="block  " href="tel:(555) 123-4567">
                (555) 123-4567
              </a>
            </div>

            <div className="flex gap-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-white"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <a className="block  " href="mail:info@bookversebookstore.com">
                info@bookversebookstore.com
              </a>
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
