import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";

function Fpvc1() {
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

	return (
		<Container
			fluid
			className="mt-5 py-5 align-items-center bg-light text-dark justify-content-center "
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.1.1.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="pvcfenster1"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Kömmerling 88 MD</h1>
							<Card.Text>
								Hochwärmedämmendes 7-Kammer Mitteldichtungssystem mit 88mm
								Bautiefe, geradlinigem Design und schmalen Profilansichten
								komplette Profilserie (Haupt- und Nebenprofile) wird mit
								umweltfreundlichem Calcium/Zink "greenline" statt mit Blei
								stabilisiert 3 Dichtungen für optimalen Bewitterungsschutz
								erhöhte Wärmedämmung durch zusätzliche Flügelfalzdichtung die
								äußeren Anschläge der Profile sind um ca. 10° abgeschrägt
								zurückversetzte Glasleiste mit anextrudierter Dichtlippe für
								bessere Optik Entwässerung wahlweise nach vorn oder unten
								Verschraubung der Ecklager am Rahmen durch 3 Profilstege und die
								Stahlarmierung möglich Schließplattenbefestigung direkt in die
								Stahlarmierung EPDM- oder verschweißbare Dichtungen in schwarz
								oder grau Verglasungsdicken bis 58 mm verdeckt liegende als auch
								sichtbare Beschläge durch tiefen Flügelüberschlag möglich
								Einbruchschutz bis RC2 möglich
							</Card.Text>

							<Card.Text className="text-bold">
								Wärmedämmung: Uf = 0,93W/m²K Uw- Wert berechnet nach DIN EN
								10077-1 oder geprüft nach pr EN 12412-2
							</Card.Text>

							<Card.Text className="text-bold">
								Werkstoff: hochschlagzähes PVC nach DIN 7748, Mindestkennwert
								nach EN ISO 1163: PVC-U, ELP, 082-50-T28
							</Card.Text>
							<Card.Text className="text-bold">
								Werkstoff: Farben: PVC weiß ähnlich RAL 9016 PVC weiß mit
								Dekorfolien in RAL- oder Holzstrukturfarben
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Fpvc1;
