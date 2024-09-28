import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Link from "next/link";

import Image from "next/image";

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
								eine fachgerechte Installation Ihrer neuen Fenster für optimale
								Leistung. Wir sind Ihr Fensterbauer in der Nähe, der Ihnen auch
								bei Reparaturen zur Seite steht.
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
							<Row className="text-center align-items-center justify-content-center">
								<Link href="fenster">
									<Button className="btn-primary w-50">
										Entdecken Sie unsere Fenster
									</Button>
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
