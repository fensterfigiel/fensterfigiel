import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Salu2() {
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
						src="/assets/1.2.3.1.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="schiebeturenalu1"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Aliplast Ultraglide</h1>
							<Card.Text>
								ULTRAGLIDE zeichnet sich nicht nur durch Funktionalität, sondern
								auch durch wirtschaftliche und ästhetische architektonische
								Lösungen aus. Nutzungsvorteile und ein elegantes Design. Die
								Lösung mit Flachschwelle verbessertdie Zugänglichkeit der
								Bauwerke für Behinderte – durch die Flachschwellenoption gibt es
								keinen Absatz zwischen Tür und Fußboden – die Schwelle ist
								flächenbündig mit dem Fußboden.
							</Card.Text>
							<Card.Text>
								Der System ULTRAGLIDE wurde speziell an die neuesten
								Anforderungen in Bezug auf Wärmedämmung, Ästhetik und Sicherheit
								angepasst. Es stehen verschiedene Optionen zur Verfügung,
								darunter die UG-Version mit niedriger Schwelle und die
								UG-Version mit einer 90-Grad-Ecklösung.
							</Card.Text>

							<Card.Text>
								Aufgrund seiner Parameter ermöglicht der ULTRAGLIDE-System die
								Gestaltung von Konstruktionen mit sehr großen beweglichen
								Flügeln. Die maximalen Abmessungen für die Ausführung in diesem
								System betragen 3300 mm in der Höhe und 3500 mm in der Breite.
								Es können verschiedene Kombinationen von zwei, drei und vier
								Elementen auf Basis des zweigleisigen Systems realisiert werden.
							</Card.Text>
							<Card.Text>
								Die Verwendung unterschiedlicher Füllungen, einschließlich ein-
								oder zweikammerigen Gläsern, ist möglich. Das System wurde
								speziell im Hinblick auf Wärmedämmung entwickelt. Dabei kommen
								thermische Abstandshalter mit Breiten von 22 mm und 28 mm zum
								Einsatz, die mit Glasfasern angereichert sind. Darüber hinaus
								tragen thermische Einlagen und Unterglasleisten zur Verbesserung
								der thermischen Isolierung des Profils bei.
							</Card.Text>
							<Card.Text>
								Die verfügbaren Optionen umfassen die UG, UGi und UG i+
								Versionen. Der ULTRAGLIDE-System ermöglicht die Gestaltung von
								großen Glasflächen, was eine ausgezeichnete Innenbeleuchtung
								gewährleistet und die Raumgestaltung erleichtert. Dabei werden
								Stabilität, Funktionalität und Leichtigkeit der Konstruktion
								beibehalten.
							</Card.Text>
							<Card.Text className="text-bold">Doppelwandiger Rahmen</Card.Text>
							<Card.Text className="text-bold">
								{" "}
								Maximales Flügelgewicht: 400 kg
							</Card.Text>
							<Card.Text className="text-bold">
								Mögliche konstruktive Kombinationen: – 2-fach (Flügel +
								Fixierteile) – 4-fach (2 Flügel + 2 Fixierteile)
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Salu2;
