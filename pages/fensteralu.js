import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

// Dynamically import components
const Falu1 = dynamic(() => import("../components/Falu1"));
const Falu2 = dynamic(() => import("../components/Falu2"));
const Falu3 = dynamic(() => import("../components/Falu3"));
const Falu4 = dynamic(() => import("../components/Falu4"));
const Falu5 = dynamic(() => import("../components/Falu5"));
const Falu6 = dynamic(() => import("../components/Falu6"));
const Falu7 = dynamic(() => import("../components/Falu7"));
const Falu8 = dynamic(() => import("../components/Falu8"));
const Falu9 = dynamic(() => import("../components/Falu9"));
const Falu10 = dynamic(() => import("../components/Falu10"));
const Fensterplus = dynamic(() => import("../components/Fensterplus"));
const Testimonials = dynamic(() => import("../components/Testimonials"));
const Faqfenster = dynamic(() => import("../components/Faqfenster"));

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
