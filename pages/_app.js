// import '../styles/tailwind.css'

import "../styles/globals.css";
import PublicLayout from "../components/layouts/public/PublicLayout";

function MyApp({ Component, pageProps }) {
  return (
    <PublicLayout>
      <Component {...pageProps} />
    </PublicLayout>
  );
}

export default MyApp;
