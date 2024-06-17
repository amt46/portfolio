import { useEffect, useState } from "react";
import { getWindowSize } from "../header/header";
import "./footer.scss";
import Mobile from "./mobile";
import Window from "./window";

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
