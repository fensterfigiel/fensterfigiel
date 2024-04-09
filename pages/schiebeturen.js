import React from "react";
import Head from "next/head";

import Header10 from "/components/Header10";
import Schiebeturen from "../components/Schiebeturen";

function schiebeturen() {
	return (
		<div>
			<Head>
				<title>Schiebetüren von Fenster Figiel in der Nähe</title>
				<meta
					name="description"
					content="Entdecken Sie hochwertige Schiebetüren und Fenster bei Fenster Figiel. Wir bieten maßgeschneiderte Lösungen für Ihr Zuhause, die Funktionalität und Ästhetik vereinen. Kontaktieren Sie uns noch heute!"
				/>
				<meta
					name="keywords"
					content="Schiebetüren, Fenster, Fenster Figiel, maßgeschneidert, hochwertig, Funktionalität, Ästhetik, individuell, Haus, Wohnung, Hersteller, Dienstleistungen, Fensterbauer Duisburg Montage, Fensterbauer Mönchengladbach, Polnische Fensterbauer Krefeld, Polnische Fenster mit Montage, Moderne Türe Aus Polen Montage, Alufenster Kömmerling Kaufe, Fensterbauer in der Nähe, Türe Rolladen Alufenster, PVC Fenster aus Polen direkt, Zuverlässiger Fensterbauer, Fenster- und Türmontage MG, Top Fenster mit ALU Rollläden"
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Schiebeturen />
			<Header10 />
		</div>
	);
}

export default schiebeturen;
