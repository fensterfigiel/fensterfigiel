import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Insektenschutz1 from "./Insektenschutz1";

function Insektenschutz4() {
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
							<h1 className="text-bold">Insektenspannrahmen</h1>
							<Card.Text>
								Insektenspannrahmen sind eine äußerst praktische Lösung, um
								Wohnräume vor lästigen Insekten zu schützen, während
								gleichzeitig eine optimale Belüftung gewährleistet wird. Diese
								Rahmen bestehen typischerweise aus einem stabilen
								Aluminiumrahmen, der mit einem feinmaschigen Netz aus Glasfasern
								bespannt ist. Diese Konstruktion ermöglicht es, dass frische
								Luft ungehindert in den Raum gelangt, während Insekten draußen
								bleiben.
							</Card.Text>
							<Card.Text>
								Die Installation von Insektenspannrahmen ist äußerst einfach und
								erfordert keine speziellen Kenntnisse oder Werkzeuge. Sie können
								problemlos an den meisten Fenstertypen angebracht werden und
								lassen sich je nach Bedarf öffnen oder schließen. Dies
								ermöglicht es den Bewohnern, die Luftzirkulation im Raum zu
								kontrollieren und gleichzeitig den Schutz vor Insekten zu
								gewährleisten.
							</Card.Text>

							<Card.Text>
								Ein weiterer Vorteil von Insektenspannrahmen ist ihre
								Langlebigkeit und Wartungsfreundlichkeit. Das
								Aluminiumrahmenmaterial ist robust und korrosionsbeständig,
								während das Glasfasernetz langlebig und widerstandsfähig
								gegenüber äußeren Einflüssen ist. Dadurch bleiben die Rahmen
								über viele Jahre hinweg funktionsfähig und bieten zuverlässigen
								Schutz vor Insekten.
							</Card.Text>
							<Card.Text>
								Darüber hinaus sind Insektenspannrahmen in verschiedenen Farben
								und Größen erhältlich, um sich harmonisch in die Gestaltung des
								Wohnraums einzufügen. Ob in klassischem Weiß, elegantem
								Anthrazit oder Holzoptik, es gibt eine Vielzahl von Optionen, um
								den persönlichen Vorlieben und dem Stil des Hauses gerecht zu
								werden.
							</Card.Text>
							<Card.Text className="text-bold">
								Insgesamt sind Insektenspannrahmen eine äußerst praktische und
								effektive Lösung, um Wohnräume vor Insekten zu schützen, ohne
								dabei auf eine gute Belüftung verzichten zu müssen. Ihre
								einfache Installation, Langlebigkeit und vielseitigen
								Designoptionen machen sie zu einer beliebten Wahl für viele
								Hausbesitzer, die Wert auf Komfort und Funktionalität legen.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.4.2.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="insektenschutz4"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Insektenschutz4;
