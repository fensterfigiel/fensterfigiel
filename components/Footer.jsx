import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Image from "next/image";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import { MdOutlinePhoneInTalk } from "react-icons/md";

import emailjs from "@emailjs/browser";

import { BsSnapchat } from "react-icons/bs";
const Footer = () => {
	const sectionRef = useRef(null);

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

	const email = "fenster-figiel@t-online.de";

	const controls = useAnimation();
	useEffect(() => {
		if (inView) {
			controls.start(animateIn);
		}
	}, [inView, controls, animateIn]);

	const handleEmailClick = () => {
		window.location.href = `mailto:${email}`;
	};

	return (
		<Container
			fluid
			className="overflow-hidden shadow-md bg-white py-5 "
			ref={sectionRef}
			id="contact"
		>
			<Row className="aling-items-center justify-content-center"></Row>
			<Row className="justify-content-center align-items-top text-center  border-bottom text-dark">
				<Col lg={12} xs={12} className="text-center">
					<div className="d-flex justify-content-center align-items-center">
						<Image
							alt="logo"
							src="/assets/logo.png"
							width={300}
							height={300}
							className="footer-logo-mobile"
							priority
						/>
					</div>
				</Col>

				<Col lg={3} sm={6} className="mx-auto my-1">
					<Card
						style={{ maxWidth: "21rem" }}
						className="bg-white rounded border-0   "
					>
						<Card.Body className="">
							<h3 className="my-3 text-bold">Dienste</h3>
							<Link href="fenster" className="footer-links ">
								<Card.Text className="py-2 hover">Fenster</Card.Text>
							</Link>
							<Link href="schiebeturen" className="footer-links">
								<Card.Text className="py-2 hover ">Schiebetüren</Card.Text>
							</Link>
							<Link href="rolladen" className="footer-links">
								<Card.Text className="py-2 hover ">Rolladen</Card.Text>
							</Link>
							<Link href="hausturen" className="footer-links">
								<Card.Text className="py-2 hover ">Haustüren</Card.Text>
							</Link>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={3} sm={6} className=" mx-auto my-1">
					<Card
						className="bg-white rounded border-0   pt-3 "
						style={{ maxWidth: "21rem" }}
					>
						<h3 className="my-3 text-bold">Kontakt</h3>
						<h4 className="py-3 footer-links hover">
							<MdOutlinePhoneInTalk /> Alexy: 0176 206 147 41
						</h4>

						<a onClick={handleEmailClick} className="footer-links ">
							<h5 className="py-3 hover">
								<RiMailSendLine /> fenster-figiel@t-online.de
							</h5>
						</a>
					</Card>
				</Col>
			</Row>
			<Row className="text-center my-2 align-items-center">
				<Col>
					<Link href="/policy" className="footer-links ">
						<h6 className="hover">Politik & Impressium</h6>
					</Link>
				</Col>{" "}
				<Col className="hover">
					<h6 className="text-black">
						Design
						<a href="https://pixel-genie.de/">
							<Image
								src="/assets/pixel-genie-logo.png"
								width={50}
								height={50}
								className="p-2"
								alt="webdesign-nettetal-pixel-genie"
							/>
						</a>
					</h6>
				</Col>
				<Col>
					<h6 className="text-black">
						2023 Fenster Figiel Alle Rechte vorbehalten
					</h6>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
