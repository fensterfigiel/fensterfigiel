import React from "react";
import Head from "next/head";

import Rolladenplus from "../components/Rolladenplus";
import Vorbaurolladen1 from "../components/Vorbaurolladen1";
import Vorbaurolladen2 from "../components/Vorbaurolladen2";
import Vorbaurolladen3 from "../components/Vorbaurolladen3";
import Vorbaurolladen4 from "../components/Vorbaurolladen4";
import Vorbaurolladen5 from "../components/Vorbaurolladen5";
import Vorbaurolladen6 from "../components/Vorbaurolladen6";

function vorbaurolladen() {
	return (
		<div className="">
			<Head>
				<title>
					Vorbaurolladen - Innovative Lösungen von Fenster Figiel
					Mönchengladbach
				</title>
				<meta
					name="description"
					content="Entdecken Sie die Vorteile von Vorbaurolladen mit Fenster Figiel. Unsere innovativen Lösungen bieten nicht nur effektiven Sonnen- und Sichtschutz, sondern auch eine verbesserte Energieeffizienz und Sicherheit für Ihr Zuhause. Mit maßgeschneiderten Designs und hochwertigen Materialien garantieren wir Ihnen höchste Qualität und Langlebigkeit. Erfahren Sie mehr über unsere Vorbaurolladen und lassen Sie sich von unseren Experten beraten!"
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<Vorbaurolladen1 />
			<Vorbaurolladen2 />
			<Vorbaurolladen3 />
			<Vorbaurolladen4 />
			<Vorbaurolladen5 />
			<Vorbaurolladen6 />
			<Rolladenplus />
		</div>
	);
}

export default vorbaurolladen;
