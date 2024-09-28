import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";

function Hausturenplus() {
	const router = useRouter();
	const { id } = router.query;

	const sectionRef = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animateImg, setAnimateImg] = useState(false);

	const handleIntersection = (entries) => {
		if (entries[0].isIntersecting) {
			setAnimate(true);
			setAnimateImg(true);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const animationProps = useSpring({
		from: { opacity: 0, transform: "translateX(-50%)", margin: "5%" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateX(0)" : "translateX(-50%)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});

	const imgAnimationProps = useSpring({
		from: { opacity: 0, transform: "translateX(50%)" },
		to: {
			opacity: animate ? 1 : 0,
			transform: animate ? "translateX(0)" : "translateX(50%)",
		},
		config: { duration: 1000 },
		delay: 1000,
	});
	const animationPropsMiddle = useSpring({
		from: { opacity: 0, margin: "5%" },
		to: {
			opacity: animate ? 1 : 0,
		},
		config: { duration: 1000 },
		delay: 1000,
	});
	return (
		<Container
			fluid
			className="  text-dark blur-bg  align-items-center overflow-hidden  p-2 border-0  "
			ref={sectionRef}
		>
			<Row
				className=" text-center justify-content-center align-items-center"
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{" "}
				<Row className="py-3 text-center ">
					<Col>
						{" "}
						<h1 className="my-5 text-bold">Vorteile unserer Haustüren</h1>
					</Col>
				</Row>{" "}
				<Row className="text-center justify-content-center align-items-center align-self-center">
					<Row className="justify-content-center align-items-center">
						{" "}
						<Col lg={4} className="mx-auto">
							{" "}
							<animated.div style={animationProps}>
								{" "}
								<Card
									className="border-sm rounded-0 my-card"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "27rem",
										height: "29rem",
									}}
								>
									{" "}
									<Card.Img
										src="/assets/Splus4.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">Stilvolles Design</span>
										</Card.Title>
										<Card.Text>
											Unsere Haustüren zeichnen sich durch ein stilvolles Design
											aus, das die ästhetische Qualität Ihres Hauses verbessert
											und einen einladenden Eindruck für Ihre Gäste hinterlässt.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
						<Col lg={4} className="mx-auto">
							{" "}
							<animated.div style={animationPropsMiddle}>
								{" "}
								<Card
									className="border-sm rounded-0 blue-bg  text-dark my-card"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "27rem",
										height: "29rem",
									}}
								>
									<Card.Img
										src="/assets/personalized.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">
												Anpassungsfähigkeit an Ihre Bedürfnisse
											</span>
										</Card.Title>
										<Card.Text>
											Mit einer Vielzahl von Größen, Formen und Stilen bieten
											unsere Haustüren die Flexibilität, sich perfekt an die
											Anforderungen Ihres Hauses und Ihrer persönlichen
											Vorlieben anzupassen.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
						<Col lg={4} className="mx-auto">
							{" "}
							<animated.div style={animationProps}>
								{" "}
								<Card
									className="border-sm rounded-0 my-card"
									style={{
										maxWidth: "27rem",
										height: "29rem",
									}}
								>
									<Card.Img
										src="/assets/Splus6.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">
												Natürliche Lichtdurchlässigkeit
											</span>
										</Card.Title>
										<Card.Text>
											Dank innovativer Verglasungsoptionen maximieren unsere
											Haustüren die natürliche Lichtdurchlässigkeit, was zu
											einer helleren und freundlicheren Wohnatmosphäre führt.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>{" "}
					</Row>
					<Row className="justify-content-center align-items-center">
						<Col lg={4}>
							{" "}
							<animated.div style={animationProps}>
								{" "}
								<Card
									className="border-sm  text-dark blue-bg rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "27rem",
										height: "29rem",
									}}
								>
									<Card.Img
										src="/assets/termoplus1.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title className="bold">
											<span className="text-bold">
												Wetterbeständigkeit und Langlebigkeit
											</span>
										</Card.Title>
										<Card.Text>
											Unsere Haustüren sind robust und wetterbeständig, was sie
											besonders geeignet macht, den unterschiedlichsten
											Witterungsbedingungen standzuhalten und ihre
											Funktionalität über viele Jahre hinweg zu erhalten.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>{" "}
						<Col lg={4}>
							{" "}
							<animated.div style={animationPropsMiddle}>
								<Card
									className="border-sm rounded-0"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "27rem",
										height: "29rem",
									}}
								>
									<Card.Img
										src="/assets/saving.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title className="bold">
											<span className="text-bold">Energieeffizienz</span>
										</Card.Title>
										<Card.Text>
											Durch die Verwendung hochwertiger Materialien und
											innovativer Isolierungstechnologien tragen unsere
											Haustüren zur Verbesserung der Energieeffizienz Ihres
											Hauses bei, indem sie den Wärmeverlust minimieren und die
											Heizkosten senken.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
						<Col lg={4}>
							{" "}
							<animated.div style={animationProps}>
								<Card
									className="border-sm rounded-0 blue-bg text-dark rounded-0 w-100"
									style={{
										justifyContent: "center",
										alignContent: "center",
										alignItems: "center",
										maxWidth: "27rem",
										height: "29rem",
									}}
								>
									<Card.Img
										src="/assets/installing.png"
										style={{
											width: "6rem",
											height: "6rem",
										}}
										className="my-1"
									/>
									<Card.Body>
										<Card.Title>
											<span className="text-bold">
												Höchste Qualität bei der Installation
											</span>
										</Card.Title>
										<Card.Text>
											Unsere Haustüren werden von erfahrenen Fachleuten mit
											höchster Sorgfalt und Präzision installiert, um
											sicherzustellen, dass sie perfekt passen und optimal
											funktionieren. Wir legen Wert auf jedes Detail, um Ihnen
											eine Installation von höchster Qualität zu bieten, die
											Sicherheit, Langlebigkeit und ästhetische Ansprüche
											gleichermaßen erfüllt.
										</Card.Text>
									</Card.Body>{" "}
								</Card>{" "}
							</animated.div>{" "}
						</Col>
					</Row>
				</Row>
			</Row>
		</Container>
	);
}

export default Hausturenplus;
