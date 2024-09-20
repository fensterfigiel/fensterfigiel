import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

function Falu6() {
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
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.3.3.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="alufenster6"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Aluprof MB-79N </h1>
							<Card.Text>
								MB-79N ist das modernste und wirtschaftlichste Fenster- und
								Türsystem im Angebot von Aluprof.
							</Card.Text>
							<Card.Text>
								Es wurde aufgrund der gestiegenen Anforderungen an die
								Wärmedämmung eingeführt. Es wird für die Herstellung von
								Konstruktionen wie Fest-, Kipp-, Dreh- und Kipp-Schiebefenster,
								ein- und zweiflügelige Außentüren sowie auch für
								Schaufensterlösungen mit Türen verwendet.
							</Card.Text>
							<Card.Text>
								Neben der wirtschaftlichen Ausführung MB-79N E, mit einer
								Einkomponenten-Zentraldichtung im Fenster und der Ausführung
								MB-79N ST mit einer.
							</Card.Text>

							<Card.Text>
								Zweikomponenten-Zentraldichtung, gibt es die Ausführung MB-79N
								SI mit der besten Wärmedämmung, deren Profile mit
								Isoliereinsätzen und einer Zweikomponenten-Zentraldichtung
								ausgestattet sind. Für Außentüren ist auch die Variante MB-79N
								SI+ mit Dämmeinlagen im Inneren der Profile und einer
								Zentraldichtung erhältlich.
							</Card.Text>
							<Card.Text></Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Falu6;
