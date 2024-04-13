import { MdOutlinePhoneInTalk, MdMarkEmailRead } from "react-icons/md";
import { Carousel } from "react-bootstrap";

const Footer2 = () => {
	return (
		<footer className="footer">
			<div className="carousel-container">
				<Carousel indicators={false} controls={false} pause={false} wrap={true}>
					<Carousel.Item>
						<div className="col-auto btn-green p-2  text-center">
							<h5 className="text-white text-bold">
								<MdOutlinePhoneInTalk /> 0176 206 147 41
							</h5>
						</div>
					</Carousel.Item>{" "}
					<Carousel.Item>
						<div className="col-auto btn-green p-2  text-center">
							<h5 className="text-white text-bold">Fensterbauer in der nähe</h5>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="col-auto btn-green p-2  text-center">
							<h5 className="text-white text-bold">
								<MdMarkEmailRead /> fenster-figiel@t-online.de
							</h5>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="col-auto btn-green p-2  text-center">
							<h5 className="text-white text-bold">
								Fenster Türen Raffstore Rollladen
							</h5>
						</div>
					</Carousel.Item>
				</Carousel>
			</div>
		</footer>
	);
};

export default Footer2;
