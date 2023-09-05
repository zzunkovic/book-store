import MainNav from "./MainNav";
import Footer from "@/components/Footer";
import ShoppingCart from "./ShoppingCart";
interface LayoutProps {
  children: React.ReactNode;
}

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
