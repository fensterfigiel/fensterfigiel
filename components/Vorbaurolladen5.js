import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Vorbaurolladen5() {
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
			className=" bg-dark mt-5 text-dark py-5 align-items-center justify-content-center"
			style={{
				backgroundImage: `url('/assets/Aufsatz1.png')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Row className="justify-content-center align-items-center text-center">
				<Col lg={8} className="mx-auto my-2">
					<Card className="border-0 bg-transparent text-white ">
						<Card.Body>
							<h1 className="text-bold"> Aluprof SKP / GK-P</h1>

							<h1>
								GK-P ist ein System von Ausenrollladen, die in der Bauphase oder
								nachtraglich, z. B. bei Sanierungsarbeiten oder beim Austausch
								von Fenstern montiert werden. Durchgehend durch die direkte
								Montage auf der Gebaudewand.
							</h1>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Vorbaurolladen5;
