import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

// Dynamically import components
const Frehau1 = dynamic(() => import("../components/Frehau1"));
const Frehau2 = dynamic(() => import("../components/Frehau2"));
const Frehau3 = dynamic(() => import("../components/Frehau3"));
const Frehau4 = dynamic(() => import("../components/Frehau4"));
const Fensterplus = dynamic(() => import("../components/Fensterplus"));
const Testimonials = dynamic(() => import("../components/Testimonials"));
const Faqfenster = dynamic(() => import("../components/Faqfenster"));
function fensterrehau() {
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
					Rehau Fenster von Fenster Figiel | Hochwertige Lösungen für Ihr
					Zuhause
				</title>
				<meta
					name="description"
					content="Fenster Figiel bietet erstklassige Aluminium Fensterlösungen für Ihr Zuhause. Entdecken Sie unsere hochwertigen Rehau Profilen und professionelle Montagedienstleistungen in Duisburg, Mönchengladbach und Krefeld. Kontaktieren Sie uns noch heute!"
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Frehau1 />
			<Frehau2 />

			<Frehau3 />
			<Frehau4 />

			<Fensterplus />
			<Testimonials />

			<Faqfenster />
		</div>
	);
}

export default fensterrehau;
