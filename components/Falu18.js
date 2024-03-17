import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Falu18() {
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
							<h1 className="text-bold">Aliplast Star </h1>
							<Card.Text>
								Aliplast Star ist ein hochmodernes Aluminiumsystem, das speziell
								für die Gestaltung von Fenstern und Türen entwickelt wurde und
								höchste Anforderungen an thermische Isolierung erfüllt. Mit
								einer thermischen Trennung von 45 mm bietet es eine zuverlässige
								Barriere gegen Wärmeverluste, die aus soliden und bewährten
								Materialien hergestellt ist, um die gesamte Konstruktion vor
								Energieverlusten zu schützen.
							</Card.Text>
							<Card.Text>
								Durch die Verwendung derselben Isolierkomponenten in
								Fensterflügeln und Rahmen wird die Kohärenz des Wärmeschutzes
								der gesamten Struktur gewährleistet. Ein neuer Standard für die
								Profilverglasung ermöglicht eine verbesserte thermische und
								konstruktive Leistung des Systems, während ein innovativer
								Eckwinkeltyp Kollisionen zwischen Schrauben und Ecken bei der
								Befestigung von Beschlägen in den PVC-Rillen vermeidet.
							</Card.Text>

							<Card.Text>
								Die Option zur Verwendung von Hochleistungsscharnieren mit
								Rollen gewährleistet eine hohe Tragfähigkeit der Türen, während
								ein innovatives System zur Ableitung von Wasser aus der
								Konstruktion ohne sichtbare Abdeckungen für
								Entwässerungsöffnungen sorgt. Einheitliche Eckwinkel und
								T-Verbinder in der äußeren und inneren Kammer reduzieren die
								Anzahl der Zubehörteile und beschleunigen die Herstellung.
							</Card.Text>
							<Card.Text>
								Die Reduzierung der Glasleisten und Dichtungen bei
								gleichzeitiger Aufrechterhaltung der Verglasungskontinuität je
								nach Glasstärke ermöglicht eine flexible Gestaltung. Die Option
								zum Einbau von außen bietet zusätzliche Anpassungsmöglichkeiten.
								Die Möglichkeit des Profilbiegens eröffnet vielseitige
								architektonische Möglichkeiten.
							</Card.Text>
							<Card.Text>
								Dank seines modernen Designs und seiner hohen Leistungseffizienz
								ist das Aliplast Star besonders für Niedrigenergie- und
								thermisch modernisierte Gebäude sowie für den Einsatz in
								Standardgebäuden geeignet. Es bietet auch die Möglichkeit zur
								Installation von Fliegengittern und Insektensystemen und eine
								breite Palette von Farboptionen für eine individuelle
								Gestaltung.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/fpvctest.png"
						width={500}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="isolatie3"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Falu18;
