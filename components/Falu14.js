import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Image from "next/image";

function Falu14() {
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
							<h1 className="text-bold">Aliplast Genesis 75</h1>
							<Card.Text>
								Das Aliplast Genesis 75 ist ein innovatives Fenstersystem mit
								dreikammerigen Profilen, das eine herausragende thermische
								Isolierung bietet und den Anforderungen entspricht, die seit
								2021 gelten (U-Wert ab 0,90).
							</Card.Text>
							<Card.Text>
								Die Grundlage des Genesis 75 Systems bilden 75 mm tiefe
								Rahmenprofile. Genesis 75 ist für die Konstruktion von Fenstern
								in öffentlichen Gebäuden sowie in Einzel- und
								Mehrfamilienhäusern konzipiert.
							</Card.Text>

							<Card.Text>
								Es werden moderne isolierende Materialien verwendet, darunter
								auch eine zusätzliche thermische Dichtung neben der klassischen
								Fensterdichtung, um eine besonders hohe Fensterdichtigkeit zu
								erreichen. Das Fenstersystem Genesis 75 besticht durch sein
								innovatives Design und ästhetische Ausführung.
							</Card.Text>
							<Card.Text>
								Es setzt einen neuen Standard für die Isolierung von Fenstern
								und kombiniert höchste Benutzerfreundlichkeit mit modernem
								Profildesign. Es gibt eine breite Palette an Farboptionen,
								darunter RAL-Farben, strukturelle Farben, Holzimitat-Effekte und
								eloxierte Oberflächen.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/fpvctest.png"
						width={500}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="alufenster14"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Falu14;
