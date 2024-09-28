import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Fpvc8 from "../components/Fpvc8";

const Fpvc3 = dynamic(() => import("../components/Fpvc3"));
const Fensterplus = dynamic(() => import("../components/Fensterplus"));
const Testimonials = dynamic(() => import("/components/Testimonials"));

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
