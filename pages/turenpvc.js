import React from "react";
import Head from "next/head";

import Hausturenplus from "../components/Hausturenplus";
import Pvcturen1 from "../components/Pvcturen1";
import Pvcturen2 from "../components/Pvcturen2";
import Pvcturen3 from "../components/Pvcturen3";
import Pvcturen4 from "../components/Pvcturen4";

function turenpvc() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel PVC Türen Krefeld Viersen Mönchengladbach </title>
				<meta
					name="description"
					content="Willkommen bei Fenster Figiel! Unsere PVC-Türen sind nicht nur eine praktische Lösung, sondern auch eine stilvolle Ergänzung für Ihr Zuhause in Krefeld, Viersen und Mönchengladbach. Entdecken Sie unsere vielseitigen Designs, die nicht nur Ihr Zuhause schützen, sondern auch Ihren Lebensstil widerspiegeln. Lassen Sie sich von unserer Fachkenntnis und dem Engagement für Qualität überzeugen. Kontaktieren Sie uns noch heute und lassen Sie uns gemeinsam Ihre Wohnträume verwirklichen!"
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<Pvcturen1 />
			<Pvcturen2 />
			<Pvcturen3 />
			<Pvcturen4 />
			<Hausturenplus />
		</div>
	);
}

export default turenpvc;
