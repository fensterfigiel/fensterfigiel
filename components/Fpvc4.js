import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Fpvc4() {
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
			className="d-flex bg-light text-dark py-3 align-items-center justify-content-center"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Lackierte PVC Fenster</h1>
							<Card.Text>
								Die Lackierungstechnik von Okno Pol ermöglicht die Ausführung
								von Türen und Fenstern in Originalfarben und eröffnet damit
								unbegrenzte Dekorationsmöglichkeiten von Gebäuden und die
								Umsetzung von ungewöhnlichen modernen architektonischen
								Projekten.
							</Card.Text>
							<Card.Text>
								<strong>
									Ästhetische Vielfalt durch individuelle Farbauswahl:
								</strong>{" "}
								Gestalten Sie Ihr Zuhause mit Fenstern in einer breiten Palette
								von Farben ganz nach Ihrem persönlichen Geschmack.
							</Card.Text>
							<Card.Text>
								<strong>Farbliche Anpassung an jede Architektur:</strong> Wählen
								Sie aus einer Vielzahl von Farbtönen, um das Erscheinungsbild
								Ihres Hauses zu verbessern und Ihren individuellen Stil zu
								unterstreichen.
							</Card.Text>
							<Card.Text>
								<strong>Farbliche Abstimmung auf Ihre Einrichtung:</strong>{" "}
								Finden Sie die perfekte Fensterfarbe, die sich harmonisch in das
								Farbschema Ihres Innenraums einfügt und für ein stimmiges
								Gesamtbild sorgt.
							</Card.Text>
							<Card.Text>
								<strong>
									Farbliche Akzente für ein ansprechendes Äußeres:
								</strong>{" "}
								Verleihen Sie Ihrem Zuhause mit Fenstern in verschiedenen Farben
								einen einzigartigen und attraktiven Look, der die Aufmerksamkeit
								auf sich zieht.
							</Card.Text>
							<Card.Text>
								<strong>
									Kreative Gestaltungsmöglichkeiten durch Farbauswahl:
								</strong>{" "}
								Nutzen Sie die breite Palette von Farboptionen, um Ihre Fenster
								als stilvolles Element Ihrer Wohn- oder Geschäftsgebäude zu
								präsentieren.
							</Card.Text>
							<Card.Text>
								- <strong>Farben, die sich der Jahreszeit anpassen:</strong>{" "}
								Wählen Sie Fensterfarben, die zu jeder Jahreszeit und
								Witterungslage passen und die Schönheit Ihres Hauses das ganze
								Jahr über betonen.
							</Card.Text>
							<Card.Text>
								<strong>
									Personalisierte Farbgebung für ein einzigartiges
									Erscheinungsbild:
								</strong>{" "}
								Schaffen Sie mit individuell ausgewählten Fensterfarben ein
								einzigartiges Ambiente, das Ihren persönlichen Stil und Ihre
								Vorlieben widerspiegelt.
							</Card.Text>
							<Card.Text>
								<strong>
									Farbliche Vielfalt für architektonische Akzente:
								</strong>{" "}
								Nutzen Sie die Möglichkeit, Fenster in verschiedenen Farben zu
								wählen, um architektonische Highlights zu setzen und das
								Erscheinungsbild Ihres Gebäudes zu optimieren.
							</Card.Text>
							<Card.Text>
								<strong>
									Stilvolle Fensterlackierung für eine attraktive
									Gebäudefassade:
								</strong>{" "}
								Verleihen Sie Ihrem Haus mit Fenstern in ansprechenden Farben
								eine ästhetisch ansprechende Fassade, die zum Blickfang wird.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<img
						src="/assets/fpvc4.png"
						width={500}
						height={500}
						className="responsive-image shadow-lg"
						alt="termoisolatie4"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Fpvc4;
