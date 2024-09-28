import React, { useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

// Import the type

function Faqfenster() {
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
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Welche Arten von Fenstern bietet Ihre Firma zum Verkauf und
								Einbau an?
							</Accordion.Header>
							<Accordion.Body>
								Unsere Firma bietet eine Vielzahl von Fenstern an, darunter
								Dreh-, Kipp-, Schiebe- und Festverglasungen. Wir führen auch
								spezielle Fenster wie Energiesparfenster, Schallschutzfenster
								und Sicherheitsfenster. Unsere erfahrenen Fachkräfte helfen
								Ihnen gerne bei der Auswahl der besten Option für Ihre
								Bedürfnisse und installieren sie fachgerecht.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Welche Vorteile bieten die von Ihrer Firma angebotenen
								Energiesparfenster?
							</Accordion.Header>
							<Accordion.Body>
								Unsere Energiesparfenster sind so konzipiert, dass sie eine
								effiziente Wärmedämmung bieten, was zu einer Reduzierung der
								Heizkosten führt. Sie helfen auch dabei, den Energieverbrauch zu
								senken und die Umweltbelastung zu verringern. Darüber hinaus
								sorgen sie für eine verbesserte Lärmdämmung und tragen zu einem
								insgesamt komfortableren Wohnraum bei.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Bietet Ihre Firma maßgefertigte Fensterlösungen an?
							</Accordion.Header>
							<Accordion.Body>
								Ja, wir bieten maßgefertigte Fensterlösungen an, die den
								individuellen Anforderungen unserer Kunden entsprechen. Unsere
								erfahrenen Fachleute arbeiten eng mit Ihnen zusammen, um die
								richtige Größe, Form, Materialien und Designoptionen für Ihre
								spezifischen Bedürfnisse zu finden und zu realisieren.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Wie lange dauert in der Regel die Installation von Fenstern
								durch Ihre Firma?
							</Accordion.Header>
							<Accordion.Body>
								Die Dauer der Fensterinstallation hängt von verschiedenen
								Faktoren ab, einschließlich der Anzahl der Fenster, ihrer Größe
								und des Komplexitätsgrades der Installation. In der Regel kann
								die Installation jedoch innerhalb weniger Tage abgeschlossen
								werden. Unsere Fachkräfte arbeiten effizient, um
								sicherzustellen, dass die Arbeit schnell und professionell
								erledigt wird.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Bietet Ihre Firma auch Wartungs- und Reparaturservices für
								Fenster an?
							</Accordion.Header>
							<Accordion.Body>
								Ja, wir bieten auch Wartungs- und Reparaturservices für Fenster
								an. Unser erfahrenes Team kann Ihnen dabei helfen, Probleme mit
								Ihren Fenstern zu identifizieren und zu beheben, sowie
								regelmäßige Wartungsarbeiten durchführen, um ihre Langlebigkeit
								und Leistungsfähigkeit zu gewährleisten.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="6">
							<Accordion.Header>
								Können Sie eine Beratung zur Auswahl der richtigen Fenster für
								mein Zuhause anbieten?
							</Accordion.Header>
							<Accordion.Body>
								Ja, wir bieten eine umfassende Beratung zur Auswahl der
								richtigen Fenster für Ihr Zuhause an. Unsere Fachkräfte
								berücksichtigen dabei Ihre spezifischen Anforderungen, den
								architektonischen Stil Ihres Hauses, Ihre Budgetvorgaben und
								andere wichtige Faktoren, um Ihnen die besten Optionen zu
								präsentieren.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="7">
							<Accordion.Header>
								Erfüllen die von Ihrer Firma angebotenen Fenster die aktuellen
								Energieeffizienzstandards?
							</Accordion.Header>
							<Accordion.Body>
								Ja, alle unsere Fenster entsprechen den aktuellen
								Energieeffizienzstandards. Wir bieten hochwertige Fenster mit
								modernster Wärmedämmtechnologie an, die dazu beiträgt, den
								Energieverbrauch zu senken und den Wohnkomfort zu verbessern.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="8">
							<Accordion.Header>
								Bietet Ihre Firma Finanzierungsmöglichkeiten für den Kauf und
								die Installation von Fenstern an?
							</Accordion.Header>
							<Accordion.Body>
								Ja, wir bieten verschiedene Finanzierungsmöglichkeiten für den
								Kauf und die Installation von Fenstern an. Unsere Mitarbeiter
								stehen Ihnen zur Verfügung, um Ihnen bei der Auswahl der für Sie
								passenden Finanzierungsoptionen zu helfen und Ihnen bei der
								Abwicklung des Prozesses behilflich zu sein.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="9">
							<Accordion.Header>
								Wie unterscheiden sich Schallschutzfenster von herkömmlichen
								Fenstern?
							</Accordion.Header>
							<Accordion.Body>
								Schallschutzfenster sind speziell entwickelte Fenster, die eine
								verbesserte Schalldämmung bieten, um Lärm von außen zu
								reduzieren. Sie sind mit speziellen Schichten und Materialien
								ausgestattet, die den Schall absorbieren und die Übertragung von
								Geräuschen minimieren. Dadurch schaffen sie eine ruhigere und
								angenehmere Umgebung in Ihrem Zuhause.
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="10">
							<Accordion.Header>
								Bieten Sie eine Garantie für die installierten Fenster an?
							</Accordion.Header>
							<Accordion.Body>
								Ja, wir bieten eine umfassende Garantie für die von uns
								verkauften und installierten Fenster. Diese Garantie deckt
								verschiedene Aspekte wie Materialfehler, Montageprobleme und
								andere mögliche Probleme ab. Bitte kontaktieren Sie unser Team
								für weitere Informationen zu unseren Garantieleistungen.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Faqfenster;
