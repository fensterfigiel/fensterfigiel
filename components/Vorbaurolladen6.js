import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Image from "next/image";

function Vorbaurolladen6() {
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
				<Col lg={5} className="mx-auto my-2 text-center ">
					<Image
						src="/assets/1.3.3.8.jpg"
						width={400}
						height={500}
						className="responsive-image rounded shadow-lg"
						alt="vorbaurollade8"
					/>
				</Col>
				<Col lg={5} className="mx-auto my-2 ">
					<Card className="border-0 bg-transparent ">
						<Card.Body>
							<h1 className="text-bold">Aluprof SKP / GK-P</h1>
							<Card.Text>
								Das adaptive Rollo-System GK-P bietet eine äußerst flexible
								Lösung für Gebäude sowohl im Neubau als auch in bereits
								fertiggestellten oder renovierten Gebäuden (zum Beispiel während
								des Fensteraustauschs).
							</Card.Text>
							<Card.Text>
								Durch die Möglichkeit, die GK-P Rollläden direkt an der Fassade
								zu montieren, ist keine Beeinträchtigung der Fensterkonstruktion
								oder -montage erforderlich, wodurch der Wärmeschutz
								aufrechterhalten bleibt.
							</Card.Text>

							<Card.Text>
								Der Hauptbestandteil dieses Produkts ist der Kasten, der aus
								einem speziell entwickelten Material mit hervorragenden
								thermischen Eigenschaften besteht. Er ist in zwei Größen
								erhältlich: 260 × 260 mm und 300 × 300 mm.
							</Card.Text>
							<Card.Text>
								Die Kassette, der Panzer und die Führungsschienen der Rollläden
								bestehen aus hochwertig lackiertem Aluminiumblech, was für eine
								lange Lebensdauer und eine ästhetisch ansprechende Optik sorgt.
								Die viertelkreisförmige Bauweise ermöglicht eine elegante
								Anpassung an die Architektur des Gebäudes und bietet
								gleichzeitig Schutz vor Sonneneinstrahlung, Witterungseinflüssen
								und unerwünschten Blicken.
							</Card.Text>
							<Card.Text className="text-bold">
								Mit dem GK-P Rollo-System können Sie nicht nur den thermischen
								Komfort in Ihrem Zuhause verbessern, sondern auch eine
								harmonische Gestaltung der Fassade erreichen.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Vorbaurolladen6;
