import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Falu11() {
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
			duration: 1,
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
			className=" bg-dark mt-5 text-dark py-5 align-items-center justify-content-center"
			style={{
				backgroundImage: `url('/assets/Falu11.png')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Row className="justify-content-center align-items-center text-center">
				<Col lg={8} className="mx-auto my-2">
					<Card className="border-0 bg-transparent text-white ">
						<Card.Body>
							<h1 className="text-bold">Aluprof MB-70</h1>

							<h1>
								MB-70 ist ein modernes Aluminiumsystem, das zur Herstellung von
								architektonischen Außenbauelementen mit anspruchsvoller Wärme-
								und Schalldämmung dient, wie verschiedene Fensterarten, Türen,
								Windfänge, Schaufenster und Raumkonstruktionen.
							</h1>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Falu11;
