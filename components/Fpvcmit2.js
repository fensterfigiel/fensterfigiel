import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Fpvcmit2() {
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
						src="/assets/1.2.1.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="pvcfenstermitalu1"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Kömmerling 76 AluClip MD </h1>
							<Card.Text>
								Mitteldichtungssystem, 76 mm Bautiefe, 6 Kammern,
								flächenversetzt
							</Card.Text>
							<Card.Text>
								Kombination aus Kunststoffprofil und Aluminium-Schale, außen
								witterungsbeständig und schmutzabweisend, innen eine behagliche
								warme Oberfläche die AluClip Schalen werden in den Ecken stumpf
								geschnitten und sind dadurch leicht zu verarbeiten
								Hochwärmedämmendes 6-Kammer Mitteldichtungssystem mit 76mm
								Bautiefe, geradlinigem Design und schmalen Profilansichten.
								komplette Profilserie (Haupt- und Nebenprofile) wird mit
								umweltfreundlichem Calcium/Zink "greenline" statt mit Blei
								stabilisiert 3 Dichtungen für optimalen Bewitterungsschutz
								erhöhte Wärmedämmung durch zusätzliche Flügelfalzdichtung die
								äußeren Anschläge der Profile sind um ca. 10° abgeschrägt
								zurückversetzte Glasleiste mit anextrudierter Dichtlippe für
								bessere Optik Entwässerung wahlweise nach vorn oder unten
								gebrauchsmustergeschützte Stahlarmierung gemäß Systemgeber
								Vorgaben Verschraubung der Ecklager am Rahmen durch 3
								Profilstege und in die Stahlarmierung möglich
								Schließplattenbefestigung direkt in die Stahlarmierung möglich
								EPDM- oder verschweißbare Dichtungen in schwarz oder grau
								Verglasungsdicken bis 48 mm verdeckt liegende als auch sichtbare
								Beschläge möglich
							</Card.Text>
							<Card.Text className="text-bold">
								Wärmedämmung: Uw- Wert berechnet nach DIN EN 10077-1 oder
								geprüft nach pr EN 12412-2
							</Card.Text>

							<Card.Text className="text-bold">
								Werkstoff:hochschlagzähes PVC nach DIN 7748, Mindestkennwert
								nach EN ISO 1163: PVC-U, ELP, 082-50-T28
							</Card.Text>
							<Card.Text className="text-bold">
								Farben: Innen: PVC weiß ähnlich RAL 9016 Außen: Aluminium
								eloxiert oder pulverbeschichtet in RAL-Farbtönen
							</Card.Text>
							<Card.Text className="text-bold">
								Farben: Stahl: gemäß Systemgeber Vorgaben
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Fpvcmit2;
