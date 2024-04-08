import React from "react";
import Head from "next/head";

import Rolladenplus from "../components/Rolladenplus";
import Rstoren1 from "../components/Rstoren1";
import Rstoren2 from "../components/Rstoren2";
import Rstoren3 from "../components/Rstoren3";
import Rstoren4 from "../components/Rstoren4";

function raffstoren() {
	return (
		<div className="">
			<Head>
				<title>Raffstoren Fenster Figiel</title>

				<meta name="robots" content="index, follow" />
			</Head>
			<Rstoren1 />
			<Rstoren2 />
			<Rstoren3 />
			<Rstoren4 />
			<Rolladenplus />
		</div>
	);
}

export default raffstoren;
