import React from "react";
import Head from "next/head";

import Rolladenplus from "../components/Rolladenplus";
import Insektenschutz1 from "../components/Insektenschutz1";
import Insektenschutz2 from "../components/Insektenschutz2";

function insektenschutzrollsintegriert() {
	return (
		<div className="">
			<Head>
				<title>
					Fenster Figiel Insektenschutzrolls Integriert | Effektiver Schutz für
					Ihre Fenster und Türen
				</title>
				<meta
					name="description"
					content="Erfahren Sie, wie Sie Ihr Zuhause mit unseren hochwertigen Insektenschutzrolls Integriert von Fenster Figiel effektiv schützen können. Vereinbaren Sie jetzt eine Beratung und lassen Sie sich von unseren Experten helfen!"
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<Insektenschutz1 />
			<Insektenschutz2 />

			<Rolladenplus />
		</div>
	);
}

export default insektenschutzrollsintegriert;
