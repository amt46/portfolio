import { useRef, useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { images } from "../../constants/index";
import "./header.scss";

const Header = () => {
	const [isImg, setIsImg] = useState(false);

	const projectsRef = useRef(null);
	const skills = [
		{ name: "Node Js", image: images.node, class: "njs" },
		{ name: "React", image: images.react, class: "r" },
		{ name: "Javascript", image: images.javascript, class: "js" },
		{ name: "Sass", image: images.sass, class: "s" },
		{ name: "Redux", image: images.redux, class: "rd" },
	];

	const hoverEffect = (e) => {
		var x =
			e.pageX - e.target.offsetLeft - e.target.offsetParent.offsetLeft;
		var y = e.pageY - e.target.offsetTop - e.target.offsetParent.offsetTop;
		e.target.style.setProperty("--x", x + "px");
		e.target.style.setProperty("--y", y + "px");
	};



	return (
		<div className="app__header wr-flex mh-100 w-100">
			<Tilt className="tr photo ml-[5%]">
				<div
					className="image"
				>
					<img
						className="pho mt-30 br-20 w-90"
						src={images.amt}
						alt="amt"
					/>
				</div>
			</Tilt>
			<div className="content pr wr-flex">
				<div className="text p-20 mb-20">
					<div className="t tr p-20 fw-800">
						<p className="header text-4xl">
							Junior Full Stack{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
								{" "}
								Web & Mobile Developer{" "}
							</span>
						</p>
						<p className="p fw-500">
							Let Join your Development Team for My Experience
						</p>
					</div>
					<div className="image w-70 h-50 wr-flex">
						<img
							className="br-20 w-100 h-100 object-cover"
							src={images.amt}
							alt="amt"
						/>
					</div>
					<div className="container w-100 mt-90">
						<Button
							className="btn"
							onMouseMove={hoverEffect}
							onClick={() => projectsRef.current.click()}
						>
							My Projects
						</Button>
						<Button
							className="btn"
							onMouseMove={hoverEffect}
							onClick={() => projectsRef.current.click()}
						>
							My Skills
						</Button>
						<a
							href="#projects"
							ref={projectsRef}
							style={{ display: "none" }}
						>
							none
						</a>
					</div>
				</div>
				<div className="icon-header wr-flex">
					{skills.map((i) => {
						return (
							<div key={i.name} className={`${i.class} pa`}>
								<div className="img-container flex">
									<img
										className={`${
											i.name === "React" ? "App-logo" : ""
										} icon w-100 tr`}
										onMouseEnter={() => {
											if (i.name === "Javascript")
												setIsImg(!isImg);
										}}
										src={i.image}
										alt={i.name}
									/>
									<AnimatePresence>
										{i.name === "Javascript" && isImg && (
											<motion.div
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
												onClick={() =>
													window.open(
														"https://www.youtube.com/c/MSquareProgramming"
													)
												}
											>
												<img
													className="msteacher pa w-75 tr cp"
													src={images.msprogram}
													alt="msquareprogrammingteacher"
												/>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Header;
