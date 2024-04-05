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
					content="Entdecken Sie hochwertige Rolladen und Fensterlösungen bei Figiel. Wir bieten maßgeschneiderte Produkte für Ihr Zuhause an, die Qualität und Stil vereinen. Kontaktieren Sie uns heute für weitere Informationen!"
				/>
				<meta
					name="keywords"
					content="Rolladen, Fenster, Figiel, maßgeschneidert, hochwertig, Qualität, Stil, individuell, Haus, Wohnung, Hersteller, Dienstleistungen"
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<Rolladen />
			<Header10 />
		</div>
	);
}

export default rolladen;
