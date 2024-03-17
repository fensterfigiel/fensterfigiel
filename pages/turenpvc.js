import React from "react";
import Head from "next/head";

import Hausturenplus from "../components/Hausturenplus";
import Pvcturen1 from "../components/Pvcturen1";
import Pvcturen2 from "../components/Pvcturen2";
import Pvcturen3 from "../components/Pvcturen3";
import Pvcturen4 from "../components/Pvcturen4";

function turenpvc() {
	return (
		<div className="">
			<Head>
				<title>Fenster-Figiel PVC Türen </title>
				<meta
					name="description"
					content="Ontdek de kunst van stukadoorswerk bij DG Bouwgroep. Wij bieden hoogwaardige pleisterdiensten aan voor uw woning, met vakmanschap en precisie, om uw muren te transformeren en een perfecte afwerking te garanderen."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Pvcturen1 />
			<Pvcturen2 />
			<Pvcturen3 />
			<Pvcturen4 />
			<Hausturenplus />
		</div>
	);
}

export default turenpvc;
