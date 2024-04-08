import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

function Testowy2() {
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
			className="mt-5 pt-5 align-items-center bg-light justify-content-center"
		>
			<Carousel preload={true}>
				<Carousel.Item>
					<Image
						className="d-block w-100"
						src="/assets/8.png"
						alt="First slide"
						width={300}
						height={300}
					/>
					<Carousel.Caption>
						<h3>FENSTER</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Image
						className="d-block w-100"
						src="/assets/4.png"
						alt="Second slide"
						width={300}
						height={300}
					/>
					<Carousel.Caption>
						<h3>SCHIEBETÜREN</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Image
						className="d-block w-100"
						src="/assets/1.png"
						alt="Third slide"
						width={300}
						height={300}
					/>
					<Link href="rolladen" className="">
						{" "}
						<Carousel.Caption>
							<Button>Rolladen </Button>
						</Carousel.Caption>{" "}
					</Link>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
}

export default Testowy2;
