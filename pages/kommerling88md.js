import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Fpvc6 from "../components/Fpvc6";
const Fpvc1 = dynamic(() => import("../components/Fpvc1"));

const Fensterplus = dynamic(() => import("../components/Fensterplus"));
const Testimonials = dynamic(() => import("/components/Testimonials"));
const Faqfenster = dynamic(() => import("../components/Faqfenster"));
function kommerling88md() {
	return (
		<div className="">
			<Head>
				<title>
					Fenster Figiel Individuelle PVC Fenster in Duisburg: Kömmerling 88 MD
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
