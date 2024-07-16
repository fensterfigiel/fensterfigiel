import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Schuc2() {
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
					<Card className="border-0 bg-transparent">
						<Card.Body>
							<h1 className="text-bold">Schüco LivIng 82 MD </h1>
							<Card.Text>
								Das Fenstersystem Schüco LivIng basiert auf der
								Twin-System-Technologie und bietet einfache, effiziente
								Herstellung und Montage. Es erfüllt hohe Ansprüche an Komfort
								und Sicherheit mit vielfältigen Gestaltungsmöglichkeiten.
							</Card.Text>
							<Card.Text>
								Das Kunststoff-System Schüco LivIng setzt Maßstäbe bei
								stahlverstärkten Profilsystemen. Das innovative 7-Kammer-System
								ermöglicht hervorragende Wärmedämmwerte bei 82 mm Bautiefe und
								eignet sich für Passivhäuser ohne zusätzliche Maßnahmen.
							</Card.Text>
							<Card.Text>
								Die erste schweißbare EPDM-Dichtung im Schüco LivIng
								Fenstersystem erhöht die Dichtwirkung in den Eckbereichen und
								sorgt für ein geschlossenes, ästhetisches Erscheinungsbild.
							</Card.Text>
							<Card.Text>
								Die Schüco LivIng Serie bietet Flexibilität mit den
								Profilkonturen Classic, Rondo und Viva sowie verschiedenen
								Anschluss- und Zusatzprofilen für individuelle Bauherrenwünsche.
							</Card.Text>
							<Card.Text>
								Für die farbliche Gestaltung stehen PVC-Foliensortimente und
								Schüco TopAlu zur Auswahl, passend zu verschiedenen
								Oberflächengestaltungen.
							</Card.Text>
							<Card.Text className="text-bold">Doppelwandiger Rahmen</Card.Text>
							<Card.Text className="text-bold">
								Flügelgeometrie in flächenversetzter Optik
							</Card.Text>
							<Card.Text className="text-bold">
								Im Mitteldichtungssystem sind alle Beschlagteile durch
								zusätzliche Dichtungsebenen vor Korrosion und Verschmutzung
								geschützt.
							</Card.Text>
							<Card.Text className="text-bold">
								Erhältlich mit durchgängig grauem Grundkörper für eine
								harmonische Optik
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/schuco2.jpg"
						width={500}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="schiebeturenalu1"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Schuc2;
