import React, { useEffect, useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

import Image from "next/image";

// Import the type

function SchiebeturenFaq() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="bg-light text-dark  py-5" fluid>
			<Row className="justify-content-center align-items-center">
				<Col lg={4} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-bold text-uppercase">Häufige Fragen</h1>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center">
				<Col lg={9} className="mx-auto">
					<Accordion className="shadow-lg" defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Welche Arten von Schiebetüren bietet Ihre Firma zum Verkauf und
								Einbau an?
							</Accordion.Header>
							<Accordion.Body>
								Unsere Firma bietet eine Vielzahl von Schiebetüren an, die
								speziell auf Ihre Bedürfnisse zugeschnitten sind. Wir führen
								sowohl klassische Schiebetüren als auch moderne, platzsparende
								Lösungen. Unser erfahrenes Team berät Sie gerne, um die beste
								Schiebetür für Ihr Zuhause oder Ihr Unternehmen auszuwählen und
								fachgerecht zu installieren.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Welche Vorteile bieten die von Ihrer Firma angebotenen
								Schiebetüren?
							</Accordion.Header>
							<Accordion.Body>
								Unsere Schiebetüren sind nicht nur ästhetisch ansprechend,
								sondern bieten auch eine Vielzahl praktischer Vorteile. Sie
								maximieren den Raum in Ihrem Zuhause oder Büro, indem sie keinen
								Schwenkbereich benötigen und somit Platz sparen. Darüber hinaus
								bieten sie eine hervorragende Wärmedämmung und Schalldämmung,
								was zu einem energieeffizienten und komfortablen Raumklima
								beiträgt. Unsere erfahrenen Fachkräfte stehen Ihnen bei der
								Auswahl der besten Schiebetür für Ihre Anforderungen zur Seite
								und installieren sie professionell und zuverlässig.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Bietet Ihre Firma maßgefertigte Schiebetürenlösungen an?
							</Accordion.Header>
							<Accordion.Body>
								Ja, wir bieten maßgefertigte Schiebetürenlösungen an, die Ihren
								individuellen Anforderungen entsprechen. Unsere erfahrenen
								Fachleute arbeiten eng mit Ihnen zusammen, um die richtige
								Größe, das richtige Material und das richtige Design für Ihre
								spezifischen Bedürfnisse zu finden und umzusetzen. Wir stellen
								sicher, dass Ihre Schiebetür perfekt zu Ihrem Raum passt und
								fachgerecht installiert wird.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Wie lange dauert in der Regel die Installation von Schiebetüren
								durch Ihre Firma?
							</Accordion.Header>
							<Accordion.Body>
								Die Dauer der Schiebetürinstallation hängt von verschiedenen
								Faktoren ab, einschließlich der Anzahl der Türen, ihrer Größe
								und des Komplexitätsgrades der Installation. In der Regel kann
								die Installation jedoch innerhalb weniger Tage abgeschlossen
								werden. Unsere Fachkräfte arbeiten effizient, um
								sicherzustellen, dass die Arbeit schnell und professionell
								erledigt wird, damit Sie Ihre neuen Schiebetüren so schnell wie
								möglich genießen können.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Bietet Ihre Firma auch Wartungs- und Reparaturservices für
								Schiebetüren an?
							</Accordion.Header>
							<Accordion.Body>
								Ja, wir bieten auch Wartungs- und Reparaturservices für
								Schiebetüren an. Unser erfahrenes Team kann Ihnen dabei helfen,
								Probleme mit Ihren Schiebetüren zu identifizieren und zu
								beheben, sowie regelmäßige Wartungsarbeiten durchführen, um ihre
								Langlebigkeit und Leistungsfähigkeit zu gewährleisten. Wir
								stehen Ihnen bei allen Fragen und Anliegen rund um Ihre
								Schiebetüren zur Verfügung.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Können Sie eine Beratung zur Auswahl der richtigen Schiebetüren
								für mein Zuhause anbieten?
							</Accordion.Header>
							<Accordion.Body>
								Ja, wir bieten eine umfassende Beratung zur Auswahl der
								richtigen Schiebetüren für Ihr Zuhause an. Unsere erfahrenen
								Fachkräfte berücksichtigen dabei Ihre spezifischen
								Anforderungen, den architektonischen Stil Ihres Hauses, Ihre
								Budgetvorgaben und andere wichtige Faktoren, um Ihnen die besten
								Optionen zu präsentieren. Wir stehen Ihnen bei der Auswahl,
								Planung und Installation Ihrer neuen Schiebetüren zur Seite.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Erfüllen die von Ihrer Firma angebotenen Schiebetüren die
								aktuellen Energieeffizienzstandards?
							</Accordion.Header>
							<Accordion.Body>
								Ja, alle unsere Schiebetüren entsprechen den aktuellen
								Energieeffizienzstandards. Wir bieten hochwertige Schiebetüren
								mit modernster Wärmedämmtechnologie an, die dazu beitragen, den
								Energieverbrauch zu senken und den Wohnkomfort zu verbessern.
								Unsere Schiebetüren sind robust, langlebig und energieeffizient,
								und bieten Ihnen Jahre lang Freude und Komfort in Ihrem Zuhause.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="7">
							<Accordion.Header>
								Bietet Ihre Firma Finanzierungsmöglichkeiten für den Kauf und
								die Installation von Schiebetüren an?
							</Accordion.Header>
							<Accordion.Body>
								Ja, wir bieten verschiedene Finanzierungsmöglichkeiten für den
								Kauf und die Installation von Schiebetüren an. Unsere
								Mitarbeiter stehen Ihnen zur Verfügung, um Ihnen bei der Auswahl
								der für Sie passenden Finanzierungsoptionen zu helfen und Ihnen
								bei der Abwicklung des Prozesses behilflich zu sein. Wir möchten
								sicherstellen, dass Sie Ihre neuen Schiebetüren stressfrei und
								bequem erhalten können.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="8">
							<Accordion.Header>
								Wie unterscheiden sich Schallschutz-Schiebetüren von
								herkömmlichen Schiebetüren?
							</Accordion.Header>
							<Accordion.Body>
								Schallschutz-Schiebetüren sind speziell entwickelte
								Schiebetüren, die eine verbesserte Schalldämmung bieten, um Lärm
								von außen zu reduzieren. Sie sind mit speziellen Schichten und
								Materialien ausgestattet, die den Schall absorbieren und die
								Übertragung von Geräuschen minimieren. Dadurch schaffen sie eine
								ruhigere und angenehmere Umgebung in Ihrem Zuhause oder Büro,
								und bieten Ihnen mehr Privatsphäre und Komfort.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="9">
							<Accordion.Header>
								Bieten Sie eine Garantie für die installierten Schiebetüren an?
							</Accordion.Header>
							<Accordion.Body>
								Ja, wir bieten eine umfassende Garantie für die von uns
								verkauften und installierten Schiebetüren. Diese Garantie deckt
								verschiedene Aspekte wie Materialfehler, Montageprobleme und
								andere mögliche Probleme ab. Wir möchten sicherstellen, dass Sie
								mit Ihren neuen Schiebetüren vollkommen zufrieden sind und Ihnen
								langfristigen Schutz und Zuverlässigkeit bieten können.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default SchiebeturenFaq;
