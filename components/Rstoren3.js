import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Insektenschutz1 from "./Insektenschutz1";

function Rstoren3() {
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
							<h1 className="text-bold">
								Raffstoren im Unterputzsystem SkyFlow SZF/BX
							</h1>
							<Card.Text>
								Die Unterputz-Version BX der Raffstoren wurde speziell
								entwickelt, um eine einfache und zeitsparende Montage in neuen
								Gebäuden zu ermöglichen.
							</Card.Text>
							<Card.Text className="text-bold">
								Der Schutzkasten, hergestellt aus robustem rollgeformtem
								Aluminium, bildet dabei das Kernstück des Systems.
							</Card.Text>
							<Card.Text>
								Dieser Kasten ist vielseitig einsetzbar und kann optional mit
								einem beidseitigen Putzträger ausgestattet werden, was eine
								nahtlose Integration in die Gebäudefassade ermöglicht.
							</Card.Text>
							<Card.Text className="text-bold">
								Darüber hinaus verfügt das System über speziell angepasste
								Führungsschienen in zwei verschiedenen Größen, die eine einfache
								und unkomplizierte Montage gewährleisten.
							</Card.Text>
							<Card.Text>
								Diese Führungsschienen sind so konzipiert, dass sie sich optimal
								in das Gesamtdesign des Gebäudes einfügen. Die maximale Größe
								der Raffstoren beträgt 4500 × 4000 mm, was eine maximale Fläche
								von bis zu 18 m² abdeckt.
							</Card.Text>
							<Card.Text>
								Dieses System bietet somit eine ideale Lösung für moderne
								Gebäudearchitekturen, die Wert auf eine ästhetische Integration
								und effiziente Funktionalität legen.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/raff3.png"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="raffstoren3"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Rstoren3;
