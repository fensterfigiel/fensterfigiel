import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Image from "next/image";

function Frehau2() {
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
						src="/assets/RehauArtevo.png"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="alufenster2"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								Premiumfenster der nächsten Generation
							</h1>
							<Card.Text>
								Das innovative ARTEVO-Fenstersystem von REHAU kombiniert
								modernste Materialien mit herausragender Energieeffizienz und
								Nachhaltigkeit.
							</Card.Text>
							<Card.Text>
								Nachhaltigkeit: ARTEVO TERRA verwendet bio-attribuiertes PVC mit
								bis zu 90 % geringerem CO₂-Fußabdruck
							</Card.Text>
							<Card.Text>
								Materialinnovation: RAU-FIPRO X für hohe Stabilität ohne
								Stahlverstärkung
							</Card.Text>
							<Card.Text>
								Energieeffizienz: Uw-Werte bis zu 0,61 W/(m²K) mit
								Dreifachverglasung
							</Card.Text>
							<Card.Text>
								Designvielfalt: Über 2.000 Farb- und Gestaltungsoptionen
							</Card.Text>

							<Card.Text className="text-bold">
								Zertifizierung: Passivhaus-zertifiziert​
							</Card.Text>
							<Card.Text className="text-bold">
								Pflegeleicht: HDF-Oberfläche für glatte, schmutzabweisende
								Flächen
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Frehau2;
