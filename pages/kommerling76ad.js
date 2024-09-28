import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Fpvc7 from "../components/Fpvc7";

const Fpvc2 = dynamic(() => import("../components/Fpvc2"));
const Fensterplus = dynamic(() => import("../components/Fensterplus"));
const Testimonials = dynamic(() => import("/components/Testimonials"));
const Faqfenster = dynamic(() => import("../components/Faqfenster"));

function kommerling76ad() {
	return (
		<div className="">
			<Head>
				<title>
					Fenster Figiel Fensterbauer in Mönchengladbach: Kömmerling 76 AD aus
					Polen
				</title>
				<meta
					name="description"
					content="Erfahren Sie mehr über unsere maßgeschneiderten Fensterlösungen in Mönchengladbach, darunter die beliebten Modelle Kömmerling 76 MD und Kömmerling 76 AD. Kontaktieren Sie uns für eine professionelle Beratung und Montage von Fenstern und Türen!"
				/>

				<meta name="robots" content="index, follow" />
			</Head>
			<Fpvc7 /> <Fpvc2 />
			<Fensterplus />
			<Testimonials />
			<Faqfenster />
		</div>
	);
}

export default kommerling76ad;
