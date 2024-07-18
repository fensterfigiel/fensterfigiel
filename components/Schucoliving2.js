import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Schucoliving2() {
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
								Schüco LivIng - Die neue Systemgeneration
							</h1>
							<Card.Text>
								Das Türsystem Schüco LivIng überzeugt durch einfache und
								flexible Fertigung sowie Montage. Es erfüllt höchste Ansprüche
								an Komfort und Sicherheit und bietet eine große Vielfalt bei
								Gestaltung und Ausführung.
							</Card.Text>
							<Card.Text>
								Mit einer Bautiefe von 82 mm und einem innovativen
								7-Kammer-System erreicht es hervorragende Wärmedämmwerte. Es ist
								das erste Türsystem mit schweißbarer EPDM-Dichtung für erhöhte
								Dichtwirkung und ein optisch ansprechendes Eckenbild.
							</Card.Text>
							<Card.Text>
								Schüco LivIng bietet viele Varianten an Anschluss- und
								Zusatzprofilen für verschiedene Bauprojekte. Zur farblichen
								Gestaltung stehen das PVC-Foliensortiment Schüco UnlimitedFinish
								und Schüco TopAlu zur Verfügung.
							</Card.Text>
							<Card.Text>
								Weiße Profile kommen mit silbergrauen Dichtungen, folierte
								Profile mit schwarzen Dichtungen. Das System kann mit Einsatz-
								oder flügelüberdeckenden Türfüllungen ausgestattet werden.
							</Card.Text>
							<Card.Text className="text-bold">
								Vorteile: Geringere Lagerhaltungskosten, weniger Bestellaufwand
								durch reduzierte Teilevielfalt, schweißbare
								EPDM-Funktionsdichtungen, und eine speziell patentierte Technik
								für die Verschweißung der Profile.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center">
					<Image
						src="/assets/image003.jpg"
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

export default Schucoliving2;
