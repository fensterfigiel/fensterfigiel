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
					content="Entdecken Sie Schiebetüren aus PVC von Fenster Figiel - moderne und praktische Lösungen für Ihr Zuhause. Unsere PVC Schiebetüren bieten nicht nur ein zeitgemäßes Design, sondern auch eine hohe Wärmedämmung und Langlebigkeit. Erfahren Sie mehr über unsere vielseitigen Produkte und lassen Sie sich von Fenster Figiel beraten."
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
