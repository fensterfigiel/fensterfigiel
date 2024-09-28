import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Salu1 from "../components/Salu1"; // Import standardowy

// Dynamiczne importowanie pozostałych komponentów
const Salu2 = dynamic(() => import("../components/Salu2"));
const Schiebeturenplus = dynamic(() =>
	import("../components/Schiebeturenplus")
);
const Testimonials = dynamic(() => import("/components/Testimonials"));
const SchiebeturenFaq = dynamic(() => import("/components/SchiebeturenFaq"));

function aliplastultraglide() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel Aliplast Ultraglide</title>
				<meta
					name="description"
					content="Entdecken Sie das beeindruckende Sortiment von Fenster Figiel mit Aliplast Ultraglide Fenstern - für höchste Qualität, innovative Funktionalität und zeitlose Eleganz. Vertrauen Sie auf die Expertise von Fenster Figiel aus Mönchengladbach für Fensterlösungen, die Ihre Erwartungen übertreffen."
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<Salu1 />

			<Salu2 />
			<Schiebeturenplus />
			<Testimonials />
			<SchiebeturenFaq />
		</div>
	);
}

export default aliplastultraglide;
