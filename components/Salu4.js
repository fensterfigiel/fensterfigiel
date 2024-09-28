import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Image from "next/image";

function Salu4() {
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
							<h1 className="text-bold">Aliplast Ultraglide Max Light</h1>
							<Card.Text>
								Der Ultraglide Max Light ist ein hochisolierendes System für
								Schiebe- und Hebeschiebetürkonstruktionen, das speziell für den
								Einsatz in Wohngebäuden, sowohl im privaten als auch im
								öffentlichen Bereich, entwickelt wurde.
							</Card.Text>
							<Card.Text>
								Das System wurde unter Berücksichtigung der neuesten
								Anforderungen an Wärmedämmung, Ästhetik und Sicherheit
								entwickelt. Es verwendet eine thermische Trennung mit Breiten
								von 22 mm und 28 mm, die durch Zugabe von Glasfaser ergänzt
								wurde, sowie thermische Einlagen und Unterglasleisten, um die
								thermische Isolierung des Profils zu verbessern.
							</Card.Text>

							<Card.Text>
								Dank seiner Eigenschaften ermöglicht der Ultraglide Max Light
								das Design von Konstruktionen mit sehr großen beweglichen
								Flügeln und einer maximalen Flügelgewicht von bis zu 440 kg.
							</Card.Text>
							<Card.Text>
								Möglichkeit zur Konstruktion großer Verglasungen sorgt für eine
								hervorragende natürliche Beleuchtung der Räume und erleichtert
								deren Gestaltung, während gleichzeitig Stabilität,
								Funktionalität und Leichtigkeit der Konstruktion erhalten
								bleiben.
							</Card.Text>
							<Card.Text className="text-bold">
								System mit erhöhter Wärmedämmung Maximales Flügelgewicht: 440 kg
								Ansichtsbreite Wechselprofil: bis 45 mm
							</Card.Text>
							<Card.Text className="text-bold">
								• Mono-, duo-, 3-rail • Schiebesystem und Hebeschiebesystem •
								Ecklosung 90° Flügel/Flügel (UG ML) • Ecklosung 90° Glas/Glas
							</Card.Text>
							<Card.Text className="text-bold">
								• Flachen Schwelle • Verglasung Außenrahmen: 8 mm – 72 mm •
								Verglasung Flügel: 15 mm – 51 mm
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.2.3.2.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="schiebeturenalu4"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Salu4;
