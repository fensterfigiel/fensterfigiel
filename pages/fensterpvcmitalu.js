import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Fpvcmit1 from "../components/Fpvcmit1";

const Testimonials = dynamic(() => import("../components/Testimonials"));
const Fensterplus = dynamic(() => import("../components/Fensterplus"));
const Faqfenster = dynamic(() => import("../components/Faqfenster"));
const Fpvcmit2 = dynamic(() => import("../components/Fpvcmit2"));
const Fpvcmit3 = dynamic(() => import("../components/Fpvcmit3"));
const Fpvcmit4 = dynamic(() => import("../components/Fpvcmit4"));

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
