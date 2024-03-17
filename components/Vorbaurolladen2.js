import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

function Vorbaurolladen2() {
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
						src="/assets/1.3.4.1.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="isolatie3"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Aluprof SK 45/ SLK 45</h1>
							<Card.Text>
								Die adaptiven Rollläden SLK 45 sind dank ihrer einfachen Montage
								eine der vielseitigsten und am häufigsten gewählten Systeme.
							</Card.Text>
							<Card.Text>
								Sie eignen sich sowohl für den Einsatz während des Baus als auch
								für bereits fertiggestellte oder renovierte Gebäude (zum
								Beispiel bei Fensteraustausch). Durch die Möglichkeit, die SLK
								45 Rollläden direkt an der Fassade zu montieren, ist keine
								Änderung der Fensterkonstruktion oder Montage erforderlich,
								wodurch der Wärmeschutz nicht beeinträchtigt wird. Die Kassette,
								der Panzer und die Führungsschienen der Rollläden bestehen aus
								lackierten Aluminiumprofilen.
							</Card.Text>
							Sie können entweder an der Fassade des Gebäudes oder in der
							Fensternische montiert werden.
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Vorbaurolladen2;
