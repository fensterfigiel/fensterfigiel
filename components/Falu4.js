import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

function Falu4() {
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
			duration: 0.1,
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
			className="mt-5 py-5 align-items-center bg-light text-dark justify-content-center "
		>
			<Row className="justify-content-center  align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Schüco AWS 90 </h1>
							<Card.Text>
								Zur Komplettierung der zunehmend wichtiger werdenden Bautiefe 90
								mm ergänzt Schüco diese neue Fensterserie um die Varianten AWS
								90.SI+ Green und 90 BS.SI+.
							</Card.Text>
							<Card.Text>
								Das neue Aluminium-Blockfenstersystem Schüco AWS 90 BS.SI+
								überzeugt durch zukunftsweisende Wärmedämmung und erfüllt
								höchste architektonische Anforderungen an Design und
								Gestaltungsmöglichkeiten bei nur 90 mm Bautiefe.{" "}
							</Card.Text>

							<Card.Text>
								Mit einem Uf-Wert von 1,2 W/(m2K) einer Ansichtsbreite von 95 mm
								erlangt es sogar Passivhausniveau. Schmale Ansichtsbreiten
								ermöglichen gleichzeitig harmonische Ansichten ohne sichtbare
								Fensterflügel. Darüber hinaus reagiert Schüco mit der neuen
								Fenstergeneration AWS 90.SI+ Green auf die strengeren
								Richtlinien und realisiert hohe C02- Einsparpotenziale für den
								Gebäudesektor.{" "}
							</Card.Text>
							<Card.Text>
								Dabei werden zukunftsweisende ökologische Materialien wiez.B.
								Rizinusöl in den Polyamid- Isolierstegen eingesetzt. Damit ist
								es Schüco als erstem Anbieter gelungen, ein serienfähiges,
								zugelassenes Aluminium-Fenster mit signifikanten Anteilen an
								nachwachsenden Rohstoffen in den Kunststoffen anzubieten und
								damit fossile Rohstoffe zu substituieren.
							</Card.Text>
							<Card.Text className="text-bold">
								PROFIL - Profilbautiefen:Blendrahmen, Pfosten, Riegel 90
								mmFlügelrahmen 100 mmProfilansichtsbreiten: Blendrahmen, unten
								109 mmBlendrahmen, seitlich und oben 84 mmPfosten 104 mmRiegel
								104 mmFlügelrahmen (Fenster) 36 mmFlügelrahmen (Fenstertür) 46
								mmStulpprofil schmal 62 mm
							</Card.Text>
							<Card.Text className="text-bold">
								BESCHLAG - Sicherheit Verdeckt liegendes Beschlagsystem Schüco
								AvanTec SimplySmartEinbruchhemmend in RC 1 N, RC 2 und RC 3
								ausführbar Automation Mit Schüco TipTronic kombinierbar
							</Card.Text>
							<Card.Text className="text-bold">
								SCHEIBEN - Das Aluminium-Fenstersystem mit Wärmedämmung auf
								PassivhausniveauVerglasungsdicke: 12 bis 72 mm (Rahmen) 21 bis
								81 mm (Flügel)
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.3.2.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="alufenster4"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Falu4;
