aluprofsktstyroterm;

import React from "react";
import Head from "next/head";

import Aufsatzrolladen1 from "/components/Aufsatzrolladen1";
import Aufsatzrolladen2 from "../components/Aufsatzrolladen2";
import Aufsatzrolladen3 from "../components/Aufsatzrolladen3";
import Aufsatzrolladen4 from "../components/Aufsatzrolladen4";
import Rolladenplus from "../components/Rolladenplus";

function aluprofsktstyroterm() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel Aufsatzrolladensystem SKT Styroterm</title>

				<meta name="robots" content="index, follow" />
			</Head>
			<Aufsatzrolladen3 />
			<Aufsatzrolladen4 />

			<Rolladenplus />
		</div>
	);
}

export default aluprofsktstyroterm;
