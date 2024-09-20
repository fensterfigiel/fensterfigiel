import { useRouter } from "next/router";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";

const Fensterbauer = ({ city }) => {
	const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);

	return (
		<Container className="mt-5 text-black">
			<Head>
				<title>{`Fensterbauer in ${formattedCity} - Kömmerling, Schüco Fenster, Haustüren, Schiebetüren`}</title>
				<meta
					name="description"
					content={`Fensterbauer in ${formattedCity}: Hochwertige Fenster aus Polen von Kömmerling und Schüco. Professionelle Montage und Verkauf von energieeffizienten Fenstern und Türen. Kontaktieren Sie uns für die besten Angebote in ${formattedCity}.`}
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<Row className="mt-5">
				<Col className="mt-5 pt-5">
					<h1 className="text-center">{`Fensterbauer in ${formattedCity} - Kömmerling und Schüco Fenster aus Polen`}</h1>
					<p>
						{`Figiel Fenster ist Ihr zuverlässiger Partner in ${formattedCity} für den Verkauf und die professionelle Montage von hochwertigen Fenstern und Haustüren aus Polen, insbesondere der Marken Kömmerling und Schüco. Unsere Fensterlösungen zeichnen sich durch hervorragende Energieeffizienz, Langlebigkeit und ein modernes Design aus, das sich perfekt an jede Architektur anpasst.`}
					</p>

					<p>
						{`Als führender Anbieter in ${formattedCity} bieten wir eine breite Auswahl an Fenstern und Haustüren von renommierten Herstellern wie Kömmerling und Schüco. Unsere Produkte sind bekannt für ihre ausgezeichnete Wärmedämmung, die Ihnen hilft, Energiekosten zu senken und gleichzeitig den Wohnkomfort zu erhöhen. Ob Sie auf der Suche nach modernen PVC-Fenstern, stabilen Aluminiumfenstern oder eleganten Schiebetüren sind – wir haben die ideale Lösung für Sie.`}
					</p>

					<p>
						{`Unsere polnischen Fenster und Türen erfüllen die höchsten Qualitätsstandards und werden von erfahrenen Fachkräften montiert, um sicherzustellen, dass Sie eine langlebige und zuverlässige Lösung erhalten. Die Fenster von Kömmerling und Schüco bieten nicht nur erstklassige Wärmedämmung, sondern auch ausgezeichnete Schallschutzwerte und hohe Sicherheitsstandards.`}
					</p>

					<p>
						{`Warum sollten Sie sich für Fenster und Türen aus Polen entscheiden? Dank der langjährigen Erfahrung unserer Partnerfirmen Kömmerling und Schüco bieten wir Ihnen Produkte, die in ganz Europa geschätzt werden. Unsere Fenster aus Polen sind nicht nur hochwertig, sondern auch kosteneffizient, was sie zu einer beliebten Wahl für Hausbesitzer in ${formattedCity} und Umgebung macht.`}
					</p>

					<p>
						{`Unsere Experten in ${formattedCity} stehen Ihnen zur Verfügung, um Ihnen bei der Auswahl der besten Fenster- und Türlösungen für Ihr Zuhause zu helfen. Ob Sie Fragen zur Wärmedämmung, zum Schallschutz oder zur Einbruchssicherheit haben – wir bieten maßgeschneiderte Beratung und sorgen dafür, dass Sie die richtige Entscheidung treffen.`}
					</p>

					<p>
						{`Kontaktieren Sie uns noch heute, um mehr über unsere Fenster und Türen von Kömmerling und Schüco zu erfahren. Wir bieten kostenlose Beratung und individuelle Angebote für die Montage von Fenstern und Haustüren in ${formattedCity}. Vertrauen Sie auf Figiel Fenster – Ihr Fensterbauer in ${formattedCity} für Qualität, Langlebigkeit und professionelle Montage.`}
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export async function getStaticPaths() {
	// Definiujesz, jakie miasta chcesz obsłużyć statycznie
	const paths = [
		{ params: { city: "moenchengladbach" } },
		{ params: { city: "krefeld" } },
		{ params: { city: "duesseldorf" } },
		{ params: { city: "koeln" } },
		{ params: { city: "willich" } },
		{ params: { city: "nettetal" } },
		{ params: { city: "viersen" } },
		{ params: { city: "bracht" } },
		{ params: { city: "brugen" } },
		// Dodaj więcej miast tutaj
	];

	return {
		paths,
		fallback: false, // Jeśli miasto nie jest na liście, zwróci 404
	};
}

export async function getStaticProps({ params }) {
	const { city } = params;

	return {
		props: {
			city,
		},
	};
}

export default Fensterbauer;
