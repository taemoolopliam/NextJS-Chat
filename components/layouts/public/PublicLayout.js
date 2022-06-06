import Navbar from "./Navbar";
import Footer from "./Footer";

export default function publicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
