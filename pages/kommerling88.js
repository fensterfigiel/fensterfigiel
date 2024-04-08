import React from "react";
import Head from "next/head";

import Aufsatzrolladen1 from "/components/Aufsatzrolladen1";
import Aufsatzrolladen2 from "../components/Aufsatzrolladen2";
import Aufsatzrolladen3 from "../components/Aufsatzrolladen3";
import Aufsatzrolladen4 from "../components/Aufsatzrolladen4";
import Rolladenplus from "../components/Rolladenplus";
import Hausturenplus from "../components/Hausturenplus";
import Pvcturen1 from "../components/Pvcturen1";
import Pvcturen2 from "../components/Pvcturen2";

function kommerling88() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel Kömmerling 88</title>

				<meta name="robots" content="index, follow" />
			</Head>
			<Pvcturen1 />
			<Pvcturen2 />

			<Hausturenplus />
		</div>
	);
}

export default kommerling88;
