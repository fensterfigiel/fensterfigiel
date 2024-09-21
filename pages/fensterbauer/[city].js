import { useRouter } from "next/router";
import Head from "next/head";
import { Col, Container, Row, Accordion } from "react-bootstrap";

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
					<h1 className="text-center text-bold">{`Fensterbauer in ${formattedCity} - Kömmerling und Schüco Fenster aus Polen`}</h1>
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

			<Row className="mt-5">
				{" "}
				<h2 className="text-center text-bold">{`Häufig gestellte Fragen zu Fensterbauern in ${formattedCity}`}</h2>
				<Col>
					<Accordion className="mt-3">
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								<span>{`Warum sollten Sie Fenster und Haustüren von Figiel Fenster wählen?`}</span>
							</Accordion.Header>
							<Accordion.Body>
								{`Figiel Fenster bietet in ${formattedCity} eine breite Auswahl an Fenstern und Haustüren von renommierten polnischen Herstellern, wie Kömmerling und Schüco. Unsere Firma ist auf den Verkauf und die fachgerechte Montage dieser hochwertigen Produkte spezialisiert. Fenster und Türen aus Polen sind für ihre hohe Qualität, Langlebigkeit und Energieeffizienz bekannt – und genau das bieten wir unseren Kunden, kombiniert mit einem erstklassigen Montageservice.`}
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="1">
							<Accordion.Header>
								<span>{`Wie unterscheidet sich Figiel Fenster von anderen Fensterbauern in ${formattedCity}?`}</span>
							</Accordion.Header>
							<Accordion.Body>
								{`Im Gegensatz zu vielen anderen Fensterbauern in ${formattedCity} arbeitet Figiel Fenster eng mit polnischen Herstellern zusammen, um Ihnen eine breite Palette an Fenstern und Haustüren zu bieten, die hohe europäische Standards erfüllen. Unser Fokus liegt nicht nur auf dem Verkauf, sondern auch auf der professionellen Installation. Wir bieten maßgeschneiderte Lösungen, die perfekt auf die Bedürfnisse unserer Kunden abgestimmt sind.`}
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="2">
							<Accordion.Header>
								<span>{`Sind Fenster aus Polen wirklich eine gute Wahl?`}</span>
							</Accordion.Header>
							<Accordion.Body>
								{`Ja, Fenster aus Polen, die wir bei Figiel Fenster anbieten, sind bekannt für ihre erstklassige Qualität und wettbewerbsfähigen Preise. Polnische Hersteller wie Kömmerling und Schüco bieten Fenster, die ausgezeichnete Wärmedämmung, Schallschutz und Sicherheit gewährleisten. Unsere Kunden in ${formattedCity} profitieren von langlebigen und ästhetisch ansprechenden Fenstern, die sich perfekt an ihre Häuser anpassen.`}
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="3">
							<Accordion.Header>
								<span>{`Welche Arten von Fenstern und Türen bietet Figiel Fenster an?`}</span>
							</Accordion.Header>
							<Accordion.Body>
								{`Figiel Fenster bietet eine breite Palette an Fenster- und Türlösungen für Kunden in ${formattedCity}. Wir vertreiben und montieren PVC-Fenster, Aluminiumfenster, Haustüren und Schiebetüren von renommierten polnischen Herstellern. Alle unsere Produkte zeichnen sich durch hohe Energieeffizienz, modernes Design und ausgezeichnete Wärmedämmung aus. Wir passen jedes Produkt an die individuellen Bedürfnisse unserer Kunden an.`}
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="4">
							<Accordion.Header>
								<span>{`Wie funktioniert die Installation von Fenstern durch Figiel Fenster?`}</span>
							</Accordion.Header>
							<Accordion.Body>
								{`Die Installation von Fenstern und Haustüren durch Figiel Fenster erfolgt professionell und termingerecht. Unser erfahrenes Montageteam in ${formattedCity} sorgt dafür, dass Ihre neuen Fenster und Türen korrekt und sicher installiert werden, um maximale Effizienz und Langlebigkeit zu gewährleisten. Wir legen großen Wert auf Präzision und Kundenzufriedenheit – von der Planung bis zur finalen Installation.`}
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="5">
							<Accordion.Header>
								<span>{`Bietet Figiel Fenster individuelle Fensterangebote an?`}</span>
							</Accordion.Header>
							<Accordion.Body>
								{`Ja, bei Figiel Fenster bieten wir in ${formattedCity} maßgeschneiderte Fensterangebote an, die genau auf Ihre Bedürfnisse abgestimmt sind. Ob Sie ein neues Haus bauen oder Ihre bestehenden Fenster und Türen austauschen möchten, wir erstellen für Sie ein unverbindliches und kostenloses Angebot. Unser Team wird Sie umfassend beraten und sicherstellen, dass Sie die besten Lösungen für Ihr Zuhause erhalten.`}
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
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
