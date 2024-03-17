import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Salu8() {
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
							<h1 className="text-bold">Aluprof MB-77HS</h1>
							<Card.Text>
								Aluprof MB-77HS - Hochschiebe-Türen sind die ideale Lösung zur
								Verbindung von Innenräumen oder Wintergärten mit der Außenwelt
								und bieten bequeme Zugänge zu Balkonen, Terrassen oder offenen
								Gartenbereichen. Sie ermöglichen einen ausgezeichneten Kontakt
								zur Umgebung und nehmen im geöffneten Zustand keinen Platz im
								Raum ein, was den Nutzungskomfort weiter erhöht.
							</Card.Text>
							<Card.Text></Card.Text>

							<Card.Text>
								Der MB-77HS gehört zu den Produkten mit den besten Parametern
								und erfüllt alle Anforderungen dieser Produktgruppe. Das System
								bietet zwei verschiedene Varianten für thermische Isolierung (ST
								und HI) und ermöglicht den Bau von exklusiven Türen mit großen
								Abmessungen, gefüllt mit ein- oder zweikammerigem Glas. Dank der
								verwendeten Materialien und technischen Lösungen gewährleistet
								es einen hohen Grad an Wärme- und Schalldämmung.
							</Card.Text>
							<Card.Text>
								Zusätzlich bietet es: Profile, die den Bau von
								bodenschwellenlosen Türen mit einem Flügelgewicht von bis zu 600
								kg, einer Höhe von bis zu 3,24 m und einer Breite von bis zu 3,3
								m ermöglichen. Optionen mit schmalen Pfosten, bei denen die
								sichtbare Breite der Profile an der Türflügelverbindung nur 47,5
								mm oder 50 mm beträgt. Oszillierende Pfostenverbindungen mit
								einem Radius von 90° und 270° für Ecklösungen.
							</Card.Text>
							<Card.Text>
								Eine breite Palette von Füllungen, einschließlich ein- oder
								zweikammerigem Glas, thermischen Abstandshaltern und
								zusätzlichen Isoliermaterialien, die sehr gute Wärme- und
								Schallisolierungseigenschaften bieten. Verschiedene
								Design-Optionen für die Glasleisten: Standard (rechteckig),
								Prestige (abgerundet) und Style (formgebend). Spezielle
								Abdichtungsprofile und Beschläge für hohe Luft- und
								Wasserdichtigkeit.
							</Card.Text>

							<Card.Text className="text-bold">
								PROFIL - Rahmentiefe: 174 mm (Profile mit zwei Laufschienen),
								271 mm (Profile mit drei Laufschienen).{" "}
							</Card.Text>
							<Card.Text className="text-bold">Flügeltiefe: 77 mm</Card.Text>
							<Card.Text className="text-bold">
								BESCHLAG - Möglichkeit zwei, drei oder vier Elemente auf der
								Basis des Zweiwegesystems zu kombinieren.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.2.2.4.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="isolatie3"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Salu8;
