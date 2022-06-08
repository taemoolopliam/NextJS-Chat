import Navbar from "./Navbar";
import Footer from "./Footer";
import Chat from "../../Chat";

export default function publicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Chat />
      <Footer />
    </>
  );
}
