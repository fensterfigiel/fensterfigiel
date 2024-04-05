import React from "react";
import Head from "next/head";
import Hausturen from "/components/Hausturen";
import Header10 from "/components/Header10";

function hausturen() {
	return (
		<div className="">
			<Head>
				<title>Haustüren Fenster Figiel </title>
				<meta
					name="description"
					content="Haustüren Fenster Figiel – Die besten Lösungen für Ihr Zuhause. Wir bieten hochwertige Türen und Fenster, die Ihre Erwartungen erfüllen werden. Kontaktieren Sie uns noch heute!"
				/>
				<meta
					name="keywords"
					content="Haustüren, Fenster, Figiel, Türen, Fenster, hochwertig, Haus, Wohnung, deutscher, Hersteller, Dienstleistungen"
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Hausturen />
			<Header10 />
		</div>
	);
}

export default hausturen;
