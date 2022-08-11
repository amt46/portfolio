import { useState, useEffect } from "react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import MoonLoader from "react-spinners/MoonLoader";

import { motion } from "framer-motion";

import { urlFor, client } from "../../client";

import "./project.scss";

const Project = () => {
	const [projects, setProjects] = useState([]);
	const [sub, setSub] = useState([0, 1, 2]);
	const [forSlide, setForSlide] = useState([]);
	const [toShow, setToShow] = useState();
	const [loading, setLoading] = useState(false);
	const [backDisable, setBackDisable] = useState(false);
	const [nextDisable, setNextDisable] = useState(false);

	useEffect(() => {
		const query = '*[_type == "projects"]';
		client
			.fetch(query)
			.then((data) => {
				setProjects(data);
				setForSlide(data.filter((x) => sub.includes(data.indexOf(x))));
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		if (forSlide)
			setForSlide(
				projects.filter((x) => sub.includes(projects.indexOf(x)))
			);
	}, [sub]);

	useEffect(() => {
		if (toShow) return;
		if (forSlide) setToShow(forSlide[0]);
	}, [forSlide, setToShow, toShow]);

	const onHandleClick = (e, i) => {
		const a = forSlide.indexOf(i);
		setToShow(i);
		console.log(a, forSlide[2]);
		if (a === 2) nextSlide();
		if (a === 0) preSlide();
	};

	const nextBtn = () => {
		const b = forSlide.indexOf(toShow);
		console.log("i", b);
		if (b === 2) {
			nextSlide();
		} else if (b === 0) {
			setToShow(forSlide[b + 1]);
		} else if (b === 1) {
			setToShow(forSlide[b + 1]);
			nextSlide();
		}
	};
	const preBtn = () => {
		const b = forSlide.indexOf(toShow);
		console.log("i", b);
		if (b === 0) {
			preSlide();
		} else if (b === 2) {
			setToShow(forSlide[b - 1]);
		} else if (b === 1) {
			setToShow(forSlide[b - 1]);
			preSlide();
		}
	};

	const nextSlide = () => {
		setBackDisable(false);
		let a = [];
		for (let i of sub) {
			if (i === projects.length - 1) return setNextDisable(true);
			setNextDisable(false);
			a.push(i + 1);
		}
		setSub(a);
	};

	function poopityScoop() {
		window.ononline = (event) => {
			console.log("Back Online");
		};

		window.onoffline = (event) => {
			console.log("Connection Lost");
		};
	}
	poopityScoop();

	const preSlide = () => {
		setNextDisable(false);
		let a = [];
		for (let i of sub) {
			if (i <= 0) return setBackDisable(true);
			setBackDisable(false);
			a.push(i - 1);
		}
		setSub(a);
	};

	const navClick = (e, i) => {
		setToShow(i);
		const a = projects.indexOf(i);
		if (a === projects.length - 1) {
			setNextDisable(true);
		} else if (a === 0) {
			setBackDisable(true);
		} else {
			setBackDisable(false);
			setNextDisable(false);
		}
		if (a <= 0) {
			return setSub([0, 1, 2]);
		} else if (a >= projects.length - 1) {
			return setSub([a - 2, a - 1, a]);
		}

		setSub([a - 1, a, a + 1]);
	};

	return (
		<div className="w-99 flex items-center">
			{/*toShow && (
				<div className="">
					<img
						className="bi w-full h-full object-cover"
						src={urlFor(toShow.imageurl)}
						alt={toShow?.name}
					/>
				</div>
			)*/}
			<motion.button
				disabled={backDisable ? true : false}
				whileTap={backDisable ? {} : { scale: 0.9 }}
				style={backDisable ? { color: "rgba(255, 255, 255, 0.5)" } : {}}
				className="z for wr-flex"
				onClick={preBtn}
			>
				{toShow && <IoChevronBack />}
			</motion.button>
			<div className="z i-2">
				<div className="mx-auto">
					<div className="p-20 hpx-400 mx-auto max-w-[900px] ">
						<div className="">
							{!toShow && (
								<div className="">
									<MoonLoader color="#fff" size={30} />
								</div>
							)}
							<p className="">{toShow?.name}</p>
							<div className="">
								<div className="">
									{toShow && (
										<div className="wpx-400 hpx-300">
											<img
												className="z w-full h-full object-cover"
												src={urlFor(toShow.imageurl)}
												alt={toShow?.name}
											/>
										</div>
									)}
								</div>
								{toShow && <p className="">{toShow.desc}</p>}
							</div>
						</div>
					</div>
					<div className="flex mt-0 wpx-100 mx-auto hpx-50 z">
						{projects?.map((i, j) => (
							<div key={j} className="pr mx-auto">
								<div
									onClick={(e) => {
										navClick(e, i);
									}}
									className={`${
										toShow?.name === i.name
											? "bg-white"
											: "bg-slate-500"
									} cp z wpx-10 hpx-10 bdr-50 pa`}
								/>
							</div>
						))}
					</div>
					<div className="flex justify-center mx-auto w-100">
						{forSlide?.map((i, index) => (
							<div
								onClick={(e) => onHandleClick(e, i)}
								key={index}
								className={`${
									i.name === toShow?.name
										? "active"
										: "opacity-75"
								} wpx-100 hpx-100 m-5`}
							>
								<img
									className="w-full h-full object-cover bdrr-5"
									src={urlFor(i.imageurl)}
									alt={i.name}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<motion.div
				className="z back wr-flex"
				onClick={nextBtn}
				disabled={nextDisable ? true : false}
				whileTap={nextDisable ? {} : { scale: 0.9 }}
				style={nextDisable ? { color: "rgba(255, 255, 255, 0.5)" } : {}}
			>
				{toShow && <IoChevronForward />}
			</motion.div>
		</div>
	);
};

export default Project;
