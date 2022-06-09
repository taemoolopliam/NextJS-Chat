import Navbar from "./Navbar";
import Footer from "./Footer";
import LiveChat from "../../liveChat/LiveChat";

export default function publicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <LiveChat />
      <Footer />
    </>
  );
}
