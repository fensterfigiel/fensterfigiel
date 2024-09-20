import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins } from "next/font/google";
import CookieConsent from "./CookieConsent";

const Navbar = dynamic(() => import("./Navbar"), {
	ssr: false,
	loading: () => <div>Loading...</div>,
});
const Footer = dynamic(() => import("./Footer"), {
	ssr: false,
	loading: () => <div>Loading...</div>,
});
const Footer2 = dynamic(() => import("./Footer2"), {
	ssr: false,
	loading: () => <div>Loading...</div>,
});

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const Layout = ({ children, pageProps }) => {
	return (
		<div className="layout">
			<div className={poppins.className}>
				<header>
					<Navbar {...pageProps} />
					<CookieConsent />
				</header>
				<main className="main-container">{children}</main>
				<footer>
					<Footer />
					<Footer2 />
				</footer>
			</div>
		</div>
	);
};

export default Layout;
