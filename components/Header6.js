import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function Header6() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="  py-5 " fluid id="web-design-faq">
			<Row className="faq-bg" style={{ height: "300px" }}></Row>

			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-dark py-3 text-uppercase text-bold bg-white rounded">
						Häufige Fragen
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								<span>Welche Dienstleistungen bietet Fenster Figiel an ?</span>
							</Accordion.Header>
							<Accordion.Body>
								Unsere Firma Fenster Figiel spezialisiert sich auf den Verkauf
								und die Montage von Fenstern, Rollläden, Schiebetüren und
								Haustüren. Wir bieten auch kleine Elektroarbeiten bzw. kleine
								Umbaumaßnahmen an, die mit der Fenstermontage oft
								zusammenhängen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								<span>
									Wie ist die durchschnittliche Wartezeit bei Fenster Figiel ?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Nachdem alle technischen Anforderungen, diverse Details und
								Einzelheiten der Bauelemente festgelegt worden sind, beträgt die
								Fertigungszeit für PVC-Fenster ca. 5 Wochen und für
								ALU-Bauelemente ca. 7 Wochen. Die Montage wird direkt nach
								Lieferung geplant.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								<span>
									{" "}
									Wie weit fährt Fenster Figiel für einzelnen Projekte ?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Unser Aktions-, bzw. Arbeitsradius erstreckt sich auf ca. 50 km
								um die Stadt Mönchengladbach herum. In Ausnahmefällen kann er
								noch etwas variieren.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								<span>Sind Anzahlungen bei Fenster Figiel erforderlich ?</span>
							</Accordion.Header>
							<Accordion.Body>
								Da unsere Bauelemente genau auf Maß gefertigt werden und keine
								Standardbauelemente darstellen, bitten wir unsere Kunden um
								Anzahlungen in Höhe von 30 % der Gesamtsumme.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								<span>
									Gibt es Mindestzahlen an Bauelementen bei Fenster Figiel ?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Da unsere Fenster-Bauelemente direkt von unserem Werk in Polen
								zu unseren Kunden in Deutschland ausgeliefert werden, verteilen
								sich die Kosten wesentlich besser, wenn mindestens 4-5
								Bauelemente bestellt werden. Natürlich hängt das auch davon ab
								wie groß diese Bauelemente sind und wie weit wir zur
								Montagestelle fahren müssen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								<span>
									Bekomme ich die staatliche Förderung oder Zuschuss wenn ich
									die Fenster bei Fenster Figiel bestelle ?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Unsere Fenster und Bauelemente sind voll förderungsfähig. Den
								staatlichen Zuschuss, wie z.B „Bafa“- oder „Kfw“ bekommen unsere
								Kunden, wenn Sie mit einem Energieberater zusammen arbeiten, der
								den Antrag stellt und die Erfüllung der erforderlichen
								technischen Anforderungen bezüglich Fensterbauelemente prüft.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								<span>
									Wie bekomme ich ein seriöses Angebot bei Fenster Figiel ?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Am schnellsten bekommen Sie ein seriöses Angebot, wenn wir einen
								Termin vor Ort vereinbaren. Das ist für Sie kostenfrei und
								unverbindlich. Bei diesem Termin bekommen wir alle technische
								Informationen für das Angebot, zeigen Ihnen auch Fenstermuster
								und überlassen Ihnen informationsreiches Prospektmaterial. Wir
								erstellen auch unverbindliche Angebote ohne Besuch vor Ort, aber
								nur wenn wir vorher vom Kunden ausreichendes
								Informationsmaterial zugeschickt bekommen.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Header6;
