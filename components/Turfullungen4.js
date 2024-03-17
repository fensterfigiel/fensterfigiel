import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Insektenschutz1 from "./Insektenschutz1";

function Turfullungen4() {
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
			<Row className="justify-content-center text-center align-items-center">
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">AL-TECH Türfüllungen</h1>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al1.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al2.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al3.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al4.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al5.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al6.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al7.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al8.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al9.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al10.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al11.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al12.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al13.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al14.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al15.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al16.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al17.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al18.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al19.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al20.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="isolatie3"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Turfullungen4;
