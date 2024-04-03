import React from "react";
import Head from "next/head";

import Rstoren1 from "../components/Rstoren1";
import Rolladenplus from "../components/Rolladenplus";

function skyflows() {
	return (
		<div className="">
			<Head>
				<title> Fenster-Figiel Raffstoren Sky Flow SZF/S</title>
				<meta
					name="description"
					content="Ontdek de kunst van stukadoorswerk bij DG Bouwgroep. Wij bieden hoogwaardige pleisterdiensten aan voor uw woning, met vakmanschap en precisie, om uw muren te transformeren en een perfecte afwerking te garanderen."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Rstoren1 />
			<Rolladenplus />
		</div>
	);
}

export default skyflows;
