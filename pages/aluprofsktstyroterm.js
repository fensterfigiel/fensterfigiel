import React from "react";
import Head from "next/head";

import Aufsatzrolladen3 from "../components/Aufsatzrolladen3";
import Aufsatzrolladen4 from "../components/Aufsatzrolladen4";
import Rolladenplus from "../components/Rolladenplus";

function aluprofsktopoterm() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel Aufsatzrolladensystem SKT Opoterm</title>

				<meta name="robots" content="index, follow" />
			</Head>
			<Aufsatzrolladen3 />
			<Aufsatzrolladen4 />

			<Rolladenplus />
		</div>
	);
}

export default aluprofsktopoterm;
