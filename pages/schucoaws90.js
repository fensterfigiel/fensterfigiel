import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Falu3 from "../components/Falu3";

const Falu4 = dynamic(() => import("../components/Falu4"));
const Fensterplus = dynamic(() => import("../components/Fensterplus"));
const Testimonials = dynamic(() => import("/components/Testimonials"));
const Faqfenster = dynamic(() => import("../components/Faqfenster"));

function schucoaws75() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel Schüco AWS 90</title>

				<meta name="robots" content="index, follow" />
			</Head>
			<Falu3 />
			<Falu4 />

			<Fensterplus />
			<Testimonials />

			<Faqfenster />
		</div>
	);
}

export default schucoaws75;
