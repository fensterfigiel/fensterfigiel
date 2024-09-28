import React from "react";
import Head from "next/head";
import Hausturenplus from "../components/Hausturenplus";
import Pvcturen1 from "../components/Pvcturen1";
import Pvcturen2 from "../components/Pvcturen2";

function kommerling88() {
	return (
		<div className="">
			<Head>
				<title>Kömmerling 88 - Haustürsysteme von Fenster Figiel</title>
				<meta
					name="description"
					content="Entdecken Sie die vielfältigen Haustürsysteme Kömmerling 88 von Fenster Figiel. Unsere hochmodernen Haustüren bieten zahlreiche Gestaltungsmöglichkeiten, technologische Innovationen und Sicherheitsmerkmale. Sie garantieren einen freundlichen Empfang mit höchster Sicherheit, Wärmedämmung und Dichtigkeit. Treffen Sie immer die richtige Entscheidung für Ihre Haustür mit Kömmerling 88!"
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Pvcturen1 />
			<Pvcturen2 />

			<Hausturenplus />
		</div>
	);
}

export default kommerling88;
