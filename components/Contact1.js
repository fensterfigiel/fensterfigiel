import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";

const Contact1 = ({ onSubmit }) => {
	const [formData, setFormData] = useState({
		email: "",
		name: "", // Zmienione z "firstName" na "name"
		phone: "", // Dodane pole "phone"
		description: "", // Zmienione z "message" na "description"
	});
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.id]: e.target.value });

	const sendEmail = (e) => {
		e.preventDefault();
		onSubmit(formData);
		setFormSubmitted(true);
		// Dodaj logikę do wysyłania maila z EmailJS tutaj
	};

	{
		const handleCall = () => {
			const phoneLink = document.createElement("a");
			phoneLink.href = `tel:${telefonPrzycisk}`;
			phoneLink.click();
		};

		const telefonPrzycisk = " +31684665722";

		const handleEmailClick = () => {
			window.location.href = `mailto:${emailPrzycisk}`;
		};

		return (
			<Container className="bg-light text-dark" fluid>
				<div className="py-5">
					<Row className=" justify-content-center text-center align-items-center py-5">
						<h1 className="py-3 text-bold">Kontakt</h1>
						<Col lg={5} md={8} sm={8} className="mx-auto my-3 ">
							<Card
								style={{ minWidth: "18rem" }}
								className="bg-light border-0 shadow-lg  contact-card "
							>
								<Card.Body>
									<AiOutlinePhone style={{ fontSize: "4rem" }} />
									<Card.Title>Telefon</Card.Title>

									<Card.Text>Alexy: 0176 20614741</Card.Text>
									<Button className="border-0 btn-nav" onClick={handleCall}>
										Rufen
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col lg={5} md={8} sm={8} className="my-3 mx-auto">
							<Card
								style={{ minWidth: "18rem" }}
								className="bg-light border-0 shadow-lg"
							>
								<Card.Body>
									<AiOutlineMail style={{ fontSize: "4rem" }} />
									<Card.Title>E-mail</Card.Title>
									<Card.Text>fenster-figiel@t-online.de</Card.Text>
									<Button
										className="border-0 btn-nav my-3"
										onClick={handleEmailClick}
									>
										E-Mail Schicken
									</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col lg={5} md={8} sm={8} className="my-3 mx-auto">
							<Card
								style={{ minWidth: "18rem" }}
								className="bg-light border-0 shadow-lg"
							>
								<Card.Body>
									<Image
										src="/assets/kontakt1.png"
										alt="locatie"
										height={200}
										width={200}
									/>

									<Card.Title>
										<HiOutlineLocationMarker style={{ fontSize: "4rem" }} />
									</Card.Title>
									<Card.Text>Hamerhutte 13 MG</Card.Text>
									<Button
										className="border-0 btn-nav"
										onClick={() => {
											window.open(
												"https://www.google.com/search?q=Fenster+Figiel&stick=H4sIAAAAAAAA_-NgU1I1qDAxT7JITDI0SjUxNkxLMzG3MqgwMzI3trRMAwqZmhimGpovYuVzS80rLkktUnDLTM9MzQEA6tub2zoAAAA&hl=pl&mat=CTyNLrkVZOfxElYB7PxHsb3Pk1NG_65JO-bKxJ8klJ62RbfsXBHiWZ6U0h8kt1_3iYt54OYDESlTwnfnCU-eEPGqS744U9u8LatRdMCVCe82YRPnGOECTgZ-OGIeGU52oA&authuser=0&ved=2ahUKEwiN2ZfN76eEAxVFRvEDHTD4AwkQ-MgIegQIJRAe#ip=1"
											);
										}}
									>
										Locatie
									</Button>
								</Card.Body>
							</Card>
						</Col>{" "}
						<Col
							lg={5}
							md={8}
							sm={8}
							xs={11}
							className=" mx-auto my-3 parent-container bg-white py-4 shadow-lg rounded"
						>
							{!formSubmitted ? (
								<Col>
									{" "}
									<h3 className="my-3 text-bold ">Snel Contact</h3>
									<Form className="px-2" onSubmit={sendEmail}>
										{" "}
										<Row>
											<Col>
												<Form.Group className="mb-3" controlId="name">
													<Form.Control
														type="text"
														placeholder="Naam"
														value={formData.name}
														onChange={handleChange}
													/>
												</Form.Group>
											</Col>
											<Col>
												<Form.Group className="mb-3" controlId="phone">
													<Form.Control
														type="text"
														placeholder="Telefoon"
														onChange={handleChange}
														value={formData.phone}
													/>
												</Form.Group>
											</Col>
										</Row>
										<Row>
											<Form.Group className="mb-3" controlId="email">
												<Form.Control
													type="email"
													placeholder="E-mail"
													onChange={handleChange}
													value={formData.email}
												/>
											</Form.Group>
										</Row>
										<Row>
											<Form.Group className="mb-3" controlId="description">
												<Form.Control
													as="textarea"
													placeholder="Beschrijving"
													onChange={handleChange}
													value={formData.description}
												/>
											</Form.Group>
										</Row>
										<Row className="align-items-center justify-content-center mt-4">
											<Button
												className="btn-nav w-50 "
												size="md"
												type="submit"
												onClick={(e) => sendEmail(e)}
											>
												Stuur
											</Button>
										</Row>
									</Form>
								</Col>
							) : (
								<div>
									<h3>Bedankt dat u contact met ons opneemt!</h3>
									{/* Display additional content or redirect users */}
								</div>
							)}
						</Col>
					</Row>
				</div>
			</Container>
		);
	}
};

export default Contact1;