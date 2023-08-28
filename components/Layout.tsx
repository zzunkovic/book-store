import MainNav from "./MainNav";
import Footer from "@/components/Footer";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MainNav></MainNav>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
