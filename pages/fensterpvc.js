import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Fpvc6 from "../components/Fpvc6";
// Dynamiczne importowanie komponentów
const Testimonials = dynamic(() => import("/components/Testimonials"));
const Fpvc1 = dynamic(() => import("../components/Fpvc1"));
const Fpvc2 = dynamic(() => import("../components/Fpvc2"));
const Fpvc3 = dynamic(() => import("../components/Fpvc3"));
const Fpvc4 = dynamic(() => import("../components/Fpvc4"));
const Fpvc5 = dynamic(() => import("../components/Fpvc5"));
const Fensterplus = dynamic(() => import("../components/Fensterplus"));
const Faqfenster = dynamic(() => import("../components/Faqfenster"));

const Fpvc7 = dynamic(() => import("../components/Fpvc7"));
const Fpvc8 = dynamic(() => import("../components/Fpvc8"));

function fensterpvc() {
	return (
		<div className="">
			<Head>
				<title>
					Fenster Figiel | PVC Fenster kaufen in Mönchengladbach - Hochwertige
					Auswahl
				</title>
				<meta
					name="description"
					content="Entdecken Sie unsere Auswahl an hochwertigen PVC-Fenstern aus Polen in Mönchengladbach. Wir führen Produkte wie Kömmerling 88 MD, Kömmerling 76 MD und vieles mehr! Kontaktieren Sie uns für professionelle Beratung und Montage."
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
