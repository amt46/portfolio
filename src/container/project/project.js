import { useState, useEffect } from "react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import Button from "@mui/material/Button";

import { motion } from "framer-motion";

import { urlFor, client } from "../../client";

import "./project.scss";

const Project = () => {
	const [projects, setProjects] = useState([]);
	const [sub, setSub] = useState([0, 1, 2]);
	const [forSlide, setForSlide] = useState([]);
	const [toShow, setToShow] = useState();

	useEffect(() => {
		const query = '*[_type == "projects"]';
		client.fetch(query).then((data) => {
			setProjects(data);
			setForSlide(data.filter((x) => sub.includes(data.indexOf(x))));
		});
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
		let a = [];
		for (let i of sub) {
			if (i === projects.length - 1) return;
			a.push(i + 1);
		}
		console.log("sub", a);
		setSub(a);
	};

	const preSlide = (b) => {
		let a = [];
		for (let i of sub) {
			if (i <= 0) return;
			console.log(a.push(i - 1));
		}
		console.log("sub", a);
		setSub(a);
	};

	return (
		<div className="wr-flex mh-100 w-100">
			<div className="w-95">
				<div className="wr-flex">
					<motion.div
						whileTap={{ scale: 0.9 }}
						className="for cp"
						onClick={preBtn}
					>
						<IoChevronBack />
					</motion.div>
					<div className="w-100 wr-flex hpx-300 mb-50">
						<p>{toShow?.name}</p>
						<div className="wpx-200">
							{toShow && (
								<img
									src={urlFor(toShow.imageurl)}
									alt={toShow?.name}
								/>
							)}
						</div>
					</div>
					<motion.div
						whileTap={{ scale: 0.9 }}
						className="back cp"
						onClick={nextBtn}
					>
						<IoChevronForward />
					</motion.div>
				</div>
				<div className="wr-flex w-100 hpx-50">
					{projects?.map((i, j) => (
						<div key={j} className="pr wpx-30 wr-flex cp">
							<div
								className={`${
									toShow?.name === i.name
										? "bg-white"
										: "bg-slate-500"
								} pa top-0 wpx-10 hpx-10 bdr-50`}
							/>
						</div>
					))}
				</div>
				<div className="wr-flex">
					{forSlide?.map((i, index) => (
							<div
								onClick={(e) => onHandleClick(e, i)}
								key={index}
								className="wpx-100 hpx-100"
							>
								<img
									className="w-100 h-100 object-cover"
									src={urlFor(i.imageurl)}
									alt={i.name}
								/>
							</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;
