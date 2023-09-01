import Link from "next/link";
import Image from "next/image";

const MainNav: React.FC = () => {
  return (
    <header className="flex items-center justify-between  px-16 py-2">
      <Link href="/">
        {" "}
        <Image
          className="h-auto w-64"
          src="/img/logo.png"
          alt="Bookverse logo"
          width={300}
          height={100}
        ></Image>
      </Link>

      <nav className="flex gap-16">
        <ul className="flex gap-4">
          <Link href="/Fiction">Fiction</Link>
          <Link href="/Non-Fiction">Non-Fiction</Link>
          <Link href="/Children">Children</Link>
          <Link href="/Education">Education</Link>
        </ul>
        <ul className="flex gap-2">
          <Link href="#">Srch</Link>
          <Link href="#">Acc</Link>
          <Link href="#">Crt</Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
