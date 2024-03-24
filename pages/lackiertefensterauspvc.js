import React, { useEffect } from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";
import Fpvc5 from "../components/Fpvc5";
import Fpvc4 from "../components/Fpvc4";

function lackiertefensterauspvc() {
	return (
		<div className="">
			<Head>
				<title>
					Fenster-Figiel Lackierte PVC-Fenster für ein modernes : Fenster
					Krefeld Ambiente
				</title>
				<meta
					name="description"
					content="Erleben Sie den Charme lackierter PVC-Fenster in Krefeld und entdecken Sie unsere Auswahl an hochwertigen Produkten."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Fpvc5 /> <Fpvc4 />
			<Fensterplus />
			<Testimonials />
		</div>
	);
}

export default lackiertefensterauspvc;
