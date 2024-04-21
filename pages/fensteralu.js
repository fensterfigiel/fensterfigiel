import React, { useEffect } from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";
import Falu1 from "../components/Falu1";
import Falu2 from "../components/Falu2";
import Falu3 from "../components/Falu3";
import Falu4 from "../components/Falu4";
import Falu5 from "../components/Falu5";
import Falu6 from "../components/Falu6";
import Falu7 from "../components/Falu7";
import Falu8 from "../components/Falu8";
import Falu9 from "../components/Falu9";
import Falu10 from "../components/Falu10";

function fensteralu() {
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const sectionId = urlParams.get("section");
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		<div className="">
			<Head>
				<title>
					Aluminium Fenster von Fenster Figiel | Hochwertige Lösungen für Ihr
					Zuhause
				</title>
				<meta
					name="description"
					content="Fenster Figiel bietet erstklassige Aluminium Fensterlösungen für Ihr Zuhause. Entdecken Sie unsere hochwertigen Produkte und professionelle Montagedienstleistungen in Duisburg, Mönchengladbach und Krefeld. Kontaktieren Sie uns noch heute!"
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Falu1 />
			<Falu2 />

			<Falu3 />
			<Falu4 />
			<Falu5 />
			<Falu6 />
			<Falu7 />
			<Falu8 />
			<Falu9 />
			<Falu10 />

			<Fensterplus />
			<Testimonials />

			<Faqfenster />
		</div>
	);
}

export default fensteralu;
