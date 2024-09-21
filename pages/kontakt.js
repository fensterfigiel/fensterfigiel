import Contact1 from "/components/Contact1";
import Header6 from "/components/Header6";
import React from "react";
import Head from "next/head";

function kontakt() {
	return (
		<div className="">
			<Head>
				<title>
					Kontaktieren Sie Fenster Figiel für professionelle Fenster- und
					Türmontage in Mönchengladbach
				</title>
				<meta
					name="description"
					content="Erfahren Sie mehr über Fenster Figiel, Ihren zuverlässigen Fensterbauer in Duisburg, Mönchengladbach und Krefeld. Wir bieten hochwertige polnische Fenster mit Montageservice sowie moderne Türen und Rollläden. Kontaktieren Sie uns für Alufenster von Kömmerling und PVC-Fenster direkt aus Polen. Wir sind Ihre Experten für Fenster- und Türmontage in der Nähe."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Contact1 />
			<Header6 />
		</div>
	);
}

export default kontakt;
