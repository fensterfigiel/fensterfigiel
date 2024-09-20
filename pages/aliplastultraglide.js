import React from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";
import SchiebeturenFaq from "/components/SchiebeturenFaq";

import Salu1 from "../components/Salu1";
import Salu2 from "../components/Salu2";

import Schiebeturenplus from "../components/Schiebeturenplus";

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
