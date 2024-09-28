import React from "react";
import Head from "next/head";

import Rolladenplus from "../components/Rolladenplus";

import Vorbaurolladen3 from "../components/Vorbaurolladen3";
import Vorbaurolladen4 from "../components/Vorbaurolladen4";

function skopgkr() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel Vorbaurolladen SKO-P / GK-R</title>

				<meta name="robots" content="index, follow" />
			</Head>
			<Vorbaurolladen3 />
			<Vorbaurolladen4 />

			<Rolladenplus />
		</div>
	);
}

export default skopgkr;
