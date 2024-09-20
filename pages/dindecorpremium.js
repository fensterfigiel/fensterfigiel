import React from "react";
import Head from "next/head";

import Hausturenplus from "../components/Hausturenplus";
import Turfullungen1 from "../components/Turfullungen1";
import Turfullungen2 from "../components/Turfullungen2";

function dindecorpremium() {
	return (
		<div className="">
			<Head>
				<title> Fenster Figiel Dindecor Die Serie Premium Türfüllungen</title>
				<meta
					name="description"
					content="Entdecken Sie die Dindecor Die Serie Premium von Fenster Figiel. Wir bieten hochwertige Fenster, Türen und Rollläden für Ihr Zuhause. Kontaktieren Sie uns für professionelle Montage in Duisburg, Mönchengladbach und Krefeld."
				/>

				<meta name="robots" content="index, follow" />
			</Head>

			<Turfullungen1 />
			<Turfullungen2 />

			<Hausturenplus />
		</div>
	);
}

export default dindecorpremium;
