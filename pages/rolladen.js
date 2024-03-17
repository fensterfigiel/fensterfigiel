import React from "react";
import Head from "next/head";

import Header10 from "/components/Header10";
import Fenster from "../components/Fenster";
import Rolladen from "../components/Rolladen";

function rolladen() {
	return (
		<div className="">
			<Head>
				<title>Rolladen Fenster Figiel</title>
				<meta
					name="description"
					content="Ontdek de kunst van stukadoorswerk bij DG Bouwgroep. Wij bieden hoogwaardige pleisterdiensten aan voor uw woning, met vakmanschap en precisie, om uw muren te transformeren en een perfecte afwerking te garanderen."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Rolladen />
			<Header10 />
		</div>
	);
}

export default rolladen;
