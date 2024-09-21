import { useTheme } from "next-themes";
import Head from "next/head";
import React from "react";
import Header6 from "/components/Header6";
import Ogolne1 from "/components/Ogolne1";
import Header10 from "/components/Header10";
import Testimonials from "/components/Testimonials";
import Ogolne2 from "/components/Ogolne2";
import Testowy from "/components/Testowy";
import Ogolne3 from "../components/Ogolne3";
import Ogolne4 from "../components/Ogolne4";
import Ogolne5 from "../components/Ogolne5";

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
