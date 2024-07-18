import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Schucolivingslide2() {
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
			<Row className="justify-content-center align-items-center">
				<Col lg={5} className="mx-auto my-2">
					<Card className="border-0 bg-transparent">
						<Card.Body>
							<h1 className="text-bold">
								Schüco Livingslide- Die neue Systemgeneration
							</h1>
							<Card.Text>
								ie Schüco LivIngSlide Hebeschiebetüren bieten eine elegante
								Lösung für anspruchsvolle Wohnkonzepte. Sie ermöglichen eine
								nahtlose Verbindung zwischen Innen- und Außenbereichen, indem
								sie großflächige Glasfronten leicht und geräuschlos bewegen.
							</Card.Text>
							<Card.Text>
								Dies schafft nicht nur helle, lichtdurchflutete Räume, sondern
								auch maximalen Komfort und Flexibilität. Durch ihre robuste
								Mehrkammer-Rahmenkonstruktion und hochwertige Isoliergläser
								bieten sie exzellente Wärmedämmung und Schallschutz bis zu 45
								dB.
							</Card.Text>
							<Card.Text>
								Diese Hebeschiebetüren sind in verschiedenen Ausführungen und
								Farben erhältlich, passend sowohl für Neubauten als auch für
								Bestandsimmobilien. Sie zeichnen sich durch ihre einfache
								Bedienbarkeit aus, unterstützt durch Optionen wie die SmartClose
								Funktion, die den Flügel sanft und leise in Position bringt.
							</Card.Text>
							<Card.Text></Card.Text>
							<Card.Text className="text-bold">
								Die Sicherheit ist durch moderne Schließsysteme und eine robuste
								Bauweise gewährleistet, die Einbrechern das Leben schwer macht.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center">
					<Image
						src="/assets/schucolivingslide2.jpg"
						width={500}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="Schüco LivIng"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Schucolivingslide2;
