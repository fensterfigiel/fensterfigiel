import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Pvcturen2() {
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
						src="/assets/1.4.1.1.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="isolatie3"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Kömmerling 88</h1>
							<Card.Text>
								Gestalten Sie Ihre Haustür nach Ihren Vorstellungen. Kömmerling
								88 bietet Ihnen dazu verschiedene Holzstrukturen, Uni- und
								Metallicfarben sowie Funktions- Ornamentgläser, Haustürfüllungen
								und Zusatzausstattungen.
							</Card.Text>
							<Card.Text>
								Wie Sie sich auch entscheiden: Mit dem Haustürsystem Kömmerling
								88 bereiten Sie Ihren Gästen immer einen freundlichen Empfang –
								mit Sicherheit.
							</Card.Text>

							<Card.Text>
								Haustürsysteme KÖMMERLING 88 zeichnen sich durch eine Fülle
								technologischer Besonderheiten, die für hohe Sicherheit,
								hervorragende Wärmedämmung, ausgezeichnete Dichtigkeit und hohe
								Statik sorgen. Mit dem Premium-Haustürsystem Kömmerling 88
								treffen Sie immer die richtige Entscheidung.
							</Card.Text>
							<Card.Text className="text-bold">
								PROFIL - Kömmerling 88 plus MD, 3 Dichtungsebenen, Rahmen 88 mm,
								Flügel: 6-Kammer-System 88 mm
							</Card.Text>
							<Card.Text className="text-bold">
								BESCHLAG - Schloss: automatische 3-Punkt KFV AS 2750, Einsatz
								mit 3 Schlüsseln, Scharniere: ROTO Solid PS, auf drei Ebenen
								reguliert
							</Card.Text>
							<Card.Text className="text-bold">
								FÜLLUNGEN - 4/14/4/14/4 40 mm Ug=0,6 (W/m2K) Tür mit
								Dekorpaneele oder aus Kunststoffplatten
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Pvcturen2;
