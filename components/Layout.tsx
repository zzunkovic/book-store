import MainNav from "./MainNav";
import Footer from "@/components/Footer";
import ShoppingCart from "./ShoppingCart";
interface LayoutProps {
  children: React.ReactNode;
}

/*
  Wraps the entire application to make sure the nav, shopping cart and footer are visible on all pages
*/

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MainNav></MainNav>
      <ShoppingCart></ShoppingCart>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
