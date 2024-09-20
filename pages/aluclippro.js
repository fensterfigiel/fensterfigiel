aluclippro;

import React from "react";
import Head from "next/head";

import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";

import Fpvcmit3 from "../components/Fpvcmit3";
import Fpvcmit4 from "../components/Fpvcmit4";

function aluclippro() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel Kömmerling Mitteldichtung AluClip Pro</title>
				<meta
					name="description"
					content="Entdecken Sie die hochwertigen Fenster Kömmerling Mitteldichtung AluClip Pro von Fenster Figiel, Ihrem erfahrenen Fensterbauer aus Mönchengladbach. Unsere Fenster sind von höchster Qualität und werden in Polen hergestellt. Verlassen Sie sich auf Fenster Figiel für maßgeschneiderte Fensterlösungen mit innovativem Design und erstklassiger Energieeffizienz."
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<Fpvcmit3 />
			<Fpvcmit4 />

			<Fensterplus />
			<Testimonials />
			<Faqfenster />
		</div>
	);
}

export default aluclippro;
