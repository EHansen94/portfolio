import "@/styles/globals.css";
import { DarkModeProvider } from "@/util/darkModeContext";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return ( 
    <>
      <DarkModeProvider>
        <Navbar />
        <Component {...pageProps} />
      </DarkModeProvider>
    </>
  );
}
