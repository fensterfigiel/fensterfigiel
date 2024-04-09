import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Falu8() {
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
							<h1 className="text-bold">Aluprof MB-86N </h1>
							<Card.Text>
								Fenster des Systems Aluprof MB-86 zeichnen sich durch eine hohe
								Wärmedämmung aus. Konstruktionen auf der Basis von
								MB-86-Profilen besitzen eine hohe Steifigkeit und ermöglichen
								große und schwere Fenster.
							</Card.Text>
							<Card.Text>
								Bei Aluprof MB-86 wurde als erstem Fenstersystem aus Aluminium
								weltweit Aerogel eingesetzt – hoch wärmedämmendes Material, das
								auch in der Raumfahrt Verwendung findet.
							</Card.Text>

							<Card.Text className="text-bold">
								PROFIL - Einbautiefe – 77 mm (Rahmen) und 86 mm (Flügel)
								Energiesparfenster sind in drei Wärmedämmungs-Varianten Uf
								erhältlich: MB-86ST – ab 1,3 W/m²K MB-86SI – ab 0,9 W/m²K
								MB-86AERO – ab 0,5 W/m²K [Schätzung für eine Zweikammerscheibe
								Ug = 0,5 W/m²K]
							</Card.Text>
							<Card.Text className="text-bold">
								BESCHLAG - Wählbare Beschläge: Sobinco Winkhaus
							</Card.Text>
							<Card.Text className="text-bold">
								SCHEIBEN - Verglasungsdicke 13,5 bis 58,5 mm (feste Verglasung)
								21 bis 67,5 mm (Flügel)
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.3.4.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="alufenster8"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Falu8;
