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
					content="Entdecken Sie unsere hochwertigen Schiebetüren und Fenster bei Figiel. Wir bieten maßgeschneiderte Lösungen für Ihr Zuhause, die Funktionalität und Ästhetik vereinen. Kontaktieren Sie uns noch heute!"
				/>
				<meta
					name="keywords"
					content="Schiebetüren, Fenster, Figiel, maßgeschneidert, hochwertig, Funktionalität, Ästhetik, individuell, Haus, Wohnung, Hersteller, Dienstleistungen"
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Schiebeturen />
			<Header10 />
		</div>
	);
}

export default schiebeturen;
