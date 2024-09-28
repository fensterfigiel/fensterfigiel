import React, { useEffect } from "react";

import "../styles/globals.css";

import Layout from "/components/Layout";
import { useRouter } from "next/router";

function App(props) {
	const { Component, pageProps, router } = props;
	const reactRouter = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {};

		reactRouter.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			reactRouter.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [reactRouter.events]);

	return (
		<Layout>
			<Component {...pageProps} key={router.route} />
		</Layout>
	);
}

export default App;
