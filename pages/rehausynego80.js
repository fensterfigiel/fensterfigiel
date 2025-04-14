import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Frehau3 from "../components/Frehau3";

const Frehau4 = dynamic(() => import("../components/Frehau4"));
const Fensterplus = dynamic(() => import("../components/Fensterplus"));
const Testimonials = dynamic(() => import("/components/Testimonials"));
const Faqfenster = dynamic(() => import("../components/Faqfenster"));

function rehausynego80() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel Rehau Synego 90</title>

				<meta name="robots" content="index, follow" />
			</Head>
			<Frehau3 />
			<Frehau4 />

			<Fensterplus />
			<Testimonials />

			<Faqfenster />
		</div>
	);
}

export default rehausynego80;
