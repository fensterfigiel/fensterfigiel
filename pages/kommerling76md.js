import React from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";
import Fpvc8 from "../components/Fpvc8";
import Fpvc3 from "../components/Fpvc3";

function kommerling76md() {
	return (
		<div className="">
			<Head>
				<title>
					Fenster Figiel Fensterbau in Mönchengladbach: Kömmerling 76 MD
				</title>
				<meta
					name="description"
					content="Erfahren Sie mehr über unsere maßgeschneiderten Fensterlösungen in Mönchengladbach, darunter die beliebten Modelle Kömmerling 76 MD."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Fpvc8 /> <Fpvc3 />
			<Fensterplus />
			<Testimonials />
		</div>
	);
}

export default kommerling76md;
