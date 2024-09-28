import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Falu1 from "../components/Falu1";

const Falu2 = dynamic(() => import("../components/Falu2"));
const Fensterplus = dynamic(() => import("../components/Fensterplus"));
const Testimonials = dynamic(() => import("/components/Testimonials"));
const Faqfenster = dynamic(() => import("../components/Faqfenster"));

function schucoaws75() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel Schüco AWS 75</title>

				<meta name="robots" content="index, follow" />
			</Head>
			<Falu1 />
			<Falu2 />

			<Fensterplus />
			<Testimonials />

			<Faqfenster />
		</div>
	);
}

export default schucoaws75;
