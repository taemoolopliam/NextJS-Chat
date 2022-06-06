import Navbar from "./Navbar";
import Footer from "./Footer";
import MainChat from "../../chat/MainChat";

export default function publicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <MainChat />
      <Footer />
    </>
  );
}
