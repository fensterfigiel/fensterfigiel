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
				<title>Fenster-Figiel Aluprof MB-104</title>
				<meta
					name="description"
					content="Verbeter het comfort van uw huis met isolatie van binnenmuren door DG Bouwgroep. Ontdek onze hoogwaardige isolatiediensten voor binnenmuren, die helpen bij geluidsreductie, temperatuurregulatie en het verbeteren van de energie-efficiëntie van uw woning."
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
