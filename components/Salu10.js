import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";

function Salu10() {
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
						src="/assets/1.2.3.5.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="schiebeturenalu10"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Aluprof MB-SKYLINE TYPE R</h1>
							<Card.Text className="text-bold">
								Aluprof bringt ein durch Leichtigkeit und Ästhetik
								gekennzeichnetes innovatives Schiebetürsystem auf den Markt
								MB-SKYLINE TYP R. Es ermöglicht die Gestaltung von Glaswänden in
								unbegrenzter Länge, mit unsichtbaren Rahmenelementen – und das
								alles bei Erfüllung der strengsten technischen Anforderungen.
							</Card.Text>
							<Card.Text>
								Das Schiebetürsystem mit verdecktem Rahmen, MB-SKYLINE TYP R,
								basiert auf schlanken Profilen, die den Konstruktionen ein
								modernes Aussehen mit Panoramaausblick verleihen. Die auf dieser
								Konstruktion basierenden Türen verleihen dem Haus einen
								einzigartigen Stil und erhöhen den Rang des gesamten
								Bauvorhabens.
							</Card.Text>

							<Card.Text>
								Die auf Basis dieses Systems gefertigten Türflügel werden
								verdeckt in den unteren und oberen Rahmen eingebaut. Bei der
								Wahl der Ausführung mit einem Motorantrieb oder Verriegelung am
								Pfosten bleiben auch die Seitenprofile des Flügels verdeckt. Der
								Rahmen selbst wurde so konzipiert, dass das Produkt so bequem
								wie möglich zu bedienen ist – mit 23 mm Tiefe ist er daher so
								flach wie möglich.
							</Card.Text>
							<Card.Text>
								Auch die Breite des Pfostens wurde minimiert und die sichtbare
								Verbindung zwischen den Flügeln beträgt nur 25 mm. Die Bautiefe
								der Türprofile beträgt 71 mm, die Rahmentiefe 190 mm.
							</Card.Text>
							<Card.Text>
								Die modernen Schiebedichtungen im Rahmen sind ästhetisch
								ansprechend und geräuschlos im Gebrauch. Die Rollen, auf denen
								der Flügel gleitet, sind aus Edelstahl oder schwarzem Polyamid
								erhältlich. Es gibt zwei Verriegelungsoptionen; manuell mit BT
								Lock-Hardware oder am Pfosten angebracht. Der Motor ist mit
								einem Radiosender und einem Sicherheitsradar ausgestattet. Feste
								Paneele können verwendet werden, wobei die Verglasung in den
								Türrahmen eingefügt wird, um eine ähnliche Optik wie das
								bewegliche Panel zu erzielen. Ein hochmodernes
								Entwässerungssystem mit Rinne.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Salu10;
