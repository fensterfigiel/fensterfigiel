import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Image from "next/image";

function Fpvcmit6() {
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
						src="/assets/fpvctest.png"
						width={500}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="pvcfenstermitalu4"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								Kömmerling Mitteldichtungssystem AluClip Zero
							</h1>
							<Card.Text>
								Das Kömmerling MD mit dem AluClip Zero Aufsatz vereint das
								moderne Aussehen von Aluminiumfenstern mit den Vorzügen von
								Kunststofffenstern. Durch die Verwendung dieser Technologie
								können wir uns vollständig von den Kunststoffaußensprossen
								verabschieden.
							</Card.Text>
							<Card.Text>
								Das AluClip Zero System bietet drei verschiedene
								Designvarianten: Verbundglas mit Rahmen und Flügel, Rahmen mit
								Flügel sowie Flügel mit Glas. Die Aluminium-Aufsatzschalen
								AluClip dienen nicht nur als Schutz vor den schädlichen
								Auswirkungen von UV-Strahlen auf die Fensterkonstruktion,
								sondern auch als zusätzliche thermische Barriere, die den
								Uw-Wert verbessert.
							</Card.Text>
							<Card.Text>
								{" "}
								Das Kömmerling 76 Mitteldichtungssystem mit AluClip Zero – in
								verschiedenen Design-Varianten erhältlich: Drei verschiedene
								Ausführungen für unterschiedliche Designpräferenzen:
								flächenbündige Optik, Ganzglas-Optik und klassische
								Holz-Aluminium Optik. Kompatibilität mit wesentlichen
								Komponenten des Kömmerling 76 Systems gewährleistet.
							</Card.Text>
							<Card.Text>
								Erweitert das Einsatzspektrum für architektonisch anspruchsvolle
								Bauvorhaben. Kombiniert die optischen Eigenschaften von
								Aluminiumprofilen mit den funktionalen Vorteilen von Kunststoff.
								Außen bietet die Aluminium-Vorsatzschale vielfältige
								Farbmöglichkeiten, während innen Kunststoffprofile für geringen
								Pflegeaufwand, Formstabilität und hohe Funktionssicherheit
								sorgen. Ökologisch vorbildlich durch Verwendung von recycelten
								Materialien und bleifreiem PVC mit „grünen“ Stabilisatoren auf
								Calcium/Zink Basis.
							</Card.Text>
							<Card.Text>
								- <strong>Technische Planung und Prospekte verfügbar.</strong>
							</Card.Text>
							<Card.Text>
								- <strong>Patentiertes Design.</strong>
							</Card.Text>
							<Card.Text>
								-{" "}
								<strong>
									Kompatibel mit Verglasungen von 36 – 50 und 48 – 56 mm Dicke.
								</strong>
							</Card.Text>
							<Card.Text>
								- <strong>Uf-Wert von 1,1 bis 1,2 W/(m²K).</strong>
							</Card.Text>
							<Card.Text>
								- <strong>Recyclebar.</strong>
							</Card.Text>
							<Card.Text>
								- <strong>Außen Aluminium-Optik, innen neutral weiß.</strong>
							</Card.Text>
							<Card.Text>
								-{" "}
								<strong>
									Vielfältige Farboptionen durch Veredelungstechniken wie
									Eloxal- und Pulverbeschichtung.
								</strong>
							</Card.Text>
							<Card.Text>
								- <strong>Pflegeleicht, langlebig und robust.</strong>
							</Card.Text>
							<Card.Text>
								-{" "}
								<strong>
									Verwendung von bleifreien Stabilisatoren auf
									Calcium/Zink-Basis für alle Kunststoffprofile.
								</strong>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Fpvcmit6;
