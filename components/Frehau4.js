import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Image from "next/image";

function Frehau4() {
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
			id="1"
			fluid
			className="mt-5 py-5 align-items-center bg-light text-dark justify-content-center "
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/Rehausynego80.png"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="alufenster2"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Rechau Synego 80</h1>
							<Card.Text>
								Mit bis zu 50 % höherer Wärmedämmung im Vergleich zu
								Standardfenstern trägt SYNEGO 80 maßgeblich zur Reduzierung der
								Heizkosten bei.
							</Card.Text>{" "}
							<Card.Text>
								Kammeraufbau: 7-Kammer-Rahmen und 6-Kammer-Flügel für
								hervorragende Dämmwerte
							</Card.Text>
							<Card.Text>
								Bautiefe: 80 mm für schlanke Profilansichten
							</Card.Text>
							<Card.Text>
								Verglasung: Standardmäßig mit Dreifachverglasung bis zu 51 mm​
							</Card.Text>
							<Card.Text>
								Dichtungssystem: Drei Dichtungsebenen für optimalen Schutz
							</Card.Text>
							<Card.Text className="text-bold">
								Energieeffizienz: Uf-Wert bis zu 0,94 W/m²K
							</Card.Text>
							<Card.Text className="text-bold">
								Schallschutz: Reduziert Lärm um bis zu 20-fach
							</Card.Text>
							<Card.Text className="text-bold">
								Sicherheit: Erhöhter Einbruchschutz durch verstärkte Beschläge
							</Card.Text>
							<Card.Text className="text-bold">
								Oberfläche: HDF-Technologie für glatte und pflegeleichte
								Oberflächen
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Frehau4;
