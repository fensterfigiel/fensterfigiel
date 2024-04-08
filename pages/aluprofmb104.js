import React, { useEffect } from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";

import Falu3 from "../components/Falu3";
import Falu4 from "../components/Falu4";
import Falu7 from "../components/Falu7";
import Falu8 from "../components/Falu8";
import Falu9 from "../components/Falu9";
import Falu10 from "../components/Falu10";

function aluprofmb104() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel Aluprof MB-104</title>
				<meta
					name="description"
					content="Entdecken Sie das Fenstersystem mit thermischer Trennung MB-104 Passive, das alle Anforderungen für Passivhäuser erfüllt. Dieses System eignet sich zur Herstellung von architektonischen Außenbauelementen mit hervorragender Wärmedämmung, sehr guter Schalldämmung, Luft- und Wasserdichtigkeit sowie hoher Konstruktionsfestigkeit. Erfahren Sie mehr über Fenster mit Aufmaß bei Fenster Figiel, Ihrem Fensterbauer in der Nähe, der auch in Mönchengladbach und umliegenden Gebieten tätig ist."
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<Falu9 />
			<Falu10 />

			<Fensterplus />
			<Testimonials />

			<Faqfenster />
		</div>
	);
}

export default aluprofmb104;
