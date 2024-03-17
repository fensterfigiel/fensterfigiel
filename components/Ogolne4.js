import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Ogolne4() {
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
			duration: 1,
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
			className="d-flex py-3 bg-light text-dark align-items-center justify-content-center"
		>
			<Row className="justify-content-center align-items-center">
				<Col lg={5} className={`mx-auto my-2 order-${isMobile ? "2" : "1"}`}>
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text className="text-bold">
								Rollladen bieten nicht nur Ruhe, Intimität und Sicherheit,
								sondern verleihen Ihrem Zuhause auch ein behagliches Ambiente,
								indem sie Kälte, grelles Sonnenlicht und neugierige Blicke
								abhalten.{" "}
							</Card.Text>
							<Card.Text>
								Bei Fenster Figiel finden Sie Rollladen im bewährten und
								anerkannten System EXTE, die mit hochwertigen Profilen mit
								Kammernstruktur hergestellt werden.
							</Card.Text>
							<Card.Text>
								Der Kasten ist mit einem Styroporeinsatz ausgestattet, der eine
								ausgezeichnete Wärmedämmung gewährleistet. Die Steuerung der
								Rollladen kann entweder mit einem Band, dessen Trommel auf oder
								unter Putz platziert wird, einem Kurbelgetriebe oder einem
								Elektroantrieb erfolgen.
							</Card.Text>{" "}
							<Card.Text>
								Bei letzterem können Sie zwischen Schaltern oder einer
								Fernbedienung wählen, die entweder auf oder unter Putz montiert
								werden können.
							</Card.Text>
							<Card.Text>
								Zusätzliche Sperrbügel können angebracht werden, um das Anheben
								des Rollladenpanzers von außen wirksam zu erschweren und so den
								Einbruchschutz zu erhöhen.
							</Card.Text>
							<Row className="text-center align-items-center justify-content-center">
								<Link href="rolladen">
									<Button className="btn-primary  w-50">Rolladen </Button>
								</Link>
							</Row>
						</Card.Body>
					</Card>
				</Col>

				<Col
					lg={5}
					className={`mx-auto my-2 text-center order-${isMobile ? "1" : "2"}`}
				>
					<Image
						src="/assets/rolladen.png"
						width={600}
						height={500}
						className="responsive-image shadow-lg"
						alt="bouw8"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Ogolne4;
