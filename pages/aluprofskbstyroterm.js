import React from "react";
import Head from "next/head";

import Aufsatzrolladen1 from "/components/Aufsatzrolladen1";
import Aufsatzrolladen2 from "../components/Aufsatzrolladen2";

import Rolladenplus from "../components/Rolladenplus";

function aluprofskbstyroterm() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel Aufsatzrolladensystem SKB Styroterm</title>

				<meta name="robots" content="index, follow" />
			</Head>
			<Aufsatzrolladen1 />
			<Aufsatzrolladen2 />

			<Rolladenplus />
		</div>
	);
}

export default aluprofskbstyroterm;
