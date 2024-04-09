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

function turfullungen() {
	return (
		<div className="">
			<Head>
				<title> Türfüllungen mit Fenster Figiel Mönchengladbach</title>
				<meta
					name="description"
					content="Tauchen Sie ein in die Welt der Türfüllungen mit Fenster Figiel. Unsere Türfüllungen sind nicht nur funktional, sondern auch ein Statement für Ihren Wohnstil. Von traditionellen Designs bis hin zu modernen Mustern bieten wir eine breite Auswahl an hochwertigen Türfüllungen, die Ihrem Zuhause Charakter verleihen. Lassen Sie sich von unserer Vielfalt inspirieren und verwandeln Sie Ihre Türen in echte Blickfänger. Kontaktieren Sie uns noch heute und lassen Sie uns gemeinsam Ihre Wohnträume verwirklichen!"
				/>

				<meta name="robots" content="index, follow" />
			</Head>

			<Turfullungen1 />
			<Turfullungen2 />
			<Turfullungen3 />
			<Turfullungen4 />
			<Hausturenplus />
		</div>
	);
}

export default turfullungen;
