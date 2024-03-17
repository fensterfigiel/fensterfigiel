import React from "react";
import Head from "next/head";

import Aufsatzrolladen1 from "/components/Aufsatzrolladen1";
import Aufsatzrolladen2 from "../components/Aufsatzrolladen2";
import Aufsatzrolladen3 from "../components/Aufsatzrolladen3";
import Aufsatzrolladen4 from "../components/Aufsatzrolladen4";
import Rolladenplus from "../components/Rolladenplus";

function aufsatzrolladen() {
	return (
		<div className="">
			<Head>
				<title>Aufsatzrolladen Fenster Figiel</title>
				<meta
					name="description"
					content="Ontdek de kunst van stukadoorswerk bij DG Bouwgroep. Wij bieden hoogwaardige pleisterdiensten aan voor uw woning, met vakmanschap en precisie, om uw muren te transformeren en een perfecte afwerking te garanderen."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Aufsatzrolladen1 />
			<Aufsatzrolladen2 />
			<Aufsatzrolladen3 />
			<Aufsatzrolladen4 />
			<Rolladenplus />
		</div>
	);
}

export default aufsatzrolladen;
