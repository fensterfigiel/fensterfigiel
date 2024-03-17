import React from "react";
import Head from "next/head";
import Werk1 from "/components/Werk1";

import Werk4 from "/components/Werk4";

import Testimonials from "/components/Testimonials";

function werk() {
	return (
		<div className="">
			<Head>
				<title>Werk | Fenster Figiel</title>
				<meta name="description" content="meta description " />
				<meta name="robots" content="index, follow" />
			</Head>
			<Werk1 />
			<Werk4 />

			<Testimonials />
		</div>
	);
}

export default werk;
