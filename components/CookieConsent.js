import React, { useEffect, useState } from "react";
import { hasCookie, setCookie, deleteCookie } from "cookies-next"; // Dodany import funkcji deleteCookie
import { Button, Col, Row } from "react-bootstrap";
import Link from "next/link";

const CookieConsent = (props) => {
	const [showConsent, setShowConsent] = useState(true);

	useEffect(() => {
		setShowConsent(hasCookie("localConsent"));
	}, []);

	const acceptCookie = () => {
		setShowConsent(true);
		setCookie("localConsent", "true", { sameSite: "none", secure: true });
		// Tutaj dodaj kod inicjujący analytics po zaakceptowaniu plików cookie
		// analytics.init();
	};

	const declineCookie = () => {
		setShowConsent(true);
		deleteCookie("localConsent"); // Usunięcie pliku cookie w przypadku odmowy
	};

	if (showConsent) {
		return null;
	}

	const overlayStyle = {
		position: "fixed",
		bottom: 0, // Zmienione z 200 na 0, aby umieścić overlay na dolnym brzegu
		left: 0,
		zIndex: 9999,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
	return (
		<div style={overlayStyle}>
			<Row className="justify-content-center text-center sticky mt-3 ">
				<Col className="bg-white rounded">
					<Col className=" my-3 py-3">
						<Col className="fixed bottom-0 left-0 right-0  flex items-center justify-between px-4 py-2 bg-gray-100">
							<Row className="overflow-auto">
								<h6 className="text-black text-base ">
									Diese Website verwendet Cookies. Cookies sind erforderlich, um
									die ordnungsgemäße Funktion der Website zu gewährleisten,
									Inhalte zu personalisieren, Werbung anzupassen und den Verkehr
									auf der Website zu analysieren. Durch die Nutzung unserer
									Website stimmst du der Verwendung von Cookies gemäß unserer
									Datenschutzrichtlinie zu.
								</h6>
								<h6 className="text-black text-base py-1">
									Du kannst die Cookie-Einstellungen in deinem Browser ändern
									oder Cookie-Verwaltungstools verwenden, um Cookies zu
									blockieren oder zu löschen. Beachte jedoch, dass das
									Deaktivieren von Cookies die Funktionalität einiger Funktionen
									und Dienste auf unserer Website beeinträchtigen kann.
								</h6>
								<h6 className="text-black text-base ">
									Weitere Informationen zu Cookies und unserer
									Datenschutzrichtlinie findest du auf unserer Website. Durch
									Klicken auf "Akzeptieren" oder durch die weitere Nutzung der
									Website stimmst du der Verwendung von Cookies zu.
								</h6>
							</Row>
							<Button className=" m-2 btn-nav" onClick={() => acceptCookie()}>
								Zustimmen
							</Button>
							<Button className=" m-2 btn-nav" onClick={() => declineCookie()}>
								Ablehnen
							</Button>
						</Col>
						<Link href="policy">Politik & Impressum</Link>
					</Col>
				</Col>
			</Row>
		</div>
	);
};

export default CookieConsent;
