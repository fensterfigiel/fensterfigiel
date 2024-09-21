import React, { useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";

// Import the type

function Header6() {
	const [accordionData, setAccordionData] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");

	return (
		<Container className="  py-5 " fluid id="web-design-faq">
			<Row className="faq-bg" style={{ height: "300px" }}></Row>

			<Row className="justify-content-center align-items-center">
				<Col lg={8} md={6} xs={12} className="py-5 text-center">
					<h1 className="text-dark py-3 text-uppercase text-bold bg-white rounded">
						Häufige Fragen zu Fenster Figiel
					</h1>
					<h1 className="text-dark py-3 text-uppercase text-bold bg-white rounded">
						Ihrem Fensterbauer in Mönchengladbach und Umgebung
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
								Fenster Figiel ist Ihr Experte für den Verkauf und die
								professionelle Montage von Fenstern, Rollläden, Schiebetüren und
								Haustüren in Mönchengladbach und den umliegenden Städten wie
								Düsseldorf, Krefeld und Neuss. Wir bieten maßgeschneiderte
								Fensterlösungen aus PVC und Aluminium, die genau auf Ihre
								Bedürfnisse abgestimmt sind. Zusätzlich führen wir kleine
								Elektroarbeiten und Umbauten durch, die häufig im Zusammenhang
								mit der Fenstermontage erforderlich sind. Vertrauen Sie auf
								unsere Expertise als erfahrene Fensterbauer in der Region
								Mönchengladbach.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								<span>
									Wie ist die durchschnittliche Wartezeit bei Fenster Figiel ?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Die durchschnittliche Fertigungszeit für PVC-Fenster beträgt bei
								uns ca. 3-4 Wochen, während ALU-Bauelemente, wie z.B. Haustüren,
								etwa 5-6 Wochen benötigen. Nach der Fertigung planen wir die
								Montage sofort nach der Lieferung. Unsere Fensterbauer in
								Mönchengladbach stehen bereit, um Ihre neuen Fenster schnell und
								effizient zu installieren.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								<span>In welchem Umkreis arbeitet Fenster Figiel?</span>
							</Accordion.Header>
							<Accordion.Body>
								Unser Hauptarbeitsbereich erstreckt sich auf einen Umkreis von
								ca. 50 km um Mönchengladbach. Dazu gehören auch Städte wie
								Viersen, Kaarst und Grevenbroich. In Ausnahmefällen,
								insbesondere bei reinen Lieferungen ohne Montage, kann dieser
								Radius erweitert werden. Fenster Figiel ist Ihr
								vertrauenswürdiger Fensterbauer für die gesamte Region
								Niederrhein.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								<span>Sind Anzahlungen bei Fenster Figiel erforderlich?</span>
							</Accordion.Header>
							<Accordion.Body>
								Ja, da unsere Bauelemente individuell auf Maß gefertigt werden,
								bitten wir um eine Anzahlung von 30 % der Bruttogesamtsumme.
								Diese Anzahlung sichert die Produktion Ihrer Fenster,
								Schiebetüren oder Haustüren in unserem Partnerwerk. Fenster
								Figiel garantiert Ihnen hochwertige Produkte und professionellen
								Service in Mönchengladbach und Umgebung.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								<span>
									Gibt es eine Mindestbestellmenge für Fenster bei Fenster
									Figiel?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Obwohl keine strikte Mindestbestellmenge besteht, empfehlen wir
								eine Bestellung von mindestens 3-4 Fenstern, um die
								Logistikkosten optimal zu verteilen. Unser Fensterbauer-Team aus
								Mönchengladbach sorgt dafür, dass auch bei kleineren Projekten
								höchste Qualität und Effizienz gewährleistet sind.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								<span>
									Kann ich staatliche Förderungen für Fenster von Fenster Figiel
									erhalten?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Ja, unsere Fenster und Türen sind förderfähig, z.B. durch die
								BAFA- oder KfW-Förderprogramme. Wir empfehlen, mit einem
								Energieberater zusammenzuarbeiten, um den Förderantrag zu
								stellen und die Erfüllung der technischen Anforderungen für
								energieeffiziente Fenster sicherzustellen. Fenster Figiel
								unterstützt Sie gerne bei der Auswahl förderfähiger
								Fensterlösungen in Mönchengladbach.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="6">
							<Accordion.Header>
								<span>Wie bekomme ich ein Angebot von Fenster Figiel?</span>
							</Accordion.Header>
							<Accordion.Body>
								Ein unverbindliches und kostenloses Angebot erhalten Sie am
								schnellsten, wenn wir einen Termin bei Ihnen vor Ort in
								Mönchengladbach oder einer der umliegenden Städte vereinbaren.
								Während dieses Termins nehmen wir alle erforderlichen Maße und
								zeigen Ihnen Fenstermuster sowie Prospektmaterial. Alternativ
								können Sie uns Ihre genauen Maße und Anforderungen per E-Mail
								senden, und wir erstellen ein individuelles Angebot für Sie.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="7">
							<Accordion.Header>
								<span>
									Wie erhalte ich ein Angebot für Fenster oder Türen bei Fenster
									Figiel?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Um ein unverbindliches und kostenloses Angebot für Fenster,
								Haustüren oder Schiebetüren von Fenster Figiel zu erhalten,
								vereinbaren wir am besten einen Termin bei Ihnen vor Ort in
								Mönchengladbach oder den umliegenden Städten. Vor Ort nehmen wir
								alle benötigten Maße und stellen Ihnen unsere Fenster- und
								Türmodelle vor. Falls Sie sich bereits entschieden haben, können
								Sie uns auch Ihre Maße und spezifischen Anforderungen per E-Mail
								zukommen lassen, um ein individuelles Angebot zu erhalten.
								Fenster Figiel ist Ihr direkter Fensterbauer aus Polen mit
								professionellem Service in Deutschland.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="8">
							<Accordion.Header>
								<span>
									Bietet Fenster Figiel auch Schiebetüren und Haustüren an?
								</span>
							</Accordion.Header>
							<Accordion.Body>
								Ja, neben Fenstern bieten wir auch hochwertige Schiebetüren und
								Haustüren an. Unsere Schiebetüren aus Aluminium und PVC sind
								ideal für Terrassen und Balkone und bieten eine elegante und
								platzsparende Lösung. Haustüren von Fenster Figiel zeichnen sich
								durch ihre Sicherheit, Energieeffizienz und modernes Design aus.
								Kontaktieren Sie uns für ein individuelles Angebot und lassen
								Sie sich von unseren erfahrenen Fensterbauern aus Polen beraten,
								um die beste Lösung für Ihr Zuhause zu finden.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
}

export default Header6;
