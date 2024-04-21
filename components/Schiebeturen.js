import React from "react";
import Head from "next/head";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

function Schiebeturen() {
	return (
		<Container
			fluid
			className="pt-4 mt-2 bg-light text-dark align-items-center justify-content-center"
		>
			<Head>
				<title>Hochwertige Schiebetüren | Fenster Figiel</title>
				<meta
					name="description"
					content="Entdecken Sie unsere breite Auswahl an hochwertigen Schiebetüren aus PVC und Aluminium bei Fenster Figiel. Erfahren Sie mehr über unsere maßgeschneiderten Lösungen und lassen Sie sich von unserer Expertise überzeugen."
				/>
			</Head>
			<Row className="text-center mt-2  pt-5">
				<h1 className="text-bold text-uppercase">
					Wir sind Ihre Schiebetüren Experten in Mönchengladbach
				</h1>
				<h5 className="py-1">
					Als Spezialisten für Schiebetüren bei Fenster Figiel bieten wir
					maßgeschneiderte Lösungen für hochwertige Schiebetürsysteme. Entdecken
					Sie unsere breite Palette an Schiebetüren aus PVC und Aluminium,
					darunter moderne Schiebetüren, Schiebetüren mit integrierten
					Rollläden, elegante Glas-Schiebetüren und vieles mehr.
				</h5>

				<h5 className="py-1">
					Unsere erfahrenen Fachkräfte stehen Ihnen zur Verfügung, um Ihre
					individuellen Bedürfnisse zu erfüllen und Ihre Wohnträume Wirklichkeit
					werden zu lassen. Verlassen Sie sich auf unsere langjährige Erfahrung
					und unser Fachwissen, um die perfekte Schiebetür für Ihr Zuhause zu
					finden. Kontaktieren Sie uns noch heute, um mehr über unsere
					maßgeschneiderten Schiebetürlösungen zu erfahren!
				</h5>
			</Row>
			<Row className="justify-content-center py-3  align-items-center">
				<Col lg={4} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/schiebe1.png"
						width={300}
						height={300}
						className="responsive-image shadow-lg "
						alt="schiebeturen1"
					/>
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text>
								PVC-Schiebetüren - die clevere Lösung für Komfort und Stil!
								Erleben Sie ausgezeichnete Isolierung, geräuscharme Bedienung
								und wartungsarme Pflege mit unseren PVC-Schiebetüren. Ideal für
								moderne Wohnräume und eine harmonische Verbindung zwischen
								Innen- und Außenbereich.
							</Card.Text>
							<Link href="schiebenturenpvc">
								<Button className="btn-primary  btn-lg">
									PVC Schiebetüren entdecken
								</Button>
							</Link>
						</Card.Body>{" "}
					</Card>
				</Col>{" "}
				<Col lg={4} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/schiebe2.png"
						width={300}
						height={300}
						className="responsive-image  "
						alt="schiebeturen2"
					/>
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text>
								Moderne Aluminium-Schiebetüren - ein eleganter Zugang zum
								Freien! Entdecken Sie unsere hochwertigen Aluminium-Schiebetüren
								mit schlankem Design und langlebiger Konstruktion. Perfekt für
								stilvolle Wohnräume und den nahtlosen Übergang zur Terrasse oder
								zum Garten.
							</Card.Text>
							<Link href="schiebenturenalu">
								<Button className="btn-primary  btn-lg">
									Aluminium Schiebetüren entdecken
								</Button>
							</Link>
						</Card.Body>{" "}
					</Card>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Schiebeturen;
