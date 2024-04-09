import React from "react";
import Head from "next/head";

import Hausturenplus from "../components/Hausturenplus";
import Pvcturen3 from "../components/Pvcturen3";
import Pvcturen4 from "../components/Pvcturen4";

function kommerling76adturen() {
	return (
		<div className="">
			<Head>
				<title>
					Fenster Figiel | Kömmerling 76 AD - Hochwertige Fensterlösungen
				</title>
				<meta
					name="description"
					content="Entdecken Sie unsere hochwertigen Fensterlösungen mit dem Kömmerling 76 AD-Profil von Fenster Figiel. Vereinbaren Sie noch heute eine Beratung für maßgeschneiderte Fenster und professionelle Montage."
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<Pvcturen3 />
			<Pvcturen4 />
			<Hausturenplus />
		</div>
	);
}

export default kommerling76adturen;
