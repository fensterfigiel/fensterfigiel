import React from "react";
import Head from "next/head";

import Aufsatzrolladen1 from "/components/Aufsatzrolladen1";
import Aufsatzrolladen2 from "../components/Aufsatzrolladen2";
import Aufsatzrolladen3 from "../components/Aufsatzrolladen3";
import Aufsatzrolladen4 from "../components/Aufsatzrolladen4";
import Rolladenplus from "../components/Rolladenplus";
import Hausturenplus from "../components/Hausturenplus";
import Pvcturen1 from "../components/Pvcturen1";
import Pvcturen2 from "../components/Pvcturen2";
import Schucoliving1 from "../components/Schucoliving1";
import Schucoliving2 from "../components/Schucoliving2";

function schucolivingturen() {
	return (
		<div className="">
			<Head>
				<title>Schüco LivIng - Innovatives Türsystem von Fenster Figiel</title>
				<meta
					name="description"
					content="Entdecken Sie die vielfältigen Haustürsysteme Kömmerling 88 von Fenster Figiel. Unsere hochmodernen Haustüren bieten zahlreiche Gestaltungsmöglichkeiten, technologische Innovationen und Sicherheitsmerkmale. Sie garantieren einen freundlichen Empfang mit höchster Sicherheit, Wärmedämmung und Dichtigkeit. Treffen Sie immer die richtige Entscheidung für Ihre Haustür mit Kömmerling 88!"
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Schucoliving1 />
			<Schucoliving2 />

			<Hausturenplus />
		</div>
	);
}

export default schucolivingturen;
