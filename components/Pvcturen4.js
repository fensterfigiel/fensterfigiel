import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Image from "next/image";

function Pvcturen4() {
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
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Kömmerling 76 AD</h1>
							<Card.Text>
								System energiesparender PVC-Türen mit einer Einbautiefe von 76
								mm. Kömmerling 76 mm ist ein innovatives, umfassendes Türsystem.
							</Card.Text>
							<Card.Text>
								Mit dem System Kömmerling 76 mm ist es möglich,
								Türkonstruktionen zu schaffen, die an die individuellen
								Kundenbedürfnisse angepasst sind.
							</Card.Text>

							<Card.Text className="text-bold">
								PROFIL - Kömmerling 76 AD 2 Dichtungen Rahmen 76 mm Flügel:
								5-Kammern 76 mm
							</Card.Text>
							<Card.Text className="text-bold">
								BESCHLAG Schloss - 3-Punkt KFV AS 2750 Schließzylinder mit 3
								Schlüsseln Bänder: ROTO Solid PS, in drei Ebenen regulierbare
								Aufschraubbänder
							</Card.Text>
							<Card.Text className="text-bold">
								FÜLLUNGEN - Füllungsdicke von 24 bis 48 mm. Möglichkeit der
								Verwendung von Kammerscheiben, Ziertürpaneelen oder
								Schichtplatten.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.4.1.2.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="pvcturen1"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Pvcturen4;
