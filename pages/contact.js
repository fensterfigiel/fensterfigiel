import Contact1 from "/components/Contact1";

import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";

function contact() {
	return (
		<div className="">
			<Head>
				<title>
					Kontaktieren Sie Fenster Figiel für professionelle Fenster- und
					Türmontage
				</title>
				<meta
					name="description"
					content="Erfahren Sie mehr über Fenster Figiel, Ihren zuverlässigen Fensterbauer in Duisburg, Mönchengladbach und Krefeld. Wir bieten hochwertige polnische Fenster mit Montageservice sowie moderne Türen und Rollläden. Kontaktieren Sie uns für Alufenster von Kömmerling und PVC-Fenster direkt aus Polen. Wir sind Ihre Experten für Fenster- und Türmontage in der Nähe."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Contact1 />
		</div>
	);
}

export default contact;
