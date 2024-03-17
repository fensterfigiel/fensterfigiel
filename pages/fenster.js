import React from "react";
import Head from "next/head";

import Header10 from "/components/Header10";
import Fenster from "../components/Fenster";
import Faqfenster from "../components/Faqfenster";

function fenster() {
	return (
		<div>
			<Head>
				<title>Fenster | Fenster Figiel</title>
				<meta
					name="description"
					content="Fenster Figiel bietet professionelle Dienstleistungen für den Verkauf und die Montage hochwertiger Fenster, Türen und Rollläden in Mönchengladbach und Umgebung. Erfahren Sie mehr über unsere maßgeschneiderten Lösungen und unsere herausragende Handwerkskunst."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Fenster />
			<Header10 />
			<Faqfenster />
		</div>
	);
}

export default fenster;
