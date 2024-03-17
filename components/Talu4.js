import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Insektenschutz1 from "./Insektenschutz1";

function Talu4() {
	const [windowWidth, setWindowWidth] = useState(0);
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Attach the event listener only on the client side
		if (typeof window !== "undefined") {
			setWindowWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);
		}

		// Clean up the event listener when the component unmounts
		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", handleResize);
			}
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const isMobile = windowWidth <= 768;

	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	const animateIn = {
		opacity: 1,
		transition: {
			duration: 0.1,
			ease: "easeInOut",
		},
	};

	const animateOut = {
		opacity: 0,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	};

	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start(animateIn);
		} else {
			controls.start(animateOut);
		}
	}, [inView, controls, animateIn, animateOut]);

	return (
		<Container
			fluid
			className="mt-5 py-5 align-items-center bg-light text-dark justify-content-center "
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Aluprof MB-86</h1>
							<Card.Text>
								Weltweit erstes Aluminium-Türsystem bei dem Aerogel eingesetzt
								wird – hoch wärmedämmendes Material, das auch in der Raumfahrt
								Verwendung findet. Große Robustheit, ermöglicht besonders große
								und schwere Fenster Sehr gute Wärmedämmung
							</Card.Text>
							<Card.Text className="text-bold">
								PROFIL Einbautiefe – 77 mm (Rahmen) und 86 mm (Flügel)
							</Card.Text>
							<Card.Text>
								Aluminiumtüren MB-86 sind in drei Wärmedämmungs-Varianten
								erhältlich: MB-86ST – Ud von 1,19 W/m2K MB-86SI – Ud von 1,07
								W/m2K MB-86AERO – Ud von 0,88 W/m2K [Beispielfenster 1230×2180,
								Schätzwerte für eine 2-Kammer-Scheibe Ug = 0,5 W/m²K]
							</Card.Text>
							<Card.Text className="text-bold">
								BESCHLAG Schloss (im Standard):
							</Card.Text>
							<Card.Text>
								automatische 5-Punkt Fuhr 855GL typ 3 Einsatz mit 3 Schlüsseln
								Schloss (in Option): Fuhr 833 Fuhr 834 Fuhr 834P Fuhr 811 typ 11
								Es besteht die Möglichkeit, weitere Griffe, einbruchhemmende
								Schlösser, zertifizierte Einsätze, Schnappschlösser,
								Dreipunktverriegelungen, elektrische Türöffner und
								Einbruchsperren einzubauen.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.4.2.2.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="isolatie3"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Talu4;
