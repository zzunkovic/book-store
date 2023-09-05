import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import CartContextProvider from "@/store/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}
