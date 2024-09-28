import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Image from "next/image";

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

	return (
		<Container
			fluid
			className="mt-5 py-5 align-items-center bg-light text-dark justify-content-center "
		>
			<Row className="justify-content-center text-center align-items-center">
				<Col className="mx-auto my-2 text-center">
					<Card className="border-0 bg-transparent text-center">
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
						alt="Türfüllungen1"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 101</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al2.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen2"
					/>
					<Row>
						<h3 className="text-bold"> 103</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al3.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen3"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 104</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al4.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen4"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 102</h3>
					</Row>
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
						alt="Türfüllungen5"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 105</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al6.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen6"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 108</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al7.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 109</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al8.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 110</h3>
					</Row>
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
						alt="Türfüllungen"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 111</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al10.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 112</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al11.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 113</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al12.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 114</h3>
					</Row>
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
						alt="Türfüllungen"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 115</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al14.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 116</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al15.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 117</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al16.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 118</h3>
					</Row>
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
						alt="Türfüllungen"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 119</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al18.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 120</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al19.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 121</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/al20.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
						alt="Türfüllungen"
					/>{" "}
					<Row>
						<h3 className="text-bold"> 122</h3>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default Turfullungen4;
