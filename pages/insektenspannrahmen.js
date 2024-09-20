import React from "react";
import Head from "next/head";

import Rolladenplus from "../components/Rolladenplus";

import Insektenschutz3 from "../components/Insektenschutz3";
import Insektenschutz4 from "../components/Insektenschutz4";

function insektenspannrahmen() {
	return (
		<div className="">
			<Head>
				<title>
					Fenster Figiel Insektenschutz Spannrahmen | Maßgeschneiderte Lösungen
					für insektenfreie Wohnräume
				</title>
				<meta
					name="description"
					content="Unsere hochwertigen Insektenschutz Spannrahmen von Fenster Figiel bieten maßgeschneiderte Lösungen für effektiven Schutz vor unerwünschten Insekten. Vereinbaren Sie noch heute eine Beratung und profitieren Sie von unserer Expertise!"
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<Insektenschutz3 />
			<Insektenschutz4 />

			<Rolladenplus />
		</div>
	);
}

export default insektenspannrahmen;
