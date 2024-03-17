import React from "react";
import Head from "next/head";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

function Fenster() {
	return (
		<Container
			fluid
			className="pt-3 mt-2 bg-light text-dark align-items-center justify-content-center"
		>
			<Row className="text-center mt-2  pt-5">
				<h1 className="text-bold text-uppercase">
					Wir sind Fensterspezialisten
				</h1>
				<h5 className="py-1">
					Wir sind Fensterspezialisten bei Fenster Figiel.
				</h5>{" "}
				<h5>
					{" "}
					Mit langjähriger Erfahrung und Fachkompetenz bieten wir
					maßgeschneiderte Lösungen für hochwertige Fensterprodukte und sind
					bekannt für unsere herausragende Handwerkskunst und unser Engagement
					für Kundenzufriedenheit.
				</h5>
			</Row>
			<Row className="justify-content-center py-3  align-items-center">
				<Col lg={4} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/fenster11.png"
						width={300}
						height={300}
						className="responsive-image shadow-lg "
						alt="termoisolatie2"
					/>{" "}
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text>
								PVC-Fenster - die smarte Wahl für Komfort und Umweltbewusstsein!
								Genießen Sie ausgezeichnete Isolierung, einfache Pflege und
								Langlebigkeit. Entdecken Sie unsere PVC-Fensterkollektion für
								Ihr Zuhause!
							</Card.Text>
							<Link href="fensterpvc">
								<Button className="btn-primary btn-md">PVC</Button>
							</Link>
						</Card.Body>{" "}
					</Card>
				</Col>{" "}
				<Col lg={4} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/fenster12.png"
						width={300}
						height={300}
						className="responsive-image shadow-lg "
						alt="termoisolatie2"
					/>{" "}
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text>
								Entdecken Sie unsere PVC-Fenster mit Aluminiumschale, die
								Langlebigkeit, Stil und Energieeffizienz vereinen. Mit schlanken
								Profilen und hochwertigen Materialien bieten sie eine moderne
								Ästhetik für zeitgemäße Architektur. Investieren Sie jetzt in
								die Zukunft Ihres Hauses!
							</Card.Text>
							<Link href="fensterpvcmitalu">
								<Button className="btn-primary btn-md">
									PVC mit aluschale
								</Button>
							</Link>
						</Card.Body>{" "}
					</Card>
				</Col>{" "}
				<Col lg={4} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/fenster13.png"
						width={300}
						height={300}
						className="responsive-image  "
						alt="binnenisolatie2"
					/>{" "}
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text>
								Moderne Aluminiumfenster - Langlebigkeit, Stil und
								Energieeffizienz vereint! Entdecken Sie unsere Auswahl an
								schlanken Profilen und hochwertigen Materialien für zeitgemäße
								Architektur. Jetzt informieren und investieren!
							</Card.Text>
							<Link href="fensteralu">
								<Button className="btn-primary btn-md">ALU</Button>
							</Link>
						</Card.Body>{" "}
					</Card>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Fenster;
