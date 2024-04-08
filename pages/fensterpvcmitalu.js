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
import Fpvcmit1 from "../components/Fpvcmit1";
import Fpvcmit2 from "../components/Fpvcmit2";
import Fpvcmit3 from "../components/Fpvcmit3";
import Fpvcmit4 from "../components/Fpvcmit4";
import Fpvcmit5 from "../components/Fpvcmit5";
import Fpvcmit6 from "../components/Fpvcmit6";

function fensterpvcmitalu() {
	return (
		<div className="">
			<Head>
				<title>
					PVC Fenster mit Aluschale - Innovative Fensterlösungen von Fenster
					Figiel
				</title>
				<meta
					name="description"
					content="Entdecken Sie PVC Fenster mit Aluschale von Fenster Figiel - innovative Fensterlösungen, die höchste Qualität und modernes Design vereinen. Unsere PVC Fenster mit Aluschale bieten herausragende Wärmedämmung und Langlebigkeit. Erfahren Sie mehr über unsere vielseitigen Produkte und lassen Sie sich von Fenster Figiel beraten."
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<Fpvcmit1 />
			<Fpvcmit2 />
			<Fpvcmit3 />
			<Fpvcmit4 />

			<Fensterplus />
			<Testimonials />
			<Faqfenster />
		</div>
	);
}

export default fensterpvcmitalu;
