import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

import profilePic1 from "../public/assets/7-1.png";
import profilePic2 from "../public/assets/schiebeturen-1.png";
import profilePic3 from "../public/assets/51-1.png";
import profilePic4 from "../public/assets/hausturen-1.png";
import profilePic5 from "../public/assets/hausturen-MG.png";
import profilePic6 from "../public/assets/schiebenturen-MG.png";
import profilePic7 from "../public/assets/fenster-MG.png";
import profilePic8 from "../public/assets/rolladen-MG.png";

function Testowy() {
	const [windowWidth, setWindowWidth] = useState(0);

	// Zoptymalizowane efekty resize
	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		if (typeof window !== "undefined") {
			setWindowWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);
		}
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const isMobile = windowWidth <= 768;

	// Użycie Intersection Observer do kontrolowania widoczności komponentu
	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: true, // Lazy load animacje tylko raz
	});

	const animateIn = {
		opacity: 1,
		transition: { duration: 1, ease: "easeInOut" },
	};

	const animateOut = {
		opacity: 0,
		transition: { duration: 1, ease: "easeInOut" },
	};

	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start(animateIn);
		} else {
			controls.start(animateOut);
		}
	}, [inView, controls]);

	return (
		<Container fluid className="pt-5 align-items-center justify-content-center">
			<Row className="align-items-center justify-content-center">
				<Col>
					<Row className="align-items-center justify-content-center text-center text-dark">
						<Carousel variant="dark">
							{/* Optymalizacja obrazów z lazy loading */}
							<Carousel.Item>
								<div
									className="d-flex align-items-center justify-content-center"
									style={{ height: "100vh" }}
								>
									<Image
										src={isMobile ? profilePic7 : profilePic1}
										alt="First slide"
										layout="fill"
										objectFit="cover"
										// Ten obraz ładuje się jako pierwszy dla lepszego FCP
										quality={isMobile ? 50 : 70} // Obniżenie jakości dla zmniejszenia wagi
									/>
								</div>
								<Link href="fenster">
									<Carousel.Caption className="bg-dark-opacity text-white text-bold rounded m-5 text-center">
										<h4 className="mobile-text">
											Günstige PVC-Fenster aus Schüco und Kömmerlingprofilen in
											allen Varianten und Farben.
										</h4>
										<Button>FENSTER</Button>
									</Carousel.Caption>
								</Link>
							</Carousel.Item>

							<Carousel.Item>
								<div
									className="d-flex align-items-center justify-content-center"
									style={{ height: "100vh" }}
								>
									<Image
										src={isMobile ? profilePic6 : profilePic2}
										alt="Second slide"
										layout="fill"
										objectFit="cover"
										loading="lazy" // Lazy loading dla kolejnych obrazów
										quality={70} // Optymalizacja jakości
									/>
								</div>
								<Link href="schiebeturen">
									<Carousel.Caption className="bg-dark-opacity text-white text-bold rounded m-5">
										<h4 className="mobile-text">
											Balkontüren, Terassentüren- anlagen als HSK-T und HS-T.
											Direkt von einem der größten Hersteller in Polen.
										</h4>
										<Button>SCHIEBETÜREN</Button>
									</Carousel.Caption>
								</Link>
							</Carousel.Item>

							<Carousel.Item>
								<div
									className="d-flex align-items-center justify-content-center"
									style={{ height: "100vh" }}
								>
									<Image
										src={isMobile ? profilePic8 : profilePic3}
										alt="Third slide"
										layout="fill"
										objectFit="cover"
										loading="lazy" // Lazy loading dla kolejnych obrazów
										quality={70}
									/>
								</div>
								<Link href="rolladen">
									<Carousel.Caption className="bg-dark-opacity text-white text-bold rounded m-5">
										<h4 className="mobile-text">
											Wir liefern und montieren Schüco und Kömmerling Fenster,
											Balkontüren, Schiebetüren und Rollladen.
										</h4>
										<Button>ROLLADEN</Button>
									</Carousel.Caption>
								</Link>
							</Carousel.Item>

							<Carousel.Item>
								<div
									className="d-flex align-items-center justify-content-center"
									style={{ height: "100vh" }}
								>
									<Image
										src={isMobile ? profilePic5 : profilePic4}
										alt="Fourth slide"
										layout="fill"
										objectFit="cover"
										loading="lazy" // Lazy loading
										quality={70}
									/>
								</div>
								<Carousel.Caption className="bg-dark-opacity text-white text-bold rounded m-5">
									<h4 className="mobile-text">
										Wir bieten hochwertige Haustüren mit unterschiedlichen
										Designs und Farben.
									</h4>
									<Link href="hausturen">
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
