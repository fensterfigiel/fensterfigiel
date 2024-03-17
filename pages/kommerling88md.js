import React, { useEffect } from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";
import Fpvc1 from "../components/Fpvc1";
import Fpvc6 from "../components/Fpvc6";

function kommerling88md() {
	return (
		<div className="">
			<Head>
				<title>Fenster-Figiel Kömmerling 88 MD</title>
				<meta
					name="description"
					content="Verbeter het comfort van uw huis met isolatie van binnenmuren door DG Bouwgroep. Ontdek onze hoogwaardige isolatiediensten voor binnenmuren, die helpen bij geluidsreductie, temperatuurregulatie en het verbeteren van de energie-efficiëntie van uw woning."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Fpvc6 /> <Fpvc1 />
			<Fensterplus />
			<Testimonials />
			<Faqfenster />
		</div>
	);
}

export default kommerling88md;
