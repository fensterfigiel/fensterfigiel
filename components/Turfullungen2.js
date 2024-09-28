import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Image from "next/image";

function Turfullungen2() {
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
			<Row className="justify-content-center  align-items-center">
				<Col lg={6} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent text-center">
						<Card.Body>
							<h1 className="text-bold">DINDECOR - DIE SERIE PREMIUM</h1>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din1.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>
					<Row>
						<h3 className="text-bold">1101</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din2.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>
					<Row>
						<h3 className="text-bold">1401</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din3.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">1701</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din4.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">1301</h3>
					</Row>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din5.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">2201</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din6.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">2701</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din7.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">2801 Freez</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din8.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5006</h3>
					</Row>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din9.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5003</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din10.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">2802</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din11.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5001</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din12.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5002</h3>
					</Row>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din13.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">3201</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din14.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">3101</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din15.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">2801</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din16.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5007</h3>
					</Row>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din17.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5012</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din18.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5016</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din19.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5004</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din20.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5008</h3>
					</Row>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din21.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5020</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din22.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5005</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din23.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5010</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din24.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5011</h3>
					</Row>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din25.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5013</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din26.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5021</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din27.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5022</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din28.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5014</h3>
					</Row>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din29.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5023</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din30.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5024</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din31.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5017</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din32.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5025</h3>
					</Row>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din33.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5026</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din34.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5018</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din35.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5027</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din36.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5028</h3>
					</Row>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din37.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5019</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din38.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5030</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din39.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5031</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din40.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5029</h3>
					</Row>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din41.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5040</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din42.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5038</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din43.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5032</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din44.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5033</h3>
					</Row>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din45.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">5039</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din46.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">6001</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din47.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">6007</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din48.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">6010</h3>
					</Row>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din49.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">6008</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din50.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">6002</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din51.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">6013</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din52.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">6004</h3>
					</Row>
				</Col>
			</Row>
			<Row>
				{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din53.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">6015</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din54.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">6009</h3>
					</Row>
				</Col>{" "}
				<Col lg={3} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/din55.png"
						width={200}
						height={400}
						className="responsive-image rounded shadow-lg hover"
					/>{" "}
					<Row>
						<h3 className="text-bold">6003</h3>
					</Row>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Turfullungen2;
