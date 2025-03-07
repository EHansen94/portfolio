import "@/styles/globals.css";
import { DarkModeProvider } from "@/util/darkModeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
	return (
		<>
			<DarkModeProvider>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</DarkModeProvider>
		</>
	);
}
