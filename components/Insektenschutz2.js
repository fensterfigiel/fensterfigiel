import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";

import Insektenschutz1 from "./Insektenschutz1";

function Insektenschutz2() {
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
						src="/assets/1.4.3.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="insektenschutz1"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								{" "}
								Insektenschutzrolls integriert im Aufsatz-rolladenkasten
							</h1>
							<Card.Text>
								Insektenschutzvorrichtungen sind eine effektive Möglichkeit, das
								Haus vor Insekten zu schützen, ohne dabei die Fenster zu
								verdunkeln. Mit Universalhaken können sie an Fenstern jeder Art
								angebracht werden. Die Rahmen und Führungsschienen bestehen aus
								pulverlackiertem Aluminiumprofil und bieten eine breite
								Farbpalette für eine ansprechende Optik. Zusätzlich können
								Außenecken aus PVC oder Innenecken aus Aluminium gewählt werden,
								um eine robuste Konstruktion zu gewährleisten.
							</Card.Text>
							<Card.Text>
								Das graue Glasfasernetz bietet nicht nur Schutz vor Insekten,
								sondern ermöglicht auch eine klare Sicht nach draußen. Eine
								verstärkende Silikondichtung sorgt für eine zuverlässige
								Abdichtung, während Drehhaken aus rostfreiem Stahl und
								PVC-Scharniere eine einfache Bedienung gewährleisten. Magneten,
								die entweder außen sichtbar oder versteckt angebracht werden
								können, bieten zusätzliche Sicherheit.
							</Card.Text>

							<Card.Text>
								Die Griffe bestehen aus pulverlackierten ZnAl-Legierungen und
								bieten eine angenehme Haptik beim Öffnen und Schließen der
								Insektenschutzvorrichtungen.
							</Card.Text>
							<Card.Text>
								Eine Vielzahl von Farboptionen steht für den
								Fenster-Insektenschutz zur Verfügung, darunter Anthrazit
								(RAL7016), Weiß (9016), Schokoladenbraun (8017), Dunkelbraun
								(8022), Cremeweiß (9001), sowie verschiedene Holzmaserungen wie
								Mahagoni, Nussbaum, Winchester und Golden Oak. Darüber hinaus
								können auch individuelle RAL-Farben nach Absprache gewählt
								werden, um eine perfekte Anpassung an die vorhandene
								Fensterfarbe zu gewährleisten.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Insektenschutz2;
