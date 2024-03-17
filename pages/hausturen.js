import React from "react";
import Head from "next/head";
import Hausturen from "/components/Hausturen";
import Header10 from "/components/Header10";

function hausturen() {
	return (
		<div className="">
			<Head>
				<title>hausturen </title>
				<meta
					name="description"
					content="Ervaar comfort en efficiënte verwarming met vloerverwarmingssystemen van DG Bouwgroep. Ontdek innovatieve oplossingen die gelijkmatige warmteverdeling bieden, energie besparen en het comfort in uw huis verbeteren."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Hausturen />
			<Header10 />
		</div>
	);
}

export default hausturen;
