import React, { useState, useEffect } from "react";
import { NavDropdown, Container, Button, Dropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FiX } from "react-icons/fi";
import { useRouter } from "next/router";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdHome } from "react-icons/md";

import imageUrlBuilder from "@sanity/image-url";

const NavbarComp = ({ toggleTheme }) => {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen); // Zmiana stanu otwarcia/zamknięcia menu
	};
	const [scrolled, setScrolled] = useState(false);
	const [navbarColor, setNavbarColor] = useState("#fff");

	useEffect(() => {
		const handleRouteChange = () => {
			setMenuOpen(false); // Zamknij menu po zmianie trasy
		};

		router.events.on("routeChangeStart", handleRouteChange);

		return () => {
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, [router.events]);

	return (
		<Navbar
			expand="lg"
			fixed="top"
			style={{
				height: "70px",
				width: "100vw",
				backgroundColor: navbarColor,
				transition: "background-color 0.5s ease",
			}}
			className="nav-transition rounded-bottom "
			collapseOnSelect
		>
			<Container fluid>
				<Navbar.Brand
					style={{ margin: "auto 0" }}
					as={Link}
					href="/"
					className=" rounded  py-0 d-flex align-items-center blur"
				>
					<Image src="/assets/logoFF.png" alt="logo" width={40} height={40} />
					<span>
						<span className="mx-2 nazwa-firmy text-bold">
							<span style={{ color: "#004E7D" }}>Fenster Figiel </span>
						</span>
					</span>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					aria-label="Toggle navigation"
				/>
				<Navbar.Collapse
					id="basic-navbar-nav"
					className="rounded justify-content-end text-center m-1 navbar-toggler border-0"
				>
					<Nav className="navbar-collapse py-3 justify-content-end align-items-center text-center rounded ">
						<Nav.Link as={Link} href="/" className="m-1">
							<Button className="btn-md py-2 bg-primary text-white   border-0 shadow-md ">
								<MdHome className="mb-1" />
							</Button>
						</Nav.Link>

						<NavDropdown
							title="Fenster"
							id="basic-nav-dropdown"
							className="m-2 p-1 bg-primary rounded"
							style={{ fontWeight: "bold" }}
						>
							<NavDropdown title="PVC Fenster" className="my-1">
								<NavDropdown.Item as={Link} href="/fensterpvc" className="my-1">
									<span className="text-bold"> PVC Fenster</span>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item as={Link} href="kommerling88md">
									<span className="text-bold">Kömmerling 88 MD</span>
								</NavDropdown.Item>{" "}
								<NavDropdown.Item as={Link} href="kommerling76ad">
									<span className="text-bold">Kömmerling 76 AD</span>
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} href="kommerling76md">
									<span className="text-bold">Kömmerling 76 MD</span>
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} href="lackiertefensterauspvc">
									<span className="text-bold">Lackierte Fenster aus PVC</span>
								</NavDropdown.Item>{" "}
							</NavDropdown>
							<NavDropdown title="PVC Fenster mit aluschale" className="my-1">
								<NavDropdown.Item
									as={Link}
									href="/fensterpvcmitalu"
									className="my-1"
								>
									<span className="text-bold"> PVC Fenster mit aluschale</span>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item as={Link} href="aluclip76md">
									<span className="text-bold"> Kömmerling Aluclip 76 MD</span>
								</NavDropdown.Item>{" "}
								<NavDropdown.Item as={Link} href="aluclippro">
									<span className="text-bold">Kömmerling Aluclip Pro</span>
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Alu Fenster" className="my-1">
								<NavDropdown.Item as={Link} href="/fensteralu" className="my-1">
									<span className="text-bold"> Alu Fenster</span>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item as={Link} href="schucoaws75">
									<span className="text-bold">Schüco AWS 75</span>
								</NavDropdown.Item>{" "}
								<NavDropdown.Item as={Link} href="schucoaws90">
									<span className="text-bold">Schüco AWS 90</span>
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} href="aluprofmb79n">
									<span className="text-bold">Aluprof MB-79N</span>
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} href="aluprofmb86n">
									<span className="text-bold">Aluprof MB-86N</span>
								</NavDropdown.Item>{" "}
								<NavDropdown.Item as={Link} href="aluprofmb104">
									<span className="text-bold">Aluprof MB-104</span>
								</NavDropdown.Item>{" "}
							</NavDropdown>
						</NavDropdown>

						<NavDropdown
							title="Schiebetüren"
							id="basic-nav-dropdown"
							className="m-2 p-1 bg-primary rounded"
							style={{ fontWeight: "bold" }}
						>
							<NavDropdown title="PVC Schiebetüren" className="my-1">
								<NavDropdown.Item as={Link} href="/schiebenturenpvc">
									<span className="text-bold">PVC Schiebetüren </span>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item as={Link} href="kommerlingpremidoor76">
									<span className="text-bold">Kömmerling PremiDoor 76</span>
								</NavDropdown.Item>{" "}
								<NavDropdown.Item as={Link} href="kommerlingpremidoor76lux">
									<span className="text-bold">Kömmerling PremiDoor 76 LUX</span>
								</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title="Alu Schiebetüren" className="my-1">
								<NavDropdown.Item
									as={Link}
									href="/schiebenturenalu"
									className="my-1"
								>
									<span className="text-bold"> Alu Schiebetüren</span>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item as={Link} href="aliplastultraglide">
									<span className="text-bold">Aliplast Ultraglide</span>
								</NavDropdown.Item>{" "}
								<NavDropdown.Item as={Link} href="aliplastultraglidemaxlight">
									<span className="text-bold">
										Aliplast Ultraglide Max Light
									</span>
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} href="aluprofmb77hs">
									<span className="text-bold">Aluprof MB-77 HS</span>
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} href="aluprofmbskylinetyper">
									<span className="text-bold">Aluprof MB-SKYLINE TYPE R</span>
								</NavDropdown.Item>{" "}
							</NavDropdown>
						</NavDropdown>

						<NavDropdown
							title="Rolladen"
							style={{ fontWeight: "bold" }}
							id="basic-nav-dropdown"
							className="m-2 p-1 bg-primary rounded"
						>
							<NavDropdown title="Aufsatzrolladen" className="my-1">
								<NavDropdown.Item as={Link} href="/aufsatzrolladen">
									<span className="text-bold">Aufsatzrolladen </span>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item as={Link} href="aluprofskbstyroterm">
									<span className="text-bold">Aluprof SKB Styroterm</span>
								</NavDropdown.Item>{" "}
								<NavDropdown.Item as={Link} href="aluprofsktstyroterm">
									<span className="text-bold">Aluprof SKT OPOTERM</span>
								</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title="Vorbaurollläden" className="my-1">
								<NavDropdown.Item
									as={Link}
									href="/vorbaurolladen"
									className="my-1"
								>
									<span className="text-bold"> Vorbaurollläden</span>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item as={Link} href="sk45slk45">
									<span className="text-bold">Aluprof SK 45 / SLK 45</span>
								</NavDropdown.Item>{" "}
								<NavDropdown.Item as={Link} href="skopgkr">
									<span className="text-bold">Aluprof SKO-P / GK-R</span>
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} href="skpgkp">
									<span className="text-bold">Aluprof SKP / GK-P</span>
								</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title="Insektenschutz" className="my-1">
								<NavDropdown.Item
									as={Link}
									href="/insektenschutz"
									className="my-1"
								>
									<span className="text-bold"> Insektenschutz</span>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item
									as={Link}
									href="insektenschutzrollsintegriert"
								>
									<span className="text-bold">
										Insektenschutzrolls integriert im Aufsatz-rolladenkasten{" "}
									</span>
								</NavDropdown.Item>{" "}
								<NavDropdown.Item as={Link} href="insektenspannrahmen">
									<span className="text-bold">Insektenspannrahmen</span>
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} href="insektenschutzrollosextra">
									<span className="text-bold">Insektenschutzrollos extra</span>
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Raffstoren?" className="my-1"></NavDropdown>
						</NavDropdown>

						<NavDropdown
							title="Haustüren"
							style={{ fontWeight: "bold" }}
							id="basic-nav-dropdown"
							className="m-2 p-1 bg-primary rounded"
						>
							<NavDropdown title="PVC Türen" className="my-1">
								<NavDropdown.Item as={Link} href="/turenpvc">
									<span className="text-bold">PVC Türen </span>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item as={Link} href="kommerling88">
									<span className="text-bold">Kömmerling 88</span>
								</NavDropdown.Item>{" "}
								<NavDropdown.Item as={Link} href="kommerling76adturen">
									<span className="text-bold">Kömmerling 76 AD</span>
								</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title="ALU Türen" className="my-1">
								<NavDropdown.Item as={Link} href="/turenalu" className="my-1">
									<span className="text-bold"> ALU Türen</span>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item as={Link} href="aliplastgenesis75">
									<span className="text-bold">Aliplast Genesis 75</span>
								</NavDropdown.Item>{" "}
								<NavDropdown.Item as={Link} href="aluprofmb86">
									<span className="text-bold">Aluprof MB 86</span>
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} href="aluprofmb104turen">
									<span className="text-bold">Aluprof MB 104</span>
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} href="schucoads90">
									<span className="text-bold">Schüco ADS 90</span>
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} href="schucoads75">
									<span className="text-bold">Schüco ADS 75</span>
								</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title="Türfüllungen" className="my-1">
								<NavDropdown.Item
									as={Link}
									href="/turfullungen"
									className="my-1"
								>
									<span className="text-bold"> Türfüllungen</span>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item as={Link} href="dindecorpremium">
									<span className="text-bold">Dindecor Die Serie Premium</span>
								</NavDropdown.Item>{" "}
								<NavDropdown.Item as={Link} href="altech">
									<span className="text-bold">AL-TECH</span>
								</NavDropdown.Item>
							</NavDropdown>
						</NavDropdown>

						<Nav.Link as={Link} href="contact" className="m-1">
							<Button
								className="btn-md py-2 btn-green text-white  border-0 shadow-md hover"
								style={{ textTransform: "capitalize" }}
							>
								Kontakt
							</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;
