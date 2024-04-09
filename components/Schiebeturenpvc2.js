import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Schiebeturenpvc2() {
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
						src="/assets/1.2.2.1.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="schiebeturenpvc1"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Kömmerling PremiDoor 76</h1>
							<Card.Text>
								Erleben Sie ein neues Gefühl von Freiheit mit dem innovativen
								Kömmerling PremiDoor 76 System. Diese Hebeschiebetür bietet eine
								Bautiefe von 179 mm und ermöglicht flexible
								Gestaltungsmöglichkeiten für Terrassen-, Balkon- und
								Wintergartenverkleidungen. Die großflächigen Verglasungen
								vergrößern optisch den Raum und sorgen für eine optimale
								Innenbeleuchtung. Dank unserer Lösungen öffnet sich Ihr Zuhause
								zum Grün vor dem Fenster, und die Türen fügen sich perfekt in
								das Ambiente ein.
							</Card.Text>
							<Card.Text>
								Das PremiDoor 76 System bietet technische Details wie einen
								Glasbereich von bis zu 50 mm, eine optimale thermische
								Isolierung bis zu 1,3 W/m²K und Einbruchschutz bis RC2. Die
								barrierefreie Schwelle ist Standard und das 5-Kammer-Profil mit
								einer Flügelbreite von 76 mm und einer Rahmenbreite von 179 mm
								gewährleistet ausgezeichnete thermische Eigenschaften.
								Hochwertige, effiziente Dichtungselemente sorgen für eine
								zuverlässige Abdichtung, während der Wärmedurchgangskoeffizient
								Uf 1,4W (m²K) eine effektive Wärmedämmung bietet. wird.
							</Card.Text>

							<Card.Text>
								Die moderne barrierefreie Schwelle gewährleistet Ihnen
								Standardkomfort und optimale Wärmedämmung. Das PremiDoor 76
								System ist eine hervorragende Lösung sowohl für Neubauten als
								auch für renovierungsbedürftige Gebäude. Mit PremiDoor 76
								erleben Sie ein Gefühl von vollkommener Freiheit in Ihrem
								Zuhause.
							</Card.Text>
							<Card.Text className="text-bold">
								PROFIL - Diese Konstruktion basiert auf dem Premidoor – Profil
								von Kömmerling. Dreikammer-Profil mit verbesserter
								Widerstandsfähigkeit, Verstärkung mit verzinktem Stahl.
							</Card.Text>
							<Card.Text className="text-bold">
								BESCHLAG - Siegenia AUBI- HS Portal Griffe aus Aluminium
								DIRIGENT. Ein spezielles Führungssystem macht das Öffnen und
								Schließen der Tür ohne großen Kraftaufwand möglich.
							</Card.Text>
							<Card.Text className="text-bold">
								FÜLLUNGEN - Isolierscheibe 48 mm, 4/18/4/18/4 Ug = 0,5 W/m2K.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Schiebeturenpvc2;
