import React from "react";
import Head from "next/head";

import Aufsatzrolladen1 from "/components/Aufsatzrolladen1";
import Aufsatzrolladen2 from "../components/Aufsatzrolladen2";
import Aufsatzrolladen3 from "../components/Aufsatzrolladen3";
import Aufsatzrolladen4 from "../components/Aufsatzrolladen4";
import Hausturenplus from "../components/Hausturenplus";
import Turfullungen1 from "../components/Turfullungen1";
import Turfullungen2 from "../components/Turfullungen2";
import Turfullungen3 from "../components/Turfullungen3";
import Turfullungen4 from "../components/Turfullungen4";

function altech() {
	return (
		<div className="">
			<Head>
				<title> Fenster-Figiel Türfüllungen AL-TECH</title>
				<meta
					name="description"
					content="Ontdek de kunst van stukadoorswerk bij DG Bouwgroep. Wij bieden hoogwaardige pleisterdiensten aan voor uw woning, met vakmanschap en precisie, om uw muren te transformeren en een perfecte afwerking te garanderen."
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<Turfullungen3 />
			<Turfullungen4 />
			<Hausturenplus />
		</div>
	);
}

export default altech;
