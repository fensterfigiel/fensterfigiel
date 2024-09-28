import { useTheme } from "next-themes";
import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import Ogolne1 from "/components/Ogolne1";
import Header10 from "/components/Header10";
import Ogolne2 from "../components/Ogolne2";

import Ogolne3 from "../components/Ogolne3";
import Ogolne4 from "../components/Ogolne4";
import Ogolne5 from "../components/Ogolne5";

// Dynamic import for Testimonials
const Testimonials = dynamic(() => import("/components/Testimonials"), {
	loading: () => <p>Loading testimonials...</p>, // Optional loading component
});

// Dynamic import for Header6
const Header6 = dynamic(() => import("/components/Header6"), {
	loading: () => <p>Loading header...</p>, // Optional loading component
});

// Dynamic import for Header6
const Testowy = dynamic(() => import("/components/Testowy"), {
	loading: () => <p>Loading header...</p>, // Optional loading component
});

export default function Home() {
	const { theme } = useTheme();

	return (
		<>
			<Head>
				<title>
					Fenster Figiel - Ihr Experte für hochwertige Fenster, Türen und
					Rollläden in Mönchengladbach | Direkt aus Polen
				</title>
				<meta
					name="description"
					content="Entdecken Sie hochwertige Fenster, Türen und Rollläden von Fenster Figiel in Mönchengladbach. Wir bieten professionelle Montage und Reparatur. Kontaktieren Sie uns noch heute!"
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<Testowy />
			<Ogolne1 />
			<Header10 />
			<Ogolne2 />
			<Ogolne3 />
			<Ogolne4 />
			<Ogolne5 />
			<Testimonials />
			<Header6 />
		</>
	);
}
