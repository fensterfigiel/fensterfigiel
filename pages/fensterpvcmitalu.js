import React from "react";
import Head from "next/head";

import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";

import Fpvcmit1 from "../components/Fpvcmit1";
import Fpvcmit2 from "../components/Fpvcmit2";
import Fpvcmit3 from "../components/Fpvcmit3";
import Fpvcmit4 from "../components/Fpvcmit4";

function fensterpvcmitalu() {
	return (
		<div className="">
			<Head>
				<title>
					PVC Fenster mit Aluschale - Hochwertige Fensterlösungen von Fenster
					Figiel
				</title>
				<meta
					name="description"
					content="Fenster Figiel bietet moderne Schiebetüren aus Aluminium für Ihr Zuhause an. Entdecken Sie unsere hochwertigen und maßgeschneiderten ALU-Schiebetüren, die Funktionalität, Stil und Langlebigkeit vereinen. Kontaktieren Sie uns für eine individuelle Beratung und Montage in Duisburg, Mönchengladbach, Krefeld und Umgebung!"
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<Fpvcmit1 />
			<Fpvcmit2 />
			<Fpvcmit3 />
			<Fpvcmit4 />

			<Fensterplus />
			<Testimonials />
			<Faqfenster />
		</div>
	);
}

export default fensterpvcmitalu;
