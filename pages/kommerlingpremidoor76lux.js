import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Schiebeturenpvc3 from "../components/Schiebeturenpvc3";

const Schiebeturenplus = dynamic(() =>
	import("../components/Schiebeturenplus")
);

const Schiebeturenpvc4 = dynamic(() =>
	import("../components/Schiebeturenpvc4")
);
const SchiebeturenFaq = dynamic(() => import("../components/SchiebeturenFaq"));
const Testimonials = dynamic(() => import("/components/Testimonials"));

function kommerlingpremidoor76lux() {
	return (
		<div className="">
			<Head>
				<title>
					Kömmerling PremiDoor 76 LUX - Innovative Schiebetür mit großen
					Glasflächen | Fenster Figiel
				</title>
				<meta
					name="description"
					content="Erleben Sie mehr Licht, mehr Komfort und einen besseren Ausblick mit der Kömmerling PremiDoor 76 LUX. Die intelligente Konstruktion reduziert das Flügelprofil für extrem schlanke Profilansichten und ermöglicht größere Glasflächen sowie höhere solare Wärmezugewinne. Entdecken Sie die innovative Schiebetür von Fenster Figiel und kontaktieren Sie uns für eine professionelle Montage in Duisburg, Mönchengladbach, Krefeld und Umgebung!"
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<Schiebeturenpvc3 />
			<Schiebeturenpvc4 />

			<Schiebeturenplus />
			<Testimonials />
			<SchiebeturenFaq />
		</div>
	);
}

export default kommerlingpremidoor76lux;
