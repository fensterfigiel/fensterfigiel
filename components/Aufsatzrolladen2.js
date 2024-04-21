import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Aufsatzrolladen2() {
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
						src="/assets/1.3.3.1.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="aufsatzrolladen2"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Aluprof SKB Styroterm</h1>
							<Card.Text>
								Das SKB Styroterm Rollladen-System von Aluprof ist eine
								technologisch fortschrittliche Lösung, die entwickelt wurde, um
								die Energiebilanz von Gebäuden zu verbessern. Untersuchungen im
								renommierten Forschungsinstitut IFT ROSENHEIM haben gezeigt,
								dass dieses System einen außergewöhnlich niedrigen
								Wärmedurchgangskoeffizienten (U-Wert) von bereits 0,29 W/m²K
								aufweist, was es zu einer der führenden Lösungen in seiner
								Kategorie macht.
							</Card.Text>
							<Card.Text>
								Der Einbau der Rollladen erfolgt ähnlich wie beim SKT
								Opoterm-System, durch direktes Anbringen des Kastens am
								Fensterrahmen mithilfe eines passenden Adapterprofils. Es gibt
								mehrere Varianten des SKB Styroterm-Systems, die zu 90% der auf
								dem Markt erhältlichen Profile passen. Die Konstruktion des
								Systems wurde so gestaltet, dass der Rollladen vollständig in
								die Dämmschicht integriert werden kann, wodurch der Kasten
								praktisch unsichtbar in der Fassade bleibt.
							</Card.Text>

							<Card.Text>
								Der Hauptbestandteil dieses Produkts ist der Kasten, der aus
								einem speziell entwickelten Material mit hervorragenden
								thermischen Eigenschaften besteht. Er ist in zwei Größen
								erhältlich: 260 × 260 mm und 300 × 300 mm.
							</Card.Text>
							<Card.Text>
								Der Einbau des Kastens ist einfach und schnell, indem er direkt
								auf den Fensterrahmen mit einem passenden Adapterprofil montiert
								wird. Diese Konstruktionsweise ermöglicht sowohl den Einsatz in
								Neubauten als auch den Austausch in bestehenden Gebäuden. Das
								SKB Styroterm-System bietet die Möglichkeit, spezielle stählerne
								Verstärkungen (sogenannte statische Konsolen) am Kasten zu
								montieren, um eine angemessene und stabile Funktion der
								Rollladen, insbesondere bei großen Abmessungen, zu
								gewährleisten.
							</Card.Text>
							<Card.Text>
								Diese Verstärkungen zeichnen sich durch ihre einfache Bauweise
								aus und stören nicht die Bauelemente des Rollladens. Außerdem
								sind sie mit sogenannten Formteilen isoliert. Die durchdachte
								Konstruktion des Systems ermöglicht die Herstellung eines
								einzelnen Rollladens sowie eines Satzes von Rollladen in einem
								Kasten.
							</Card.Text>
							<Card.Text>
								Rollläden im System SKB Styroterm verfügen über entsprechende
								Erstprüfungen, die durch ein akkreditiertes Labor durchgeführt
								worden sind. Prüfungen an einem renommierten Forschungsinstitut
								zeigten, dass die vorgeschlagene Lösung sich durch hohe
								Wärmedurchgangskoeffizienten Usb bei bereits 0,40 W/m2K
								auszeichnet. Damit ist dieses System die Nummer 1 unter allen
								Produkten dieser Art.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Aufsatzrolladen2;
