import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Insektenschutz1 from "./Insektenschutz1";

function Talu8() {
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
							<h1 className="text-bold">Schüco ADS 90</h1>
							<Card.Text>
								Energieeffizienz und Wärmedämmung im Neubau und bei Sanierung
								von Wohn- und Objektbauten sind ein nachhaltiger Trend. Die
								Schüco ADS 90 Türserie wird diesem Trend gerecht.
							</Card.Text>
							<Card.Text>
								Eine erweiterte Isolierzone, ein umlaufendes
								Mitteldichtungsprinzip und eine spezielle Glasfalzdämmung
								ermöglichen unübertroffene Systemeigenschaften wie
								Schlagregenresistenz der Klasse 7A bei 750 Pa sowie Uf-Werte bis
								zu 1,4 W/(m²K). Mit entsprechender 3-fach-Verglasung oder
								flügelüberdeckender Füllung sind damit hervorragende Ud-Werte
								bis zu 1,0 W/ (m²K) möglich. Damit hat Schüco bereits heute den
								Wärmedämmstandard von morgen im Programm.{" "}
							</Card.Text>

							<Card.Text>
								Die Aluminium Türsysteme Schüco ADS 90.SI und Schüco ADS 90
								PL.SI bieten ein Höchstmaß an Flexibilität. Sie lassen sich mit
								einer Vielzahl an Zusatzfunktionen kombinieren wie dem
								prämierten Schüco Door Control System (DCS) für einfache und
								designorientierte Zutrittskontrolllösungen.{" "}
							</Card.Text>
							<Card.Text>
								Dem Ansatz der optimalen Funktionalität folgend lässt sich der
								integrierte Obentürschließer mit flacher Gleitschiene (ITS 96)
								ideal in diesem System berücksichtigen.{" "}
							</Card.Text>
							<Card.Text>
								Durch die Verbindung ergibt sich eine optimale Kombination aus
								Energieeffizienz, moderner Technik und höchsten
								Designansprüchen. Natürlich wird dem Bedürfnis nach Sicherheit
								ebenfalls Rechnung getragen: Einbruchhemmung bis WK3 (RC 3) ist
								möglich.
							</Card.Text>
							<Card.Text>
								Während die flügelaufschlagende Premiumhaustür Schüco ADS 90
								PL.SI den Ansprüchen im Wohnungsbau gerecht wird, bietet die
								flächenbündige Türenserie Schüco ADS 90.SI Höchstleistung für
								den gehobenen Wohnungs- und Objektbereich.
							</Card.Text>
							<Card.Text className="text-bold">Profilbautiefen</Card.Text>
							<Card.Text>
								Blendrahmen, Pfosten, Riegel 90 mm Flügelrahmen (Tür) 90 mm
								Profilansichtsbreiten: Blendrahmen / Sockel, unten 111 mm
							</Card.Text>
							<Card.Text>
								Blendrahmen, seitlich und oben 84 mm Pfosten 104 mm Riegel 104
								mm Flügelrahmen nach innen öffnend, innen und außen
								flächenbündig umlaufend 73 mm Flügelrahmen nach außen öffnend,
								innen und außen flächenbündig umlaufend 103 mm Flügelrahmen
								(Tür, mit innerem Aufschlag) 73 mm
							</Card.Text>
							<Card.Text className="text-bold">
								BESCHLAG Schloss (im Standard):
							</Card.Text>
							<Card.Text>
								Automatische 5-Punkt Fuhr 855GL typ 3 Einsatz mit 3 Schlüsseln
								Schloss (in Option):
							</Card.Text>
							<Card.Text>
								Fuhr 833 Fuhr 834 Fuhr 834P Fuhr 811 typ 11 Option auf die
								Installation von weiteren Griffen, einbruchhemmenden Schlössern,
								zertifizierten Einsätzen, Schnappschlössern,
								Dreipunktverriegelungen, elektrischen Türöffnern,
								Aufbruchsperren.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.4.2.4.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="ads90"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Talu8;
