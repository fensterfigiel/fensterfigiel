import React, { useEffect } from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";
import Fpvc7 from "../components/Fpvc7";
import Fpvc2 from "../components/Fpvc2";

function kommerling76ad() {
	return (
		<div className="">
			<Head>
				<title>Fenster-Figiel Kömmerling 76 AD</title>
				<meta
					name="description"
					content="Verbeter het comfort van uw huis met isolatie van binnenmuren door DG Bouwgroep. Ontdek onze hoogwaardige isolatiediensten voor binnenmuren, die helpen bij geluidsreductie, temperatuurregulatie en het verbeteren van de energie-efficiëntie van uw woning."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Fpvc7 /> <Fpvc2 />
			<Fensterplus />
			<Testimonials />
			<Faqfenster />
		</div>
	);
}

export default kommerling76ad;
