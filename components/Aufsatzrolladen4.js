import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Aufsatzrolladen4() {
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
							<h1 className="text-bold">Aluprof SKT OPOTERM</h1>
							<Card.Text>
								Das OKNO-POL-Rollladensystem basiert auf Bestandteilen
								angesehener Hersteller. Die Rollläden sind in drei Kastengrößen
								mit und ohne Moskitonetz erhältlich. Es besteht die Möglichkeit,
								ein Moskitosystem zu integrieren.
							</Card.Text>
							<Card.Text>
								Der Kasten weist eine zweiteilige Innendämmung auf, die einen
								freien Servicezugang von unten und von vorne ermöglicht. Ein
								weiterer Vorteil des Systems besteht in der Möglichkeit der Wahl
								der Öffnung der Revisionsklappe von unten oder von vorne auch
								vor der Endmontage des gesamten Rollladens.
							</Card.Text>
							<Card.Text>
								Rollladenkasten besteht aus hochwertigen PVC-Elementen, und sein
								Inneres ist zusätzlich isoliert, was die thermische Isolierung
								verbessert, wie von Studien des IFT ROSENHEIM bestätigt wurde.
								Die Studien wurden für Kästen mit der Verwendung von EPS
								(Neopor) als Dämmmaterial durchgeführt, basierend auf den
								geltenden Normen und Berechnungsmethoden.
							</Card.Text>

							<Card.Text>
								Sehr gute Parameter wurden erreicht, z. B. erzielte der SKT
								230/170 mit integriertem Insektenschutzgitter einen U-Wert von
								0,73 W/(m²K), was wichtig ist, um auch größere Verglasungen
								abdecken zu können.
							</Card.Text>
							<Card.Text>
								Die Rollladenlamellen können entweder aus
								Polyurethanschaumprofilen oder PVC-Profilen hergestellt werden.
								Die Konstruktion des Rollladens ermöglicht auch die Integration
								eines Insektenschutzgitters, das effektiven Schutz vor Insekten
								bietet. Das System ist in drei Varianten erhältlich: SKT OPOTERM
								NOVA, SKT OPOTERM RENO und SKT OPOTERM MONOBLOCK.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.3.3.3.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="aufsatzrolladen3"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Aufsatzrolladen4;
