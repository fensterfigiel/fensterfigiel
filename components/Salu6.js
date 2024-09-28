import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Image from "next/image";

function Salu6() {
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
						alt="schiebeturenalu6"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Aliplast Ultraglide Winkel-Lösung</h1>
							<Card.Text>
								Das Ultraglide Ecklösungssystem ist perfekt für große
								Eckverglasungen geeignet und ideal für kommerzielle und private
								Gebäude, die offene Räume erfordern, wie Terrassen, Veranden,
								Wintergärten und Patios.
							</Card.Text>
							<Card.Text>
								Beim Öffnen der Türen wird der verbindende Pfosten zwischen den
								Flügeln verschoben, wodurch die gesamte Ecke des Raumes ohne
								störende Struktur offen bleibt. Bei kleineren Verglasungen sorgt
								der verschiebbare Eckpfosten für mehr Lichtdurchlass, was die
								Kommunikation erheblich erleichtert.
							</Card.Text>

							<Card.Text>
								Das System kann Flügel mit einem maximalen Gewicht von 400 kg
								tragen und bietet den derzeit kleinsten beweglichen Pfosten auf
								dem Markt (168,5 mm x 168,5 mm). Es ist in zweiflügeliger und
								dreiflügeliger Ausführung erhältlich und ermöglicht verschiedene
								Konstruktionskombinationen (4-, 6-, 12-elementig).
							</Card.Text>
							<Card.Text>
								Zudem bietet es eine breite Palette an Farboptionen, darunter
								die RAL-Farbpalette (Qualicoat 1518), strukturierte Farben,
								Aliplast Wood Colour Effect für holzähnliche Farben, Aliplast
								Loft View für steinähnliche Oberflächen (Qualideco PL-0001),
								Anodisierung (Qualanod 1808) und Bicolor-Optionen.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Salu6;
