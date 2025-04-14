import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Frehau1 from "../components/Frehau1";

const Frehau2 = dynamic(() => import("../components/Frehau2"));
const Fensterplus = dynamic(() => import("../components/Fensterplus"));
const Testimonials = dynamic(() => import("/components/Testimonials"));
const Faqfenster = dynamic(() => import("../components/Faqfenster"));

function rehauartevo() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel Rehau Artevo</title>

				<meta name="robots" content="index, follow" />
			</Head>
			<Frehau1 />
			<Frehau2 />

			<Fensterplus />
			<Testimonials />

			<Faqfenster />
		</div>
	);
}

export default rehauartevo;
