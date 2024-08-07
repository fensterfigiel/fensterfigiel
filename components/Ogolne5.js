import React, { useEffect, useState } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	ButtonGroup,
} from "react-bootstrap";
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
		<div id="hausturen" className="py-5">
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
									Entdecken Sie unser breites Sortiment an hochwertigen
									Haustüren aus PVC und Aluminium bei Fenster Figiel.
								</Card.Text>
								<Card.Text>
									Unsere Haustüren bieten nicht nur eine ästhetisch ansprechende
									Auswahl, sondern auch robuste und langlebige Optionen für
									Ihren Eingangsbereich.
								</Card.Text>
								<Card.Text>
									Die Vielfalt der Türfüllungen, darunter Glas, Aluminium oder
									Kunststoffelemente, ermöglicht es Ihnen, Ihren persönlichen
									Stil und die architektonischen Anforderungen Ihres Hauses zu
									erfüllen. Wir sind Ihr Experte für Haustürenbau in
									Mönchengladbach und Umgebung.
								</Card.Text>
								<Card.Text>
									Unsere Haustüren sind in verschiedenen Designs und Farben
									erhältlich, um sicherzustellen, dass Sie die perfekte Tür für
									Ihr Zuhause finden. Neben einem ansprechenden Äußeren bieten
									unsere PVC- und Aluminium-Haustüren auch eine ausgezeichnete
									Wärmedämmung und Sicherheitseigenschaften, die den Komfort und
									die Sicherheit Ihres Hauses verbessern.
								</Card.Text>
								<Card.Text>
									Unsere erfahrenen Fachkräfte stehen Ihnen zur Verfügung, um
									Ihre neue Haustür professionell zu montieren und nahtlos in
									Ihren Eingangsbereich zu integrieren. Wir sind Ihre
									Haustürenexperten in Mönchengladbach und Umgebung.
								</Card.Text>
								<Card.Text>
									Verleihen Sie Ihrem Zuhause mit unseren hochwertigen Haustüren
									den perfekten ersten Eindruck und steigern Sie gleichzeitig
									die Sicherheit und Energieeffizienz. Kontaktieren Sie uns noch
									heute für eine individuelle Beratung.
								</Card.Text>
								<Row>
									<ButtonGroup className="align-items-center">
										{" "}
										<Button
											as={Link}
											href="turenpvc"
											className="btn-primary  m-2"
										>
											PVC Türen
										</Button>
										<Button
											as={Link}
											href="turenalu"
											className="btn-primary m-2"
										>
											Alu Türen
										</Button>
										<Button
											as={Link}
											href="turfullungen"
											className="btn-primary  m-2"
										>
											Türfüllungen
										</Button>
									</ButtonGroup>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Ogolne5;
