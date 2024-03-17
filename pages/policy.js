import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Policy() {
	return (
		<Container fluid className="py-5 mt-2 bg-light text-dark">
			<Row className="text-center">
				<h2 className="py-3">Datenschutz & Impressumserklärung</h2>
			</Row>

			<Row className="justify-content-center mb-3 align-items-center text-center">
				<Col lg={6}>
					<h3>Kontakt und Impressium</h3>
					<p>
						Mustername Alexz Muster <br />
						Tel: 0176 20614741 <br />
						Hamerhütte 13, MG
					</p>
				</Col>
			</Row>

			<Row className="my-2">
				<Col>
					<h3>Datenschutzerklärung</h3>
					<p>
						Wir legen großen Wert auf Ihren Datenschutz und bemühen uns,
						transparent darüber zu sein, wie wir Ihre Informationen sammeln,
						verwenden und schützen.
					</p>
					<p>
						Diese Datenschutzrichtlinie beschreibt, wie Ihre personenbezogenen
						Daten gesammelt, verwendet und weitergegeben werden, wenn Sie die
						Website (Fenster-Figiel) ("Website") verwenden, und informiert Sie
						über Ihre Datenschutzrechte und wie das Gesetz Sie schützt.
					</p>
				</Col>
			</Row>

			<Row className="my-2">
				<Col>
					<h3>Persönliche Informationen</h3>
					<p>
						Bei der Nutzung unserer Website und Dienste kann es vorkommen, dass
						wir bestimmte personenbezogene Daten sammeln, wie z.B. Ihren Namen,
						Ihre E-Mail-Adresse, Ihre Telefonnummer und Ihre Adresse. Diese
						Informationen können gesammelt werden, wenn Sie unser
						Kontaktformular ausfüllen, ein Angebot anfordern oder unsere Dienste
						nutzen.
					</p>
				</Col>
			</Row>

			<Row className="my-2">
				<Col>
					<h5>Warum sammeln wir Ihre Daten?</h5>
					<p>
						Wir sammeln Ihre Daten, um: <br />- Ihnen Informationen über unsere
						Dienstleistungen bereitzustellen <br />
						- Ihre Fragen zu beantworten und Sie bei Ihren Projekten zu
						unterstützen <br />
						- Ihre Angebotsanfragen zu bearbeiten <br />- Verbesserungen an
						unserem Service vorzunehmen
					</p>
				</Col>
			</Row>

			<Row className="my-2">
				<Col>
					<h5>Wie verwenden wir Ihre Informationen?</h5>
					<p>
						Ihre Informationen werden ausschließlich von uns verwendet und ohne
						Ihre Zustimmung nicht an Dritte weitergegeben, es sei denn, dies ist
						gesetzlich vorgeschrieben. Sicherheit Ihrer Daten Wir treffen die
						erforderlichen technischen und organisatorischen Maßnahmen, um Ihre
						Informationen vor Verlust, Missbrauch, unbefugtem Zugriff oder
						Offenlegung zu schützen.
					</p>
				</Col>
			</Row>

			<Row className="my-2">
				<Col>
					<h3>Cookie-Richtlinie</h3>
					<p>
						Unsere Website verwendet Cookies, um die Benutzererfahrung zu
						verbessern. Cookies sind kleine Textdateien, die auf Ihrem Gerät
						gespeichert werden, wenn Sie unsere Website besuchen. Sie helfen
						uns, den Webverkehr zu analysieren und Ihre Vorlieben zu verstehen,
						damit wir unsere Website an Ihre Bedürfnisse anpassen können.
					</p>
					<p>
						Mit der Nutzung unserer Website stimmen Sie der Verwendung von
						Cookies gemäß unserer Cookie-Richtlinie zu. Sie können Cookies auch
						ablehnen, indem Sie die Einstellungen in Ihrem Browser entsprechend
						anpassen. Bitte beachten Sie, dass das Deaktivieren von Cookies die
						Funktionalität unserer Website beeinträchtigen kann.
					</p>
				</Col>
			</Row>

			<Row className="my-2">
				<Col>
					<h3>Änderungen dieser Richtlinie</h3>
					<p>
						Wir behalten uns das Recht vor, diese Datenschutzrichtlinie
						jederzeit zu ändern, daher sollten Sie sie regelmäßig überprüfen.
						Änderungen und Klarstellungen werden sofort nach ihrer
						Veröffentlichung auf der Website wirksam. Wenn wir wesentliche
						Änderungen an dieser Richtlinie vornehmen, werden wir Sie darüber
						informieren, dass sie aktualisiert wurde, damit Sie wissen, welche
						Informationen wir sammeln, wie wir sie verwenden und unter welchen
						Umständen wir sie gegebenenfalls verwenden und/oder offenlegen.
					</p>
				</Col>
			</Row>

			<Row className="my-2">
				<Col>
					<h3>Kontaktieren Sie uns</h3>
					<p>
						Wenn Sie Fragen oder Bedenken hinsichtlich unserer
						Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter den
						angegebenen Kontaktdaten.
					</p>
				</Col>
			</Row>

			<Row className="my-2">
				<Col>
					<h3>Juristische Hinweise</h3>
					<p>
						Diese Website und ihre Inhalte werden von uns betrieben und
						unterliegen den Gesetzen des Landes, in dem wir ansässig sind, und
						den Gesetzen der Europäischen Union. Durch die Nutzung dieser
						Website erklären Sie sich damit einverstanden, sich den
						ausschließlichen Gerichtsstand und die ausschließliche Zuständigkeit
						der Gerichte dieses Landes zu unterwerfen.
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default Policy;
