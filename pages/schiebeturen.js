import React from "react";
import Head from "next/head";

import Header10 from "/components/Header10";
import Schiebeturen from "../components/Schiebeturen";

function schiebeturen() {
	return (
		<div>
			<Head>
				<title>Schiebetüren | Fenster Figiel</title>
				<meta
					name="description"
					content="Entdecken Sie bei Fenster Figiel eine Vielzahl von hochwertigen Schiebetüren für Ihr Zuhause. Unsere Experten bieten professionelle Beratung und maßgeschneiderte Lösungen für Schiebetüren in Mönchengladbach und Umgebung. Erfahren Sie mehr über unsere Auswahl und lassen Sie sich von unserer Handwerkskunst überzeugen."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Schiebeturen />
			<Header10 />
		</div>
	);
}

export default schiebeturen;
