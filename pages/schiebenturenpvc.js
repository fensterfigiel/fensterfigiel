import React from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";

import Schiebeturenpvc1 from "../components/Schiebeturenpvc1";
import Schiebeturenplus from "../components/Schiebeturenplus";
import Schiebeturenpvc2 from "../components/Schiebeturenpvc2";
import Schiebeturenpvc3 from "../components/Schiebeturenpvc3";
import Schiebeturenpvc4 from "../components/Schiebeturenpvc4";
import SchiebeturenFaq from "../components/SchiebeturenFaq";

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
