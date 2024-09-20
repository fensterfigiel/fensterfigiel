import React from "react";
import Head from "next/head";

import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";

import Fpvcmit1 from "../components/Fpvcmit1";
import Fpvcmit2 from "../components/Fpvcmit2";

function aluclip76md() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel Aluclip 76 MD</title>
				<meta
					name="description"
					content="Entdecken Sie die hochwertigen Aluclip 76 MD Fenster von Fenster Figiel, Ihrem erfahrenen Fensterbauer aus Mönchengladbach. Unsere Aluclip 76 MD Fenster bieten nicht nur herausragende Qualität und Langlebigkeit, sondern auch innovative Technologie für höchste Energieeffizienz und stilvolles Design. Verlassen Sie sich auf Fenster Figiel für maßgeschneiderte Fensterlösungen, die Ihren Wohnraum perfekt ergänzen und Ihren Komfort steigern."
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<Fpvcmit1 />
			<Fpvcmit2 />

			<Fensterplus />
			<Testimonials />
			<Faqfenster />
		</div>
	);
}

export default aluclip76md;
