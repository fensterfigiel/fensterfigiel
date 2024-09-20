import React from "react";
import Head from "next/head";

import Rolladenplus from "../components/Rolladenplus";
import Insektenschutz1 from "../components/Insektenschutz1";
import Insektenschutz2 from "../components/Insektenschutz2";
import Insektenschutz3 from "../components/Insektenschutz3";
import Insektenschutz4 from "../components/Insektenschutz4";
import Insektenschutz5 from "../components/Insektenschutz5";
import Insektenschutz6 from "../components/Insektenschutz6";

function insektenschutz() {
	return (
		<div className="">
			<Head>
				<title>
					Fenster Figiel Insektenschutz | Hochwertige Lösungen für
					Insektenschutz
				</title>
				<meta
					name="description"
					content="Entdecken Sie hochwertige Insektenschutzlösungen von Fenster Figiel. Wir bieten maßgeschneiderte Produkte für Fenster und Türen, um Ihr Zuhause vor lästigen Insekten zu schützen. Vereinbaren Sie noch heute eine Beratung!"
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<Insektenschutz1 />
			<Insektenschutz2 />
			<Insektenschutz3 />
			<Insektenschutz4 />
			<Insektenschutz5 />
			<Insektenschutz6 />
			<Rolladenplus />
		</div>
	);
}

export default insektenschutz;
