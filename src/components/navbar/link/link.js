import Button from "@mui/material/Button";
import { useEffect, useRef } from "react";
import nav from "./nav";

const Link = ({ refArray, setCls, cls }) => {
  const sliderRef = useRef();
  function logit() {
    const a = refArray[0].current.offsetHeight;
    const b = refArray[1].current.offsetHeight;
    const c = refArray[2].current.offsetHeight;
    const d = refArray[3].current.offsetHeight;
    const scrollY = window.pageYOffset;
    if (scrollY >= 100) setCls("home");
    if (scrollY >= a - 10) setCls("about");
    if (scrollY >= a + b - 10) setCls("projects");
    if (scrollY >= a + b + 50) setCls("projects-blur");
    if (scrollY >= a + b + c - 10) setCls("skills");
    if (scrollY >= a + b + c + d - 10) setCls("contact");
    if (scrollY >= a + b + c + d + 60) setCls("contact-blur");
    if (scrollY <= 99) setCls("nav");
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  const toFindActive = (id) => {
    const clickTag = document.getElementById(id);
    const clickTagWidth = clickTag.offsetWidth;
    const offsetleft = clickTag.offsetLeft;
    sliderRef.current.style.width = clickTagWidth + "px";
    sliderRef.current.style.left = offsetleft + "px";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      for (let i = 0; i < refArray.length; i++) {
        let sec = refArray[i].current;

        if (refArray[i].current) {
          if (window.scrollY >= sec.offsetTop / 1.2) {
            let act = nav.indexOf(sec.id);
            toFindActive(act);
          }
        }
      }
    });
  }, [refArray]);
  const handleClick = (e) => {
    const id = e.target.id;
    if (id) {
      toFindActive(id);
    }
  };
  return (
    <div className="app__link pr app__flex">
      {nav.map((n, i) => (
        <a
          className="app__flex"
          href={`#${n}`}
          key={n}
          onClick={(e) => {
            handleClick(e);
          }}
          id={i}
        >
          <Button className="button tr">
            {n.charAt(0).toUpperCase() + n.slice(1)}{" "}
          </Button>
        </a>
      ))}
      <div ref={sliderRef} className="slider" />
    </div>
  );
};
export default Link;
