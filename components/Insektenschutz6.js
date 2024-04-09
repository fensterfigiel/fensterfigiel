import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Insektenschutz1 from "./Insektenschutz1";

function Insektenschutz6() {
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
						src="/assets/1.4.5.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="insektenschutz6"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Insektenschutzrollos Extra</h1>
							<Card.Text>
								Insektenschutzrollos extra bieten eine besonders effektive
								Lösung zum Schutz vor Insekten, indem sie als praktische Rollos
								an Fenstern angebracht werden.
							</Card.Text>
							<Card.Text>
								Diese Rollos bestehen aus feinmaschigem Netzmaterial, das eine
								zuverlässige Barriere gegen Insekten bildet, während
								gleichzeitig die Luftzirkulation im Raum gewährleistet wird.
							</Card.Text>

							<Card.Text>
								Sie sind einfach zu bedienen und können bei Bedarf leicht hoch-
								oder heruntergefahren werden, um den gewünschten Schutz zu
								bieten. Mit ihren vielseitigen Designoptionen passen sich
								Insektenschutzrollos extra nahtlos in das Gesamtbild des
								Wohnraums ein und bieten eine praktische Lösung für alle, die
								Insekten draußen halten möchten, ohne auf frische Luft
								verzichten zu müssen.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Insektenschutz6;
