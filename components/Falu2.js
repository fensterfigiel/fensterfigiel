import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

function Falu2() {
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
			id="1"
			fluid
			className="mt-5 py-5 align-items-center bg-light text-dark justify-content-center "
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.3.1.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="alufenster2"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Schüco AWS 75</h1>
							<Card.Text>
								Der Schüco AWS-Baukasten in der Bautiefe 75 mm überzeugt durch
								seine funktionalen, energetischen und gestalterischen
								Eigenschaften.
							</Card.Text>
							<Card.Text>
								Das neue Schüco Fenster AWS 75.SI+ bietet eine energetisch
								optimierte Wärmedämmung mit einem Uf-Wert von 1,2 W/(m2K) bei
								117 mm Ansichtsbreite.
							</Card.Text>
							<Card.Text>
								Die SimplySmart Technologie sorgt durch eine energetisch
								optimierte Mitteldichtung und eine neue Glasfalzdämmung für
								Vorteile in der Verarbeitung. In Kombina¬tion mit der neuen
								mechanischen Beschlags¬generation Schüco AvanTec SimplySmart ist
								es zusätzlich gelungen, eine signifikante Montagezeitersparnis
								zu realisieren.
							</Card.Text>
							<Card.Text>
								Höchste energetische und architektonische Ansprüche erfüllt das
								Blockfenster AWS 75 BS.SI+ durch sein schlankes Design bei
								größtmöglicher Transparenz aufgrund des verdeckt liegenden
								Flügelrahmens.
							</Card.Text>

							<Card.Text className="text-bold">
								PROFIL - Auf Basis des Schüco Blockfensters ist das
								hochwärmegedämmte System Schüco AWS 75 WF.SI+ speziell
								konzipiert für die wirtschaftliche Ausführung von Fensterbändern
								mit geschosshohen Verglasungen in Pfosten-Riegel-Anmutung.
							</Card.Text>
							<Card.Text className="text-bold">
								Profilbautiefen: Blendrahmen, Pfosten, Riegel 75 mm Flügelrahmen
								aufschlagend 80 mm Profilansichtsbreiten: Blendrahmen, unten
								66,5 mm Blendrahmen 66,5 mm Einsatzblendrahmen 50 mmPfosten 107
								mmRiegel 91,5 mm Stulpprofil 83 mm
							</Card.Text>
							<Card.Text className="text-bold">
								BESCHLAG - Sicherheit Verdeckt liegendes Beschlagsystem Schüco
								AvanTec SimplySmart Einbruchhemmend in RC 1 N, RC 2 und RC 3
								ausführbar Automation Mit Schüco TipTronic kombinierbar
							</Card.Text>
							<Card.Text className="text-bold">
								SCHEIBEN - Verglasungsdicke bis 61 mm (Flügel)
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Falu2;
