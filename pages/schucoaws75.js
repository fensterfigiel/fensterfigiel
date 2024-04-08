import React, { useEffect } from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";
import Falu1 from "../components/Falu1";
import Falu2 from "../components/Falu2";

function schucoaws75() {
	return (
		<div className="">
			<Head>
				<title>Fenster Figiel Schüco AWS 75</title>

				<meta name="robots" content="index, follow" />
			</Head>
			<Falu1 />
			<Falu2 />

			<Fensterplus />
			<Testimonials />

			<Faqfenster />
		</div>
	);
}

export default schucoaws75;
