import React, { useEffect } from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";
import Fpvc5 from "../components/Fpvc5";
import Fpvc4 from "../components/Fpvc4";

function lackiertefensterauspvc() {
	return (
		<div className="">
			<Head>
				<title>Fenster-Figiel Lackierte Fenster aus PVC</title>
				<meta
					name="description"
					content="Verbeter het comfort van uw huis met isolatie van binnenmuren door DG Bouwgroep. Ontdek onze hoogwaardige isolatiediensten voor binnenmuren, die helpen bij geluidsreductie, temperatuurregulatie en het verbeteren van de energie-efficiëntie van uw woning."
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
