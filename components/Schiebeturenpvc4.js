import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Schiebeturenpvc4() {
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
							<h1 className="text-bold">Kömmerling PremiDoor 76 LUX</h1>
							<Card.Text>
								PremiDoor 76 Lux - Dieses innovative System für Schiebetüren
								bietet eine Profiltiefe von 76 mm und eine großflächige
								Verglasung, was zu einer höheren Nutzung der solaren Energie
								führt.{" "}
							</Card.Text>
							<Card.Text>
								Der barrierefreie Schwellsystem sorgt für Komfort und
								Sicherheit. Mit einem maximalen Elementgröße von 6,50 m Breite
								und 2,60 m Höhe bietet es maximale Flexibilität in der
								Gestaltung. Der Wärmedurchgangskoeffizient Uf liegt im
								Durchschnitt bei 1,3 W/(m²K), was eine effiziente Wärmedämmung
								gewährleistet.{" "}
							</Card.Text>

							<Card.Text>
								Das einzigartige Dichtungssystem mit zentraler Dichtung
								gewährleistet eine effektive Abdichtung. Die schlanke
								Profilgestaltung mit einer Flügelbreite von nur 100 mm
								ermöglicht eine großzügige Lichteinbringung und eine komfortable
								Bedienung beim Öffnen und Schließen.
							</Card.Text>
							<Card.Text>
								Die Verfügbarkeit einer nahezu unbegrenzten Anzahl von Farben
								und Oberflächenstrukturen, darunter Holzoptiken, glatte
								Oberflächen und metallische Ausführungen, ermöglicht es, den
								Stil des Systems an jede architektonische Vision anzupassen.
							</Card.Text>
							<Card.Text className="text-bold">
								PROFIL - Konstruktion basierend auf dem Profil Premidor von
								Kömmerling. Dreikammer-Profil mit verbesserter
								Widerstandsfähigkeit, Verstärkung mit verzinktem Stahl.
							</Card.Text>
							<Card.Text className="text-bold">
								BESCHLAG - Siegenia AUBI- HS Portal. Griffe aus Aluminium
								DIRIGENT. Ein spezielles Führungssystem macht das Öffnen und
								Schließen der Tür ohne großen Kraftaufwand möglich.
							</Card.Text>
							<Card.Text className="text-bold">
								FÜLLUNGEN - Isolierscheibe 48 mm, 4/18/4/18/4, Ug = 0,5 W/m2K
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.2.2.2.jpg"
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

export default Schiebeturenpvc4;
