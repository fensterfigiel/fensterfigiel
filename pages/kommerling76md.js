import React, { useEffect } from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";
import Fpvc8 from "../components/Fpvc8";
import Fpvc3 from "../components/Fpvc3";

function kommerling76md() {
	return (
		<div className="">
			<Head>
				<title>Fenster-Figiel Kömmerling 76 MD</title>
				<meta
					name="description"
					content="Verbeter het comfort van uw huis met isolatie van binnenmuren door DG Bouwgroep. Ontdek onze hoogwaardige isolatiediensten voor binnenmuren, die helpen bij geluidsreductie, temperatuurregulatie en het verbeteren van de energie-efficiëntie van uw woning."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Fpvc8 /> <Fpvc3 />
			<Fensterplus />
			<Testimonials />
		</div>
	);
}

export default kommerling76md;
