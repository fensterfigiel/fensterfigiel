import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Image from "next/image";

function Falu10() {
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

	return (
		<Container
			fluid
			className="mt-5 py-5 align-items-center bg-light text-dark justify-content-center "
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Aluprof MB-104 </h1>
							<Card.Text>
								Durch die sehr hohe Wärmedämmung erfüllt das MB-104 Passive Tür-
								und Fenstersystem mit thermischer Einlage alle Anforderungen,
								die an Fensterkonstruktionen im Passivbau-Standard gestellt
								werden, was die Zertifikate des Passivhaus Instituts (PHI) in
								Darmstadt bescheinigen.
							</Card.Text>
							<Card.Text></Card.Text>
							Dieses System erfüllt alle bautechnischen und architektonischen
							Wünsche, die an Bauteile im Ausbau gestellt werden, wie z.B.
							verschiedene Fenstertypen, Windfänge, Schaufenster und räumliche
							Konstruktionen.
							<Card.Text>
								Außer der guten Wärmedämmung zeichnen sich die Elemente auch
								durch eine sehr gute Schalldämmung, Wasser- und Luftdichtigkeit
								sowie eine hohe Widerstandsfähigkeit der Konstruktion aus.
								Bauvorschriften.
							</Card.Text>
							<Card.Text>
								Die Funktionswerte von Fenstern und Türen, die im MB-104
								Passive-System hergestellt wurden, übertreffen alle geltenden
								Anforderungen einschließlich der strengsten Normen und
							</Card.Text>
							<Card.Text className="text-bold">
								Rahmenbautiefe 95 mm Flügelbautiefe 104 mm Luftdurchlässigkeit
								Klasse 4, EN 12207:2001 Wasserdichtigkeit bis Klasse AE 1800, EN
								12208:2001 Wärmedämmung Uw ab 0,72 W/(m2K) Schalldämmung Klasse
								C5/B5,EN 12210:2001
							</Card.Text>
							<Card.Text className="text-bold">
								Zwei Dämmausführungen der Profile – Version MB-104 Passive SI
								mit zusätzlicher EPS-Dämmung und MB-104 Passive Aero mit
								zusätzlicher AERO-Dämmung
							</Card.Text>
							<Card.Text className="text-bold">
								Zwei-Komponenten-Mitteldichtung
							</Card.Text>
							<Card.Text>
								* – Uw für ein Drehfenster MB-104 Passive Aero mit den Maßen
								1230 x 1480 mm, mit einem Isolierglas Ug=0,5 W/(m²K) mit warmer
								Kante Chromatech Ultra
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.3.5.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="alufenster10"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Falu10;
