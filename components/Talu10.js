import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Image from "next/image";

function Talu10() {
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
						src="/assets/1.4.2.5.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="turenalu10"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Schüco ADS 75</h1>
							<Card.Text>
								Hohe Wirtschaftlichkeit mit exzellenten Leistungseigenschaften:
								Die Türserie Schüco ADS 75 SimplySmart kombiniert hervorragende
								Wärmedämmeigenschaften mit hoher Stabilität und rationeller
								Verarbeitung in einem System.
							</Card.Text>
							<Card.Text>
								Eine intelligente Neuerung ist die Möglichkeit, das System
								innerhalb einer Bautiefe mit zusätzlichen Komponenten wie z. B.
								einer Mitteldichtung zu skalieren, um unterschiedliche
								Kundenanforderungen maßgeschneidert zu erfüllen.
							</Card.Text>
							<Card.Text>
								Schüco ADS 75 BL (Basic Line) SimplySmart ist als Basisvariante
								der Bautiefe 75 mm das direkte Pendant zur Türserie Schüco ADS
								75 HD.HI. Dank des 5-Kammer-Profilaufbaus mit doppelten
								Dämmebenen ist der zusätzliche Einsatz von
								Schaumverbund-Isolierstegen oder Glasfalzdämmungen nicht
								erforderlich. In dieser Ausführung werden Uf-Werte bis
								1,9 W/(m²K) erreicht.
							</Card.Text>
							<Card.Text>
								Mit dem wegweisenden 5-Kammer-Profilaufbau wird gleichzeitig
								eine deutliche Erhöhung der Statikwerte erreicht: Ein
								schubweicher Hybridverbund im Türflügel, mit schublosem Verbund
								an der Außenschale und schubfestem Verbund zwischen den inneren
								Profilkammern, sichert eine hochstabile Konstruktion und
								minimiert gleichzeitig den Bimetalleffekt.
							</Card.Text>
							<Card.Text>
								{" "}
								Durch Integration der zum Systemstandard gehörenden
								Mitteldichtung und Glasfalzdämmung erreicht die Türserie Schüco
								ADS 75 SimplySmart Uf-Werte bis 1,6 W/(m²K). Mit der
								Mitteldichtung lassen sich weitere Höchstleistungseigenschaften
								erreichen wie beispielsweise eine Schlagregendichtigkeit bis zu
								750 Pa.
							</Card.Text>
							<Card.Text>
								Durch die Skalierbarkeit innerhalb des Türsystems können Schüco
								ADS 75 BL SimplySmart und Schüco ADS 75 SimplySmart passgenau
								auf individuelle Kundenspezifikationen ausgelegt werden. Die
								Einsatzbereiche reichen von hochfrequentierten Objekten mit
								Anbindung an die Gebäudesicherheit bis hin zu Wohnhäusern mit
								hohen Ansprüchen an Energieeffizienz, Design und Funktionalität.
							</Card.Text>
							<Card.Text className="text-bold">
								PROFIL Profilbautiefen:
							</Card.Text>
							<Card.Text>
								Blendrahmen, Pfosten, Riegel 75 mm Flügelrahmen (Tür)
								flächenbündig 75 mm Flügelrahmen (Tür) mit innerem Aufschlag 85
								mm Profilansichtsbreiten: Blendrahmen / Sockel, unten 106 mm
								Blendrahmen, seitlich und oben 79 mm Pfosten 94 mm Riegel 94 mm
							</Card.Text>
							<Card.Text>
								Flügelrahmen nach innen öffnend, innen und außen flächenbündig
								umlaufend 73 mm Flügelrahmen nach außen öffnend, innen und außen
								flächenbündig umlaufend 98 mm Flügelrahmen (Tür, mit innerem
								Aufschlag) 73 mm Stulpprofil 65 mm Flügelsprosse 94 mm
							</Card.Text>
							<Card.Text className="text-bold">
								BESCHLAG Schloss (im Standard):
							</Card.Text>
							<Card.Text>
								automatische 5-Punkt Fuhr 855GL typ 3 Einsatz mit 3 Schlüsseln
								Schloss (in Option): Fuhr 833 Fuhr 834
							</Card.Text>
							<Card.Text>Fuhr 834P Fuhr 811 typ 11</Card.Text>
							<Card.Text>
								Option auf die Installation von weiteren Griffen,
								einbruchhemmenden Schlössern, zertifizierten Einsätzen,
								Schnappschlössern, Dreipunktverriegelungen, elektrischen
								Türöffnern, Aufbruchsperren.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Talu10;
