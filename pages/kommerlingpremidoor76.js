import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Schiebeturenpvc1 from "../components/Schiebeturenpvc1";
const Schiebeturenpvc2 = dynamic(() =>
	import("../components/Schiebeturenpvc2")
);
const Schiebeturenplus = dynamic(() =>
	import("../components/Schiebeturenplus")
);
const SchiebeturenFaq = dynamic(() => import("../components/SchiebeturenFaq"));
const Testimonials = dynamic(() => import("/components/Testimonials"));

function kommerlingpremidoor76() {
	return (
		<div className="">
			<Head>
				<title>
					Kömmerling PremiDoor 76 - Hochwertiges Schiebetürsystem | Fenster
					Figiel
				</title>
				<meta
					name="description"
					content="Erleben Sie mit unserem innovativen Schiebetürsystem Premidoor 76 ein neues Gefühl der Freiheit. Unsere hochwertigen Schiebetürsysteme bieten optimale thermische Isolierung und Benutzerfreundlichkeit. Entdecken Sie die großzügigen Verglasungsoptionen und barrierefreien Standardschwellen. Kontaktieren Sie Fenster Figiel für eine professionelle Montage in Duisburg, Mönchengladbach, Krefeld und Umgebung!"
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Schiebeturenpvc1 />
			<Schiebeturenpvc2 />

			<Schiebeturenplus />
			<Testimonials />
			<SchiebeturenFaq />
		</div>
	);
}

export default kommerlingpremidoor76;
