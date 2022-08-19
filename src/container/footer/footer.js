import { useEffect, useState } from "react";
import Window from "./window";
import Mobile from "./mobile";
import { getWindowSize } from "../header/header";
import './footer.scss'
const Footer = () => {
	const [windowSize, setWindowSize] = useState(getWindowSize());
	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}
		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);
	if (windowSize.innerWidth >= 900) {
		return <Window />;
	} else if (windowSize.innerWidth <= 899) {
		return <Mobile />;
	}
};
export default Footer;
