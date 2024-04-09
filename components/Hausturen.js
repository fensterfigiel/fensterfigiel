import React from "react";
import Head from "next/head";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

function Hausturen() {
	return (
		<Container
			fluid
			className="pt-4 mt-2 bg-light text-dark align-items-center justify-content-center"
		>
			<Row className="text-center mt-2  pt-5">
				<h1 className="text-bold text-uppercase">
					Wir sind Hausturen spezialisten
				</h1>
				<h5 className="py-1">
					Als Haustürspezialisten bieten wir eine breite Palette hochwertiger
					und maßgeschneiderter Haustürlösungen, die nicht nur Sicherheit und
					Funktionalität gewährleisten, sondern auch Ihrem Zuhause einen
					einladenden und ansprechenden Eingangsbereich verleihen.
				</h5>
			</Row>
			<Row className="justify-content-center py-3  align-items-center">
				<Col lg={4} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/doors1.png"
						width={300}
						height={300}
						className="responsive-image shadow-lg "
						alt="hausturen1"
					/>{" "}
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text>
								Unsere PVC-Haustüren bieten eine kostengünstige und dennoch
								langlebige Lösung mit ausgezeichneten Wärmedämmeigenschaften und
								einer Vielzahl von Designs, die sich nahtlos in das Gesamtbild
								Ihres Hauses einfügen.
							</Card.Text>
							<Link href="turenpvc">
								<Button className="btn-primary  btn-lg">PVC</Button>
							</Link>
						</Card.Body>{" "}
					</Card>
				</Col>{" "}
				<Col lg={4} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/doors2.png"
						width={300}
						height={300}
						className="responsive-image shadow-lg "
						alt="hausturen2"
					/>{" "}
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text>
								Unsere Aluminium-Haustüren überzeugen durch ihre Robustheit,
								Langlebigkeit und moderne Ästhetik. Sie bieten eine hohe
								Sicherheit sowie eine ausgezeichnete Wärmedämmung und sind in
								einer Vielzahl von Farben und Designs erhältlich.
							</Card.Text>
							<Link href="turenalu">
								<Button className="btn-primary  btn-lg">ALU</Button>
							</Link>
						</Card.Body>{" "}
					</Card>
				</Col>{" "}
				<Col lg={4} className="mx-auto my-2 text-center ">
					{" "}
					<Image
						src="/assets/doors3.png"
						width={300}
						height={300}
						className="responsive-image  "
						alt="hausturen3"
					/>{" "}
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<Card.Text>
								Unsere Türfüllungen aus verschiedenen Materialien wie Glas, Holz
								oder Kunststoff ermöglichen eine individuelle Gestaltung Ihrer
								Haustür und bieten gleichzeitig eine hohe Stabilität und
								Sicherheit. Von klassisch bis modern – wir bieten eine breite
								Palette an Optionen, um Ihren persönlichen Stil zu
								verwirklichen.
							</Card.Text>
							<Link href="turfullungen">
								<Button className="btn-primary btn-lg">Türfüllungen</Button>
							</Link>
						</Card.Body>{" "}
					</Card>
				</Col>{" "}
			</Row>
		</Container>
	);
}

export default Hausturen;
