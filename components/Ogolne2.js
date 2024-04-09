import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
		<Container
			fluid
			className="d-flex py-3 bg-light text-dark align-items-center justify-content-center"
		>
			<Row className="justify-content-center align-items-center">
				<Col
					lg={5}
					className={`mx-auto my-2 ${isMobile ? "order-2" : "order-1"}`}
				>
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text className="text-bold">
								Fenster Figiel, ist spezialisiert auf die Bereitstellung einer
								breiten Palette hochwertiger Fensterlösungen für Ihr Zuhause.
							</Card.Text>
							<Card.Text>
								Von maßgefertigten Fenstern aus verschiedenen Materialien bis
								hin zu modernsten Energiesparoptionen bieten wir Ihnen eine
								Vielzahl von Auswahlmöglichkeiten, um Ihre individuellen
								Bedürfnisse und Vorlieben zu erfüllen.
							</Card.Text>

							<Card.Text>
								Darüber hinaus bieten wir professionelle Montagedienstleistungen
								an, um sicherzustellen, dass Ihre neuen Fenster von Fenster
								Figiel fachgerecht installiert werden und optimal funktionieren.
							</Card.Text>
							<Card.Text></Card.Text>
							<Card.Text>
								Mit unserem engagierten Team von Fachleuten streben wir danach,
								nicht nur die Ästhetik Ihres Hauses zu verbessern, sondern auch
								seine Energieeffizienz zu maximieren und Ihren Wohnkomfort zu
								steigern.
							</Card.Text>
							<Row className="text-center align-items-center justify-content-center">
								<Link href="fenster">
									<Button className="btn-primary w-50">Fenster</Button>
								</Link>
							</Row>
						</Card.Body>{" "}
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
	);
}

export default Ogolne2;
