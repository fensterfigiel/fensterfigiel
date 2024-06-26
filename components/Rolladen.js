import React from "react";
import Head from "next/head";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

function Rolladen() {
	return (
		<Container
			fluid
			className="pt-4 mt-2 bg-light text-dark align-items-center justify-content-center"
		>
			<Head>
				<title>Fenster Rolladen | Fenster Figiel</title>
				<meta
					name="description"
					content="Entdecken Sie unsere hochwertigen Rolladen für effektiven Schutz vor Sonneneinstrahlung, Wärme und unerwünschten Blicken. Als führende Rolladenexperten bieten wir maßgeschneiderte Lösungen für Ihre Bedürfnisse und Anforderungen an. Erfahren Sie mehr über unsere Aufsatzrolladen, Vorbaurolladen, Insektenschutzrolladen und Raffstoren."
				/>
			</Head>
			<Row className="text-center mt-2 pt-5">
				<h1 className="text-bold text-uppercase">
					Wir sind Rolladenspezialisten
				</h1>
				<h5 className="py-1">
					Als führende Rolladenexperten bei Fenster Figiel bieten wir
					maßgeschneiderte Lösungen für Ihre Bedürfnisse und Anforderungen an.
					Unsere hochwertigen Rolladen, darunter Aufsatzrolladen,
					Vorbaurolladen, und Insektenschutzrolladen, bieten effektiven Schutz
					vor Sonneneinstrahlung, Wärme, und unerwünschten Blicken.
				</h5>
				<h5 className="py-1">
					Mit unseren Raffstoren erhalten Sie vielseitige Sonnenschutzsysteme,
					die ästhetisch in die Architektur integriert sind und gleichzeitig
					effektiven Schutz bieten. Entdecken Sie unsere breite Palette an
					Rolladenoptionen und lassen Sie sich von unserer langjährigen
					Erfahrung und Expertise überzeugen!
				</h5>
			</Row>
			<Row className="justify-content-center py-3  align-items-center">
				<Col lg={4} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/Aufsatz1.jpg"
						width={300}
						height={300}
						className="responsive-image shadow-lg "
						alt="fensterrolladen1"
					/>
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text>
								Aufsatzrolladen bieten eine effektive Möglichkeit, Ihr Zuhause
								vor Sonneneinstrahlung, Wärme und unerwünschten Blicken zu
								schützen. Mit einer unauffälligen Installation direkt über dem
								Fenster sorgen sie für eine optimale Nutzung des Wohnraums.
							</Card.Text>
							<Link href="aufsatzrolladen">
								<Button className="btn-primary  btn-lg">Aufsatzroladen</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/rolle1.png"
						width={300}
						height={300}
						className="responsive-image shadow-lg "
						alt="fensterrolladen2"
					/>
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text>
								Unsere Vorbaurolladen sind eine praktische Lösung für den
								Sonnen- und Sichtschutz Ihrer Fenster. Mit einer einfachen
								Installation vor dem Fenster bieten sie eine effektive
								Möglichkeit, die Raumtemperatur zu regulieren und Ihre
								Privatsphäre zu wahren.
							</Card.Text>
							<Link href="vorbaurolladen">
								<Button className="btn-primary  btn-lg">Vorbaurolladen</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/roll3.png"
						width={300}
						height={300}
						className="responsive-image  "
						alt="fensterrolladen3"
					/>
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text>
								Insektenschutzlösungen bieten einen zuverlässigen Schutz vor
								lästigen Insekten, während sie gleichzeitig eine optimale
								Belüftung der Räume ermöglichen. Mit hochwertigen Materialien
								und maßgeschneiderter Montage bieten sie einen effektiven Schutz
								für Ihr Zuhause.
							</Card.Text>
							<Link href="insektenschutz">
								<Button className="btn-primary  btn-lg">Insektenschutz</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/raff4.png"
						width={300}
						height={300}
						className="responsive-image  "
						alt="fensterrolladen4"
					/>
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text>
								Raffstoren sind vielseitige Sonnenschutzsysteme, die sowohl für
								die ästhetische Integration in die Architektur als auch für
								effektiven Schutz vor Sonneneinstrahlung und unerwünschten
								Blicken in Gebäuden konzipiert wurden.
							</Card.Text>
							<Link href="raffstoren">
								<Button className="btn-primary  btn-lg">Raffstoren</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Rolladen;
