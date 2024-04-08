import React from "react";
import Head from "next/head";

import Aufsatzrolladen1 from "/components/Aufsatzrolladen1";
import Aufsatzrolladen2 from "../components/Aufsatzrolladen2";
import Aufsatzrolladen3 from "../components/Aufsatzrolladen3";
import Aufsatzrolladen4 from "../components/Aufsatzrolladen4";
import Hausturenplus from "../components/Hausturenplus";
import Turfullungen1 from "../components/Turfullungen1";
import Turfullungen2 from "../components/Turfullungen2";
import Turfullungen3 from "../components/Turfullungen3";
import Turfullungen4 from "../components/Turfullungen4";

function dindecorpremium() {
	return (
		<div className="">
			<Head>
				<title> Fenster Figiel Dindecor Die Serie Premium</title>

				<meta name="robots" content="index, follow" />
			</Head>

			<Turfullungen1 />
			<Turfullungen2 />

			<Hausturenplus />
		</div>
	);
}

export default dindecorpremium;
