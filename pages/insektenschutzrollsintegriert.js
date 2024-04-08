import React from "react";
import Head from "next/head";

import Aufsatzrolladen1 from "/components/Aufsatzrolladen1";
import Aufsatzrolladen2 from "../components/Aufsatzrolladen2";
import Aufsatzrolladen3 from "../components/Aufsatzrolladen3";
import Aufsatzrolladen4 from "../components/Aufsatzrolladen4";
import Rolladenplus from "../components/Rolladenplus";
import Insektenschutz1 from "../components/Insektenschutz1";
import Insektenschutz2 from "../components/Insektenschutz2";
import Insektenschutz3 from "../components/Insektenschutz3";
import Insektenschutz4 from "../components/Insektenschutz4";
import Insektenschutz5 from "../components/Insektenschutz5";
import Insektenschutz6 from "../components/Insektenschutz6";

function insektenschutzrollsintegriert() {
	return (
		<div className="">
			<Head>
				<title> Fenster Figiel Insektenschutzrolls Integriert</title>

				<meta name="robots" content="index, follow" />
			</Head>
			<Insektenschutz1 />
			<Insektenschutz2 />

			<Rolladenplus />
		</div>
	);
}

export default insektenschutzrollsintegriert;
