import React, { useEffect } from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";
import Fpvc7 from "../components/Fpvc7";
import Fpvc2 from "../components/Fpvc2";

function kommerling76ad() {
	return (
		<div className="">
			<Head>
				<title>
					Fenster Figiel Fensterbauer in Mönchengladbach: Kömmerling 76 AD aus
					Polen
				</title>
				<meta
					name="description"
					content="Erfahren Sie mehr über unsere maßgeschneiderten Fensterlösungen in Mönchengladbach, darunter die beliebten Modelle Kömmerling 76 MD und Kömmerling 76 AD. Kontaktieren Sie uns für eine professionelle Beratung und Montage von Fenstern und Türen!"
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<Fpvc7 /> <Fpvc2 />
			<Fensterplus />
			<Testimonials />
			<Faqfenster />
		</div>
	);
}

export default kommerling76ad;
