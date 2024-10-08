import { Html, Head, Main, NextScript } from "next/document";
import dotenv from "dotenv";
dotenv.config();

export default function Document() {
	return (
		<Html lang="de">
			<Head>
				<link rel="icon" href="/assets/1logo50x50.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
