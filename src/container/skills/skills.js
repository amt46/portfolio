import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import { getWindowSize } from "../header/header";
import { client, urlFor } from "../../client";
import "./skills.scss";
const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};
const item = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
	},
};
const Skills = () => {
	const [windowSize, setWindowSize] = useState(getWindowSize());
	const [skills, setSkills] = useState([]);
	const [ss, setSs] = useState(null);
	const [ih, setIh] = useState("");
	const [rate, setRate] = useState(0);
	const [ref, hasClickedOutside] = useClickOutside();
	useEffect(() => {
		if (hasClickedOutside) {
			setSs(null);
			setRate(0);
		}
	}, [hasClickedOutside]);
	const getData = () => {
		const query = '*[_type == "skills"]';
		client
			.fetch(query)
			.then((data) => {
				setSkills(
					data.sort((a, b) => {
						return b.skill.length - a.skill.length;
					})
				);
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getData();
		if (navigator.onLine) getData();
	}, []);
	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);
	var timer;
	let counter = 0;
	const getRate = (e, a) => {
		setRate(0);
		const position = e.target.getBoundingClientRect();
		if (("element", position.left + 200 >= window.innerWidth)) {
			const ele = document.getElementById("skill_bar");
			if (ele) {
				console.log(ele);
				ele.style.left = "-150px";
			}
		}
		clearInterval(timer);
		timer = setInterval(() => {
			if (counter === a.rate) {
				console.log("equal");
				clearInterval(timer);
				return;
			}

			setRate(counter + 1);
			counter++;
		}, ss?.rate / 1000);
	};
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="visible"
			className="s-c w-100 flex flex-col"
		>
			{skills.length === 0 && (
				<div className="loader">
					<div className="inner2 one2"></div>
					<div className="inner2 two2"></div>
					<div className="inner2 three2"></div>
				</div>
			)}
			{skills?.map((i, index) => (
				<motion.div variants={item} className="w-99 sc m-5" key={index}>
					<p
						className={`${
							i.skill.includes(ih)
								? "text-blue-400 fw-500 drop-shadow-xl"
								: "drop-shadow-sm "
						} font-medium leading-tight text-2xl mt-0 mb-2 s-1 ml-20 tr`}
					>
						{i.title}
					</p>
					<AnimatePresence>
						{windowSize.innerWidth <= 640 && i.skill.includes(ih) && (
							<motion.div
								initial={{ opacity: 0, height: 10 }}
								animate={{ opacity: 1, height: 70 }}
								className="w-80  mx-auto bg-blue-500 mt-10 bdrr-10 p-10 "
							>
								<div className="items-center flex w-100">
									<label className="text-white fw-600 mr-2 w-30 whitespace-nowrap">
										Skill Rate
									</label>
									<motion.div
										initial={{ width: 0 }}
										transition={{ delay: 0.5 }}
										className="hpx-10 bdrr-5 bg-white"
										animate={{ width: `${ih.rate}%` }}
									></motion.div>
								</div>
								<motion.div className="flex w-[auto] mx-auto fw-600 fs-1 text-white text-center mt-5">
									{!ih && (
										<motion.p className="">
											Click on what you want to know
										</motion.p>
									)}
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
									>
										{ih.name?.split(" ")[0].toUpperCase()}
									</motion.p>
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										className="ml-[auto]"
									>{`${ih.rate}%`}</motion.p>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
					<motion.div
						variants={container}
						initial="hidden"
						animate="visible"
						className="i s-2 flex flex-wrap"
					>
						{i.skill.map((a, j) => (
							<motion.div
								variants={item}
								key={a.name}
								whileTap={{ scale: 0.9 }}
								className="pr sk-c wpx-90 m-5 wr-flex hpx-90 ml-50"
								onMouseEnter={(e) => {
									setIh(a);
									setSs(null);
									if (windowSize.innerWidth <= 640) return;
									setSs(a);
									getRate(e, a);
								}}
								onMouseLeave={(e) => {
									if (windowSize.innerWidth <= 640) return;
									if (rate === a.rate) {
										setSs(null);
										setRate(0);
									}
									clearInterval(timer);
								}}
							>
								<img
									className="sk-i w-full h-full object-contain drop-shadow-sm tr shadow-white"
									style={
										a.name === "Neovim" ||
										a.name === "Vim" ||
										a.name === "Visual Studio Code" ||
										a.name === "Github"
											? { width: "80%", height: "80%" }
											: {}
									}
									src={urlFor(a.imageurl)}
									alt={a.name}
								/>
								{ss?.name === a.name && (
									<div
										ref={ref}
										id="skill_bar"
										className="skill-bar"
									>
										<div className="pr">
											<motion.div
												style={
													rate === 0
														? {
																opacity: 0,
																left: 0,
														  }
														: { opacity: 1 }
												}
												initial={{ left: 0 }}
												animate={{
													left: `${ss.rate - 15}%`,
												}}
												className="svg-c tr wpx-58 pa z b-12"
											>
												<p className="pa tr ml-15 mt-3 z text-white">
													{rate}%
												</p>
												<svg
													width="58"
													height="35"
													viewBox="0 0 58 35"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M29.5 35L22.1388 25.25L36.8612 25.25L29.5 35Z"
														fill="#2F2F2F"
													/>
													<rect
														width="58"
														height="28"
														rx="5"
														fill="#2F2F2F"
													/>
												</svg>
											</motion.div>
											<div className="s-b">
												<motion.div
													initial={{ width: 30 }}
													animate={{
														width: `${ss.rate}%`,
													}}
													style={
														rate === 0
															? {
																	opacity: 0,
																	width: 30,
															  }
															: { opacity: 1 }
													}
													className="h-100 tr w-100 bg-blue-400 bdrr-5"
												/>
											</div>
										</div>
										<p className="f-b text-blue-400 nt fw-600 drop-shadow-xl text-center">
											{a.name
												.split(" ")
												.slice(0, 3)
												.join(" ")}
										</p>
									</div>
								)}
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			))}
		</motion.div>
	);
};
export default Skills;
