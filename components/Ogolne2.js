import React, { useEffect, useState } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	NavDropdown,
	Nav,
	ButtonGroup,
} from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Ogolne2() {
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
		<div id="fenster" className="pt-5">
			<Container
				fluid
				className="d-flex py-3 mt-5 bg-light text-dark align-items-center justify-content-center"
			>
				<Row className="justify-content-center align-items-center">
					<Col
						lg={5}
						className={`mx-auto my-2 ${isMobile ? "order-2" : "order-1"}`}
					>
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<Card.Text className="text-bold">
									Fensterbauer in Mönchengladbach
								</Card.Text>
								<Card.Text className="text-bold">
									Fenster Figiel - Ihr Experte für hochwertige Fensterlösungen.
								</Card.Text>
								<Card.Text>
									Wir bieten maßgefertigte Fenster aus verschiedenen Materialien
									wie Kunststoff und Aluminium sowie modernste
									Energiesparoptionen, um Ihre individuellen Bedürfnisse zu
									erfüllen.
								</Card.Text>

								<Card.Text>
									Unsere professionellen Montagedienstleistungen gewährleisten
									eine fachgerechte Installation Ihrer neuen Fenster für
									optimale Leistung. Wir sind Ihr Fensterbauer in der Nähe, der
									Ihnen auch bei Reparaturen zur Seite steht.
								</Card.Text>
								<Card.Text></Card.Text>
								<Card.Text>
									Unser engagiertes Team von Fachleuten strebt danach, nicht nur
									die Ästhetik Ihres Hauses zu verbessern, sondern auch seine
									Energieeffizienz zu maximieren und Ihren Wohnkomfort zu
									steigern. Wir sind stolz darauf, Roma Raffstoren und Rolladen
									von höchster Qualität anzubieten, um Ihre Wohnräume zu
									verschönern.
								</Card.Text>
							</Card.Body>{" "}
							<ButtonGroup className="align-items-center">
								{" "}
								<Button
									as={Link}
									href="fensterpvc"
									className="btn-primary  m-2"
								>
									Kunststoff PVC
								</Button>
								<Button
									as={Link}
									href="fensterpvcmitalu"
									className="btn-primary  m-2"
								>
									PVC mit aluschale
								</Button>
								<Button
									as={Link}
									href="fensteralu"
									className="btn-primary  m-2"
								>
									Alu Fenster
								</Button>
							</ButtonGroup>
						</Card>
					</Col>

					<Col
						lg={5}
						className={`mx-auto my-2 text-center ${
							isMobile ? "order-1" : "order-2"
						}`}
					>
						<Image
							src="/assets/fen2.png"
							width={600}
							height={500}
							className="responsive-image shadow-lg"
							alt="fensterbauer1"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Ogolne2;
