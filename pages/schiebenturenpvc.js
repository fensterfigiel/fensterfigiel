import React from "react";
import Head from "next/head";

import dynamic from "next/dynamic";

import Schiebeturenpvc1 from "../components/Schiebeturenpvc1";

const Testimonials = dynamic(() => import("/components/Testimonials"), {
	loading: () => <p>Loading ...</p>, // Optional loading component
});

const Schiebeturenplus = dynamic(() => import("/components/Schiebeturenplus"), {
	loading: () => <p>Loading ...</p>, // Optional loading component
});

const Schiebeturenpvc2 = dynamic(() => import("/components/Schiebeturenpvc2"), {
	loading: () => <p>Loading ...</p>, // Optional loading component
});

const Schiebeturenpvc3 = dynamic(() => import("/components/Schiebeturenpvc3"), {
	loading: () => <p>Loading ...</p>, // Optional loading component
});

const Schiebeturenpvc4 = dynamic(() => import("/components/Schiebeturenpvc4"), {
	loading: () => <p>Loading ...</p>, // Optional loading component
});

const SchiebeturenFaq = dynamic(() => import("/components/SchiebeturenFaq"), {
	loading: () => <p>Loading ...</p>, // Optional loading component
});

function schiebenturenpvc() {
	return (
		<div className="">
			<Head>
				<title>
					Schiebetüren PVC - Moderne und praktische Lösungen von Fenster Figiel
				</title>
				<meta
					name="description"
					content="Entdecken Sie die Vielseitigkeit von PVC-Schiebetüren von Fenster Figiel - moderne und praktische Lösungen für Ihr Zuhause. Unsere Schiebetüren aus PVC vereinen zeitgemäßes Design mit hoher Wärmedämmung und Langlebigkeit. Lassen Sie sich von Fenster Figiel beraten und wählen Sie aus einer breiten Palette von PVC Schiebetüren, die Ihren Bedürfnissen entsprechen. Wir bieten professionelle Montage von Fenstern und Türen in Duisburg, Mönchengladbach und Krefeld. Als zuverlässiger Fensterbauer in Ihrer Nähe stehen wir Ihnen für die Montage von Polnischen Fenstern mit Montage zur Verfügung. Kaufen Sie Ihre PVC Fenster direkt bei uns und wählen Sie aus einer breiten Palette an modernen Türen aus Polen. Wir sind spezialisiert auf Fenster- und Türmontage in MG und bieten Ihnen die Top Fenster mit ALU Rollläden."
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<Schiebeturenpvc1 />
			<Schiebeturenpvc2 />
			<Schiebeturenpvc3 />
			<Schiebeturenpvc4 />
			<Schiebeturenplus />
			<Testimonials />
			<SchiebeturenFaq />
		</div>
	);
}

export default schiebenturenpvc;
