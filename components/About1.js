import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";

function About1() {
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
			className={`d-flex bg-light text-dark pt-5 align-items-center justify-content-center ${
				isMobile ? "min-vh-100" : "vh-100"
			}`}
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								{" "}
								Unser Unternehmen setzt auf Vertrauen
							</h1>

							<Card.Text>
								Fenster Figiel ist Ihr Experte für den Verkauf und die Montage
								von hochwertigen Fenstern, Rollläden, Türen und anderen
								Produkten im Bereich der Fenster- und Türtechnik. Mit
								langjähriger Erfahrung bieten wir unseren Kunden in
								Mönchengladbach und Umgebung professionelle Dienstleistungen und
								Produkte höchster Qualität.
							</Card.Text>
							<Card.Text>
								Unser Team von qualifizierten Fachleuten steht Ihnen während des
								gesamten Prozesses zur Verfügung – von der technischen Beratung
								und Produktauswahl bis hin zur fachgerechten Installation und
								dem anschließenden Kundenservice. Wir legen großen Wert darauf,
								unseren Kunden maßgeschneiderte Lösungen anzubieten, die ihren
								individuellen Anforderungen entsprechen.
							</Card.Text>
							<Card.Text>
								Durch die Zusammenarbeit mit führenden Herstellern in der
								Branche können wir eine breite Palette hochwertiger Produkte
								anbieten, die den höchsten Standards entsprechen. Egal, ob Sie
								energieeffiziente moderne Fenster, elegante Rollläden oder
								funktionale Türen suchen, bei Fenster Figiel finden Sie die
								Lösung, die Ihren Bedürfnissen entspricht.
							</Card.Text>
							<div className="text-center">
								<Link href="#story" className="m-1">
									<Button className="btn-nav btn-lg">Geschichte</Button>
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/onas1.jpg"
						width={500}
						height={500}
						className="responsive-image shadow-lg rounded"
						alt="overons"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default About1;
