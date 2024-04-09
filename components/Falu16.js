import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Falu16() {
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
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/fpvctest.png"
						width={500}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="alufenster16"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Aliplast Superial </h1>
							<Card.Text>
								Das Aliplast Superial stellt eine herausragende Lösung dar, die
								eine breite Palette von Anwendungsmöglichkeiten im Bereich der
								Fenster-, Tür- und Vitrinenkonstruktion bietet, wobei besonderer
								Wert auf hohe Wärmedämmung und vielseitige
								Gestaltungsmöglichkeiten gelegt wird. Mit der Möglichkeit,
								Fenster auch in Fassadensysteme zu integrieren, eröffnet das
								System eine Vielzahl von architektonischen Möglichkeiten, um
								ästhetisch ansprechende und gleichzeitig funktionale Gebäude zu
								gestalten.
							</Card.Text>
							<Card.Text>
								Die Flexibilität des Aliplast Superial zeigt sich auch in den
								Details, wie der Auswahl zwischen rechteckigen und abgerundeten
								Verglasungsleisten sowie der Möglichkeit zur Anwendung
								verschiedener Arten von Verglasungen, darunter ein- und
								zweikammerige, schalldichte und einbruchhemmende Gläser.
								Zusätzlich bietet das System eine Auswahl an
								Entwässerungsoptionen für die Profile, entweder traditionell
								oder versteckt, um den architektonischen Vorlieben und
								Anforderungen gerecht zu werden.
							</Card.Text>

							<Card.Text>
								Besonders bemerkenswert ist die Option für niedrige Türschwellen
								bei Balkontüren, die ein bequemes Betreten und Verlassen
								ermöglicht und gleichzeitig die Energieeffizienz durch den
								Einsatz spezieller Dichtungen erhöht. Dieser Fokus auf Komfort
								und Energieeffizienz spiegelt sich auch in der Möglichkeit
								wider, moderne Fensterkonstruktionen in verschiedenen
								Ausführungen zu entwerfen, die den neuesten Standards in Sachen
								Energieeinsparung und Umweltschutz entsprechen.
							</Card.Text>
							<Card.Text>
								Darüber hinaus sind die Konstruktionen des SPi und SPi+ auf dem
								bewährten Superial-Grundsystem aufgebaut, was eine solide Basis
								für eine breite Palette von Anwendungen bietet. Mit einer
								umfassenden Auswahl an Farboptionen, darunter RAL-Farben,
								strukturierte Oberflächen, Holzoptik-Effekte und verschiedene
								Möglichkeiten für die Oberflächenveredelung, bietet das Aliplast
								Superial nicht nur technische Exzellenz, sondern auch
								ästhetische Vielfalt für jede architektonische Vision.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Falu16;
