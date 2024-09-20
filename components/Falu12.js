import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

function Falu12() {
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
						src="/assets/fpvctest.png"
						width={500}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="alufenster12"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Aluprof MB-70</h1>
							<Card.Text>
								MB-70 ist ein modernes Aluminium-System für anspruchsvolle
								architektonische Anwendungen im Bereich der äußeren Verkleidung,
								darunter Fenster, Türen, Windfänge, Schaufenster und
								Raumstrukturen. Die Profile des Systems sind dreikammerig
								konstruiert, was schlanke und dennoch robuste Konstruktionen
								ermöglicht.
							</Card.Text>
							<Card.Text>
								Dank spezieller thermischer Trennungen und hochwertiger
								Dichtungen weist das System einen bemerkenswert niedrigen
								Wärmedurchgangskoeffizienten auf, was gerade angesichts der
								steigenden Anforderungen an Energieeffizienz und Umweltschutz
								von großer Bedeutung ist.
							</Card.Text>

							<Card.Text>
								Die Vielseitigkeit des Systems zeigt sich auch in der
								Flexibilität bei der Verwendung von Glaspaketen mit
								verschiedenen Dicken, sowohl in Fenstern als auch in festen
								Elementen. Zudem bietet das System eine breite Palette von
								Farboptionen in der Standardausführung, um den individuellen
								Bedürfnissen und Vorlieben der Kunden gerecht zu werden.
							</Card.Text>
							<Card.Text>
								Darüber hinaus dient das MB-70 System als Grundlage für Lösungen
								mit erhöhter Wärmedämmung, wie MB-70 HI und MB-70US HI, sowie
								für Kalt-Warm-Fassaden, die auf dem MB-70CW HI-Fenster basieren.
								Es ermöglicht auch die Konstruktion von einbruchhemmenden
								Fenstern und Türen in verschiedenen Sicherheitsklassen, was
								einen zusätzlichen Schutz bietet.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Falu12;
