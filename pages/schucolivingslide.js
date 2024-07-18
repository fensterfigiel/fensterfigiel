import React from "react";
import Head from "next/head";

import Schucolivingslide1 from "../components/Schucolivingslide1";
import Schucolivingslide2 from "../components/Schucolivingslide2";
import Schiebeturenplus from "../components/Schiebeturenplus";

function schucolivingturen() {
	return (
		<div className="">
			<Head>
				<title>
					Schüco LivIng Slide- Hebe Schiebe Türsystem von Fenster Figiel
				</title>
				<meta
					name="description"
					content="Entdecken Sie die vielfältigen Haustürsysteme Kömmerling 88 von Fenster Figiel. Unsere hochmodernen Haustüren bieten zahlreiche Gestaltungsmöglichkeiten, technologische Innovationen und Sicherheitsmerkmale. Sie garantieren einen freundlichen Empfang mit höchster Sicherheit, Wärmedämmung und Dichtigkeit. Treffen Sie immer die richtige Entscheidung für Ihre Haustür mit Kömmerling 88!"
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<Schucolivingslide1 />
			<Schucolivingslide2 />
			<Schiebeturenplus />
		</div>
	);
}

export default schucolivingturen;
