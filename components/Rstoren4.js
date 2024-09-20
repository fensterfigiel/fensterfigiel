import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";

import Insektenschutz1 from "./Insektenschutz1";

function Rstoren4() {
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
						src="/assets/raff4.png"
						width={400}
						height={400}
						className="responsive-image rounded shadow-lg"
						alt="raffstoren4"
					/>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								Raffstoren im Vorbausystem SkyFlow SZF/A
							</h1>
							<Card.Text>
								Die Raffstoren im Vorbausystem wurden speziell für die einfache
								Montage an Fassaden oder in Fensternischen von bereits
								existierenden Gebäuden konzipiert.
							</Card.Text>
							<Card.Text className="text-bold">
								Der Kasten, der in vier Varianten erhältlich ist, besteht aus
								robustem rollgeformtem Aluminium mit einer Stärke von bis zu 1,2
								mm, was eine hohe Langlebigkeit und Stabilität gewährleistet.
							</Card.Text>
							<Card.Text>
								Das System bietet zwei verschiedene Optionen für die Führung der
								Lamellen: entweder mit Führungsschienen, für die speziell
								verstellbare Teleskopgriffe vorgesehen sind, oder mit
								Seilführungen.
							</Card.Text>
							<Card.Text className="text-bold">
								Die maximale Größe für einen einzelnen Raffstore mit
								ALU-Führungsschienen beträgt 4500 × 4000 mm, was eine maximale
								Fläche von bis zu 18 m² abdeckt.
							</Card.Text>
							<Card.Text>
								Bei Verwendung von Seilführungen variieren die maximalen
								Abmessungen je nach Ausführung: entweder 3000 × 4000 mm oder
								4000 × 2500 mm, wobei die maximale Fläche bis zu 12 m² beträgt.
							</Card.Text>
							<Card.Text>
								Diese Vielseitigkeit ermöglicht es, das System an die
								individuellen Anforderungen und architektonischen Gegebenheiten
								verschiedener Gebäude anzupassen.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Rstoren4;
