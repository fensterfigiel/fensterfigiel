import React, { useEffect } from "react";
import Head from "next/head";
import Testimonials from "/components/Testimonials";

import Fensterplus from "../components/Fensterplus";
import Faqfenster from "../components/Faqfenster";
import Falu1 from "../components/Falu1";
import Falu2 from "../components/Falu2";
import Falu3 from "../components/Falu3";
import Falu4 from "../components/Falu4";
import Falu5 from "../components/Falu5";
import Falu6 from "../components/Falu6";
import Falu7 from "../components/Falu7";
import Falu8 from "../components/Falu8";
import Falu9 from "../components/Falu9";
import Falu10 from "../components/Falu10";
import Falu11 from "../components/Falu11";
import Falu12 from "../components/Falu12";
import Falu13 from "../components/Falu13";
import Falu14 from "../components/Falu14";
import Falu15 from "../components/Falu15";
import Falu16 from "../components/Falu16";
import Falu17 from "../components/Falu17";
import Falu18 from "../components/Falu18";

function fensteralu() {
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const sectionId = urlParams.get("section");
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		<div className="">
			<Head>
				<title>Fenster Alu</title>

				<meta name="robots" content="index, follow" />
			</Head>
			<Falu1 />
			<Falu2 />

			<Falu3 />
			<Falu4 />
			<Falu5 />
			<Falu6 />
			<Falu7 />
			<Falu8 />
			<Falu9 />
			<Falu10 />

			<Fensterplus />
			<Testimonials />

			<Faqfenster />
		</div>
	);
}

export default fensteralu;
