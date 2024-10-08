import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

function Fpvcmit3() {
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

	return (
		<Container
			fluid
			className=" bg-dark mt-5 text-dark py-5 align-items-center justify-content-center"
			style={{
				backgroundImage: `url('/assets/Fpvcmitalu3.png')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Row className="justify-content-center align-items-center text-center">
				<Col lg={8} className="mx-auto my-2">
					<Card className="border-0 bg-transparent text-white ">
						<Card.Body>
							<h1 className="text-bold">Kömmerling MD AluClip Pro</h1>

							<h1>
								Das Kunststoff-Fenstersystem mit aufgeklipster
								Aluminium-Vorsatzschale vereint die Vorteile beider Materialien
								und bietet eine Vielfalt an Farboptionen außen, während die
								Kunststoffprofile innen für geringen Wartungsaufwand und hohe
								Funktionssicherheit sorgen.
							</h1>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Fpvcmit3;
