import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Fpvc5 from "../components/Fpvc5";
const Fpvc4 = dynamic(() => import("../components/Fpvc4"));
const Fensterplus = dynamic(() => import("../components/Fensterplus"));
const Testimonials = dynamic(() => import("/components/Testimonials"));

function lackiertefensterauspvc() {
	return (
		<div className="">
			<Head>
				<title>
					Lackierte Fenster aus PVC - Attraktive Alternative | Fenster Figiel
				</title>
				<meta
					name="description"
					content="Entdecken Sie lackierte Fenster aus PVC als attraktive Alternative zu herkömmlichen Holzfenstern. Sie vereinen die Vorteile von PVC, wie Langlebigkeit und Witterungsbeständigkeit, mit einer ästhetischen Lackierung, die das Erscheinungsbild verbessert. Wenn Sie nach einem zuverlässigen Fensterbauer in Duisburg, Mönchengladbach, Krefeld oder Umgebung suchen, sind Sie bei Fenster Figiel genau richtig. Wir bieten hochwertige Fenstermontage sowie eine breite Auswahl an modernen Türen aus Polen mit Montage. Kaufen Sie Alufenster von Kömmerling direkt bei uns und profitieren Sie von unserem erstklassigen Service!"
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Fpvc5 /> <Fpvc4 />
			<Fensterplus />
			<Testimonials />
		</div>
	);
}

export default lackiertefensterauspvc;
