import React from "react";
import Head from "next/head";

import Testimonials from "/components/Testimonials";

import Fpvc1 from "../components/Fpvc1";
import Fpvc2 from "../components/Fpvc2";
import Fpvc3 from "../components/Fpvc3";
import Fpvc4 from "../components/Fpvc4";
import Fpvc5 from "../components/Fpvc5";
import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";
import Fpvc6 from "../components/Fpvc6";
import Fpvc7 from "../components/Fpvc7";
import Fpvc8 from "../components/Fpvc8";

function fensterpvc() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel PVC Fenster in Düsseldorf kaufen</title>
				<meta
					name="description"
					content="Entdecken Sie unsere Auswahl an hochwertigen PVC-Fenstern in Düsseldorf. Wir führen Produkte wie Kömmerling 88 MD, Kömmerling 76 MD und vieles mehr!"
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Fpvc6 />
			<Fpvc1 />
			<Fpvc7 />
			<Fpvc2 />
			<Fpvc8 />
			<Fpvc3 />
			<Fpvc5 />
			<Fpvc4 />

			<Fensterplus />
			<Testimonials />
			<Faqfenster />
		</div>
	);
}

export default fensterpvc;
