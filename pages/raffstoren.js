import React from "react";
import Head from "next/head";

import Rolladenplus from "../components/Rolladenplus";
import Rstoren1 from "../components/Rstoren1";
import Rstoren2 from "../components/Rstoren2";
import Rstoren3 from "../components/Rstoren3";
import Rstoren4 from "../components/Rstoren4";

function raffstoren() {
	return (
		<div className="">
			<Head>
				<title>
					Raffstoren - Moderner Sonnenschutz | Fenster Figiel Fensterbauer in
					der Nähe
				</title>
				<meta
					name="description"
					content="Entdecken Sie unsere hochwertigen Raffstoren als modernen Sonnenschutz für Ihre Fenster. Fenster Figiel bietet eine breite Auswahl an Raffstoren für Ihre individuellen Bedürfnisse. Unsere Raffstoren sind eine attraktive und effektive Lösung für die Regulierung von Licht und Schatten in Ihrem Zuhause oder Büro. Kontaktieren Sie uns für eine professionelle Beratung und Montage in Duisburg, Mönchengladbach, Krefeld und Umgebung!"
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<Rstoren1 />
			<Rstoren2 />
			<Rstoren3 />
			<Rstoren4 />
			<Rolladenplus />
		</div>
	);
}

export default raffstoren;
