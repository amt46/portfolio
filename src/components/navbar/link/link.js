import React, { useEffect, useRef} from "react";
import Button from "@mui/material/Button";

import nav from "./nav";

const Link = ({ refArray, setCls, cls }) => {
	const sliderRef = useRef();

	function logit() {
		const scrollY = window.pageYOffset;
		const h = window.innerHeight
		if (scrollY >= 100) setCls("home");
		if (scrollY >= h) setCls("about");
		if (scrollY >= h * 2 - 50) setCls("projects");
		if (scrollY >= 1800) setCls("skills");
		if (scrollY >= 2500) setCls("contact");
		if (scrollY <= 99) setCls("nav");
		if (scrollY <= h * 2 -60 && scrollY >= h + 70) setCls("about n-shadow");
	}
	function logit_n() {
		const scrollY = window.pageYOffset;
		if (scrollY >= 50) setCls("home");
		if (scrollY >= 950) setCls("about");
		if (scrollY >= 1750) setCls("projects");
		if (scrollY >= 2300) setCls("skills");
		if (scrollY >= 2500) setCls("contact");
		if (scrollY <= 59) setCls("nav");
		if (scrollY <= 1749 && scrollY >= 1200) setCls("about n-shadow");
	}


	useEffect(() => {
		if (window.innerWidth >= 900) {
			function watchScroll() {
				window.addEventListener("scroll", logit);
			}
			watchScroll();
			return () => {
				window.removeEventListener("scroll", logit);
			};
		}
		if (window.innerWidth <= 989) {
			function watchScroll() {
				window.addEventListener("scroll", logit_n);
			}
			watchScroll();
			return () => {
				window.removeEventListener("scroll", logit_n);
			};
		}
	});

	useEffect(() => {});

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
