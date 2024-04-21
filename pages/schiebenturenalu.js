import React from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";
import SchiebeturenFaq from "/components/SchiebeturenFaq";

import Salu1 from "../components/Salu1";
import Salu2 from "../components/Salu2";
import Salu3 from "../components/Salu3";
import Salu4 from "../components/Salu4";
import Schiebeturenplus from "../components/Schiebeturenplus";
import Salu5 from "../components/Salu5";
import Salu6 from "../components/Salu6";
import Salu7 from "../components/Salu7";
import Salu8 from "../components/Salu8";
import Salu9 from "../components/Salu9";
import Salu10 from "../components/Salu10";

function schiebenturenalu() {
	return (
		<div className="">
			<Head>
				<title>Moderne Schiebetüren aus Aluminium - Fenster Figiel</title>
				<meta
					name="description"
					content="Entdecken Sie die stilvolle Innovation mit unseren modernen ALU-Schiebetüren von Fenster Figiel. Unsere hochwertigen und maßgeschneiderten Schiebetüren aus Aluminium vereinen Funktionalität, Eleganz und Langlebigkeit. Bringen Sie mit unseren Schiebetüren frischen Wind in Ihr Zuhause und profitieren Sie von einem zeitgemäßen Design, das Ihre Räume in ein helles und einladendes Ambiente verwandelt. Kontaktieren Sie uns noch heute für eine individuelle Beratung und Montage in Duisburg, Mönchengladbach, Krefeld und Umgebung!"
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<Salu1 />
			<Salu2 />
			<Salu3 />

			<Salu4 />

			<Salu7 />
			<Salu8 />
			<Salu9 />
			<Salu10 />
			<Schiebeturenplus />
			<Testimonials />

			<SchiebeturenFaq />
		</div>
	);
}

export default schiebenturenalu;
