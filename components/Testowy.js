import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

function Testowy() {
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
			className="pt-5 align-items-center  justify-content-center"
		>
			<Row className="align-items-center  justify-content-center">
				<Col>
					<Row className="align-items-center justify-content-center text-center text-dark">
						<Carousel variant="dark">
							<Carousel.Item>
								<div
									className="d-flex align-items-center justify-content-center"
									style={{ height: "100vh" }}
								>
									<Image
										className="slide-mobile"
										src="/assets/7.png"
										alt="First slide"
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<Link href="fenster" className="style-none">
									<Carousel.Caption className="bg-dark-opacity text-white text-bold rounded m-5 text-center">
										<h4 className="mobile-text">
											Günstige PVC-Fenster aus Kömmerlingprofilen in allen
											Varianten und Farben, auch mit Alu-Vorsatzschalen oder
											lackiert.
										</h4>
										<Button>FENSTER</Button>
									</Carousel.Caption>{" "}
								</Link>
							</Carousel.Item>
							<Carousel.Item>
								<div
									className="d-flex align-items-center justify-content-center"
									style={{ height: "100vh" }}
								>
									<Image
										className="slide-mobile"
										src="/assets/schiebeturen.png"
										alt="First slide"
										layout="fill"
										objectFit="cover"
									/>
								</div>

								<Link href="schiebeturen" className="">
									{" "}
									<Carousel.Caption className="bg-dark-opacity text-white text-bold rounded m-5">
										<h4 className="mobile-text">
											Balkontüren, Terassentüren- anlagen als HSK-T und HS-T.
											Hohe Qualität zu niedrigen Preisen, direkt von einem der
											größten Kömmerling Hersteller in Polen.
										</h4>

										<Button>SCHIEBETÜREN</Button>
									</Carousel.Caption>{" "}
								</Link>
							</Carousel.Item>
							<Carousel.Item>
								<div
									className="d-flex align-items-center justify-content-center"
									style={{ height: "100vh" }}
								>
									<Image
										className="slide-mobile"
										src="/assets/51.png"
										alt="First slide"
										layout="fill"
										objectFit="cover"
									/>
								</div>

								<Link href="rolladen" className="">
									{" "}
									<Carousel.Caption className="bg-dark-opacity text-white text-bold rounded m-5">
										<h4 className="mobile-text">
											Wir liefern und montieren Kömmerling Fenster, Balkontüren,
											Schiebetüren und Rollladen.
										</h4>

										<Button>ROLLADEN</Button>
									</Carousel.Caption>{" "}
								</Link>
							</Carousel.Item>
							<Carousel.Item>
								<div
									className="d-flex align-items-center justify-content-center"
									style={{ height: "100vh" }}
								>
									<Image
										className="slide-mobile"
										src="/assets/hausturen.png"
										alt="First slide"
										layout="fill"
										objectFit="cover"
									/>
								</div>

								<Carousel.Caption className="bg-dark-opacity text-white text-bold rounded m-5">
									<h4 className="mobile-text">
										Wir bieten hochwertige Haustüren mit unterschiedlichen
										Designs und Farben. Entdecken Sie unsere vielfältige Auswahl
										und wählen Sie die perfekte Haustür für Ihr Zuhause.
									</h4>
									<Link href="hausturen" className="">
										<Button>HAUSTÜREN</Button>
									</Link>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default Testowy;
