import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Testimonials() {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		if (typeof window !== "undefined") {
			setWindowWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);
		}

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

	// Funkcja do generowania gwiazdek na podstawie oceny
	const generateStars = (rating) => {
		const stars = [];
		const starCount = Math.floor(rating);

		for (let i = 0; i < starCount; i++) {
			stars.push(<FaStar style={{ color: "gold" }} key={i} />);
		}

		if (rating % 1 !== 0) {
			stars.push(<FaStarHalfAlt style={{ color: "gold" }} key={starCount} />);
		}

		return stars;
	};

	// Dane recenzji z ocenami
	const testimonialsData = [
		{
			name: "Hans Norbert Küster",
			rating: 5,
			review:
				"Die Firma Figiel hat bei uns alle Fenster erneuert die Qualität der Fenster sehr gut die Arbeiten wurden zuverlässig und sauber sowie sehr zügig gemacht. Auch Kundendienst und Service Arbeiten wurden zügig und zuverlässig gemachte. Ich würde Herrn Figiel jederzeit wieder beauftragen.",
		},
		{
			name: "Ricci Heinen",
			rating: 5,
			review:
				"Herr Figiel und seine freundlichen Mitarbeiter haben tolle Arbeit geleistet. Unsere Wünsche und Vorstellungen wurden professionell umgesetzt. Ein Betrieb, der sehr Kundenorientiert arbeitet. Wir können ihn zu 100% weiterempfehlen.",
		},
		{
			name: "Lars Gladyszewski",
			rating: 5,
			review:
				"Sehr gute Arbeit und sehr schnell. Arbeiten wurden sauber mit einem super Team fertig gestellt. Es wurde sehr sauber gearbeitet und die Fenster und Türen sind von hoher Qualität.",
		},
	];

	return (
		<Container
			fluid
			className={`d-flex bg-light text-dark py-5 align-items-center justify-content-center  shadow-lg`}
		>
			<Row className="justify-content-center  align-items-center flex-column">
				<Col className="text-center">
					<h1 className="text-uppercase text-bold">
						Werden Sie einer unserer zufriedenen Kunden
					</h1>
				</Col>
				<Col className="mx-auto my-2">
					<Carousel
						indicators={false}
						controls={false}
						interval={3000}
						slide={false}
					>
						{testimonialsData.map((testimonial, index) => (
							<Carousel.Item key={index}>
								<Card className="border-0 bg-transparent text-center">
									<Card.Body>
										<h2 className="text-bold my-2">{testimonial.name}</h2>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											{generateStars(testimonial.rating)}
										</div>
										<h3 className="my-2 ">{testimonial.review}</h3>
									</Card.Body>
								</Card>
							</Carousel.Item>
						))}
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
}

export default Testimonials;
