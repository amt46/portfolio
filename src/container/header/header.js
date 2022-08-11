import { useRef, useState } from "react";

import Button from "@mui/material/Button";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { images } from "../../constants/index";
import "./header.scss";

const Header = () => {
	const [isImg, setIsImg] = useState(false);

	const projectsRef = useRef(null);
	const skillsRef = useRef(null);

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
		<div className="app__header flex w-100">
			<Tilt className="img1 p-40 flex-auto w-32">
				<div className="w-full h-[500px] mx-auto">
					<img
						className="w-full h-full object-cover rounded-xl"
						src={images.amt}
						alt="amt"
					/>
				</div>
			</Tilt>
			<div className="flex-auto w-64 p-40">
				<div className="h-full rc flex flex-col justify-evenly">
					<div className="">
						<p className="h">
							Junior Full Stack{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
								{" "}
								Web & Mobile Developer{" "}
							</span>
						</p>
						<p className="fs-20 fw-500 mt-20 mb-20">
							Let Join your Development Team for My Experience
						</p>
					</div>
					<div className="img2 w-[350px] h-[500px] hidden">
						<img
							className="w-full h-full object-cover bdrr-10"
							src={images.amt}
							alt="amt"
						/>
					</div>
					<div className="bc">
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
							onClick={() => skillsRef.current.click()}
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
						<a
							href="#skills"
							ref={skillsRef}
							style={{ display: "none" }}
						>
							none
						</a>
					</div>
				</div>
				<div className="flex">
					{skills.map((i) => {
						return (
							<div key={i.name} className={`${i.class} sk wpx-70 pa`}>
								<div className="">
									<img
										className={`${
											i.name === "React" ? "App-logo" : ""
										} icon w-full h-full object-cover tr`}
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
													className="mt"
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
