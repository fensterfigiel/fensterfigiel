import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Ogolne5() {
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
			duration: 1,
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
			className="d-flex py-3 bg-light text-dark align-items-center justify-content-center"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/fen5.png"
						width={600}
						height={500}
						className="responsive-image shadow-lg"
						alt="fensterbauer5"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text className="text-bold">
								Unser Sortiment an Haustüren aus PVC und Aluminium bietet Ihnen
								nicht nur eine ästhetisch ansprechende Auswahl, sondern auch
								robuste und langlebige Optionen für Ihren Eingangsbereich.
							</Card.Text>
							<Card.Text>
								Die Vielfalt der Türfüllungen, darunter Glas-, Holz- oder
								Kunststoffelemente, ermöglicht es Ihnen, Ihren persönlichen Stil
								und die architektonischen Anforderungen Ihres Hauses zu
								erfüllen.
							</Card.Text>
							<Card.Text>
								Unsere Haustüren sind in verschiedenen Designs und Farben
								erhältlich, um sicherzustellen, dass Sie die perfekte Tür für
								Ihr Zuhause finden. Neben einem ansprechenden Äußeren bieten
								unsere PVC- und Aluminium-Haustüren auch eine ausgezeichnete
								Wärmedämmung und Sicherheitseigenschaften, die den Komfort und
								die Sicherheit Ihres Hauses verbessern.
							</Card.Text>{" "}
							<Card.Text>
								Unsere erfahrenen Fachkräfte stehen Ihnen zur Verfügung, um Ihre
								neue Haustür professionell zu montieren und nahtlos in Ihren
								Eingangsbereich zu integrieren.
							</Card.Text>
							<Card.Text>
								Verleihen Sie Ihrem Zuhause mit unseren hochwertigen Haustüren
								den perfekten ersten Eindruck und steigern Sie gleichzeitig die
								Sicherheit und Energieeffizienz.
							</Card.Text>
							<Card.Text></Card.Text>{" "}
							<Row className="text-center align-items-center justify-content-center">
								<Link href="hausturen">
									<Button className="btn-primary  w-50">Haustüren </Button>
								</Link>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogolne5;
