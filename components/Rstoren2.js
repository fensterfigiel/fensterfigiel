import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Insektenschutz1 from "./Insektenschutz1";

function Rstoren2() {
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
						src="/assets/raff2-1.png"
						width={400}
						height={400}
						className="responsive-image rounded shadow-lg"
						alt="raffstoren2"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">
								Raffstoren im Unterputzsystem SkyFlow SZF/P
							</h1>
							<Card.Text>
								Die Raffstoren im Unterputzsystem sind ideal für die
								Installation sowohl in Neubauten als auch in bereits bestehenden
								Gebäuden, die entsprechende Anpassungen im Bereich des Sturzes
								ermöglichen.
							</Card.Text>
							<Card.Text className="text-bold">
								Der Kasten dieser Raffstoren besteht aus hochwertigem
								stranggepresstem Aluminium und ist mit einem speziellen
								Putzträger ausgestattet, der eine problemlose Verblendung mit
								verschiedenen Putzmaterialien ermöglicht.
							</Card.Text>
							<Card.Text>
								Ihre maximale Größe beträgt 4500 × 4000 mm, was eine maximale
								Fläche von bis zu 18 m² abdeckt.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Rstoren2;
