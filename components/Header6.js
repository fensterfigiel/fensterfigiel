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
								<span>Welche Dienstleistungen bietet Fenster Figiel an?</span>
							</Accordion.Header>
							<Accordion.Body>
								Unser Unternehmen Fenster Figiel ist spezialisiert auf den
								Verkauf und die Montage von Fenstern, Rollläden, Fenstertüren
								und vielem mehr. Wir legen Wert auf hochwertige Arbeit und
								individuelle Kundenbetreuung, und unsere maßgeschneiderten
								Lösungen decken eine Vielzahl von Bedürfnissen ab.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								<span>
									Was ist die durchschnittliche Wartezeit bei Fenster Figiel?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Die Wartezeit bei Fenster Figiel variiert je nach Projektumfang
								und Art. Für konkrete Informationen zur Wartezeit bitten wir
								Sie, direkt mit uns Kontakt aufzunehmen, da diese von Fall zu
								Fall unterschiedlich sein kann.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								<span> Wie weit fährt Fenster Figiel für Projekte?</span>
							</Accordion.Header>
							<Accordion.Body>
								Fenster Figiel bedient Mönchengladbach und umliegende Gebiete.
								Unser Aktionsradius kann jedoch je nach Projekt variieren. Für
								spezifische Informationen zu den Standorten, an denen wir tätig
								sind, kontaktieren Sie uns bitte direkt. Düsseldorf, Duisburg
								und mehr.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								<span>
									Sind Vorauszahlungen bei Fenster Figiel erforderlich?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Vorauszahlungen können je nach Projekt und den vereinbarten
								Bedingungen variieren. Für weitere Informationen zu den
								Zahlungsbedingungen bei Fenster Figiel stehen wir Ihnen gerne
								zur Verfügung.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								<span>
									Wo befindet sich die Hauptniederlassung von Fenster Figiel?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Unsere Hauptniederlassung befindet sich in Mönchengladbach,
								genauer gesagt in der Hamerhütte 13 41068 Mönchengladbach. Wir
								bedienen jedoch verschiedene Standorte, abhängig von den
								Projekten, die wir durchführen.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								<span>
									{" "}
									Welche Arten von Fenstern bietet Fenster Figiel an?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Fenster Figiel bietet eine Vielzahl von Fenstern an, darunter
								Aluminium-, Holz- und Kunststofffenster verschiedener Marken und
								Stile. Für weitere Details zu den verfügbaren Optionen nehmen
								Sie bitte Kontakt mit uns auf.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								<span>
									Welche Zertifikate und Maschinen hat Fenster Figiel?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Fenster Figiel verfügt über alle erforderlichen Zertifikate und
								modernste Maschinen für verschiedene Bau- und
								Renovierungsarbeiten. Wir verwenden zertifizierte Materialien
								und Maschinen, um hochwertige Ergebnisse zu gewährleisten.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Header6;
