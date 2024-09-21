import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Ogolne1() {
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

	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	const animateIn = {
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	};

	const animateOut = {
		opacity: 0,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	};

	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start(animateIn);
		} else {
			controls.start(animateOut);
		}
	}, [inView, controls, animateIn, animateOut]);

	return (
		<Container
			fluid
			className="d-flex py-3 mt-3 bg-light text-dark align-items-center justify-content-center"
			id="bouwwerkzaamheden2"
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={10} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold text-center">
								Herzlich Willkommen bei Fenster Figiel
							</h1>
							<Card.Text>
								Hier finden Sie viele Informationen über unser Produkt, den
								Herstellungsort, die Lieferung, unsere Firma, zur
								Angebotserstellung nach Kundenbesuch, Bestellungsmodalitäten,
								zur Fertigungsdauer, zur Montagephase und zu Ihren
								Garantieansprüchen.
							</Card.Text>
							<Card.Text className="text-bold">
								Wir liefern und montieren Fenster und Schiebetüren von Schüco
								und Kömmerling (PVC oder PVC Aluschallen), mit elektrischen
								Aufsatzrollläden /Vorbaurollläden oder mechanischen Rollläden +
								Hauseingangstüren in allen Varianten.
							</Card.Text>
							<Card.Text>
								Unsere Orginal Schüco und Kömmerling Bauelemente werden in der
								Firma Okno-pol in Polen hergestellt und direkt aus dem Werk der
								Fa. Okno-pol an unsere Kunden ausgeliefert – ohne
								Zwischenlagerung. Unsere Montagefirma aus Mönchengladbach (3
								poln. Mitarbeiter) arbeitet schon seit 20 Jahren erfolgreich mit
								Okno-Pol zusammen.
							</Card.Text>
							<Card.Text>
								Unser Montage- und Arbeitsbereich beschränkt sich auf den
								Umkreis von ca. 50 km um die Stadt Mönchengladbach herum. In
								Ausnahmefällen, besonders bei Lieferungen ohne Montage, kann
								dieser Umkreis größer sein.
							</Card.Text>
							<Card.Text>
								- Wir erstellen seriöse und möglichst günstige Angebote nach
								einem Besuch beim Kunden vor Ort.
							</Card.Text>
							<Card.Text>
								- Wir prüfen die technischen Voraussetzungen, nehmen s.g
								Kalkulationsmaß für Fensterbauelemente und beraten unsere Kunden
								ausführlich.
							</Card.Text>
							<Card.Text>
								- Wir zeigen Ihnen die Fenstermusterecken, nach Bedarf auch
								komplette Fenster und überlassen Ihnen Prospektmaterial von
								Fenstern, Hebeschiebetüren und Haustüren.
							</Card.Text>
							<Card.Text>
								Unsere Angebote sind natürlich unverbindlich und kostenlos. Wenn
								Sie das Angebot akzeptieren bitten wir Sie um eine 30% Anzahlung
								der Bruttogesamtsumme des Auftrags. Danach kommen wir zum
								zweiten s.g. Bestellaufmaß und bestellen die Fensterbauelemente.
								Die Fertigungszeit beträgt für PVC-Bauelemente wie Fenster und
								Türen, 4-5 Wochen und für ALU-Haustüren 6-7 Wochen.
							</Card.Text>
							<Card.Text>
								Nach der Lieferung der Fensterbauelemente und der Einlagerung
								beim Kunden, kommen wir direkt zur Montage. Wir entsorgen die
								alten Bauelemente mit eigenen Transportmitteln. Die Reihenfolge
								der Fenstermontage besprechen wir mit dem Kunden. Alle
								Arbeitsbereiche werden mit Folie abgedeckt. Unsere Fenster
								werden immer fachgerecht montiert und von außen versiegelt
								(abgedichtet). Je nach vorhandenen freien Kapazitäten können wir
								die Bauelemente auch von innen versiegeln und verputzen und nach
								Bedarf die neuen Rollladenkästen von innen verkleiden. Diese
								Innenarbeiten können wir allerdings erst nach erfolgter,
								standardmäßiger Montage einschätzen und anbieten. Außerdem
								bieten wir auch Elektroanschlussarbeiten, sowie kleine
								Umbaumaßnahmen z.B wegen einer Fenstervergrößerung an.
							</Card.Text>
							<Card.Text>
								Die Garantieansprüche werden durch unsere Montagefirma, ansässig
								in Mönchengladbach und Fa. Okno-pol als Hersteller abgedeckt.
								Ein ausführliches Informationsblatt kann nach Wunsch zur
								Verfügung gestellt werden.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogolne1;
