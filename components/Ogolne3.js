import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Ogolne3() {
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
						src="/assets/schiebeturen-1.png"
						width={600}
						height={500}
						className="responsive-image shadow-lg"
						alt="fensterbauer2"
					/>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text className="text-bold">
								Entdecken Sie die Vielfalt unserer hochwertigen Schiebetüren aus
								PVC und Aluminium, die nicht nur durch ihr ansprechendes Design,
								sondern auch durch ihre Robustheit und Funktionalität
								überzeugen.
							</Card.Text>
							<Card.Text>
								Ob modernes Ambiente oder klassischer Stil – unsere Schiebetüren
								passen sich Ihren individuellen Vorstellungen an und schaffen
								eine harmonische Atmosphäre in Ihrem Zuhause.
							</Card.Text>

							<Card.Text>
								Ausgestattet mit modernster Technologie garantieren sie nicht
								nur eine reibungslose Bedienung, sondern bieten auch ein
								Höchstmaß an Sicherheit für Ihre Familie.
							</Card.Text>
							<Card.Text></Card.Text>
							<Card.Text>
								Unsere erfahrenen Fachkräfte stehen Ihnen von der Beratung über
								die Montage bis hin zur Endkontrolle mit Rat und Tat zur Seite,
								um sicherzustellen, dass Ihre neuen Schiebetüren perfekt sitzen
								und Ihren Wohnraum optimal ergänzen. Vertrauen Sie auf unsere
								Expertise und lassen Sie Ihre Wohnträume Wirklichkeit werden.
							</Card.Text>
							<Row className="text-center align-items-center justify-content-center">
								<Link href="schiebeturen">
									<Button className="btn-primary  w-50">Schiebetüren </Button>
								</Link>
							</Row>
						</Card.Body>{" "}
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogolne3;
