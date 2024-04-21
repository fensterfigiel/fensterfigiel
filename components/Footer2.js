import { MdOutlinePhoneInTalk, MdMarkEmailRead } from "react-icons/md";
import { Col, Row } from "react-bootstrap";

const Footer2 = () => {
	return (
		<footer style={{ position: "fixed", bottom: 0, right: 0, padding: "1rem" }}>
			<Row>
				<Col lg={9} md={10} xs={10} className="col-auto btn-green p-2 rounded">
					<h5 className="text-white text-bold ">
						<MdOutlinePhoneInTalk /> 0176 206 147 41
					</h5>
					<h5 className="text-white text-bold ">
						<MdMarkEmailRead /> fenster-figiel@t-online.de
					</h5>
				</Col>
			</Row>
		</footer>
	);
};

export default Footer2;
