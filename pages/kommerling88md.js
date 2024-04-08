import React, { useEffect } from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";
import Fpvc1 from "../components/Fpvc1";
import Fpvc6 from "../components/Fpvc6";

function kommerling88md() {
	return (
		<div className="">
			<Head>
				<title>
					Fenster Figiel Individuelle PVC-Fenster in Duisburg: Kömmerling 88 MD
					im Fokus
				</title>
				<meta
					name="description"
					content="Wir bieten Ihnen individuelle PVC-Fensterlösungen in Duisburg an, darunter das hochwertige Modell Kömmerling 88 MD."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Fpvc6 /> <Fpvc1 />
			<Fensterplus />
			<Testimonials />
			<Faqfenster />
		</div>
	);
}

export default kommerling88md;
