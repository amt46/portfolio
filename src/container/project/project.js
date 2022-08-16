import React, { useEffect, useState } from "react";

import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import { VscSplitHorizontal } from "react-icons/vsc";

import { motion, AnimatePresence } from "framer-motion";

import { client, urlFor } from "../../client";
import Project1 from "./project1";
import Slide from "./components/slide";

import "./project2.scss";

const Project = ({ projectsRef }) => {
	const [g, setG] = useState(false);
	const [p, setP] = useState([]);
	const [po, setPo] = useState(0);

	const getData = async () => {
		console.log("i am calling");
		const query = '*[_type == "projects"]';
		await client
			.fetch(query)
			.then((data) => {
				setP(data);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		console.log("i call");
		getData();
	}, []);

	const onr = () => {
		if (po < p.length - 1) {
			setPo(po + 1);
		}
	};
	const onl = () => {
		if (po > 0) {
			setPo(po - 1);
		}
	};

	function poopityScoop() {
		window.ononline = (event) => {
			console.log("Back Online");
			console.log("i call from global");
			getData();
		};

		window.onoffline = (event) => {
			console.log("Connection Lost");
		};
	}
	poopityScoop();
	return (
		<div ref={projectsRef} className="pm wr-flex w-100 h-90">
			{p.length === 0 && (
				<p className="loading">
					<div class="loader">
						<div class="inner one"></div>
						<div class="inner two"></div>
						<div class="inner three"></div>
					</div>
				</p>
			)}
			{g && <Project1 p={p} />}
			{p.length > 0 && (
				<AnimatePresence>
					<div onClick={() => setG(!g)} className="c-p z pa t-70 r-30 cp">
						{!g ? (
							<motion.div
								whileInView={{ scale: [0.7, 1.1, 1] }}
								whileTap={{ scale: 0.9 }}
								whileHover={{ scale: 1.1 }}
								initial={{ opacity: 0.8 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0.8 }}
								className="drop-shadow-xl"
							>
								<HiOutlineViewGrid size={30} />
							</motion.div>
						) : (
							<motion.div
								whileTap={{ opacity: 0.9 }}
								whileHover={{ scale: 1.1 }}
								initial={{ opacity: 0.8 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0.8 }}
								className="drop-shadow-xl"
							>
								<VscSplitHorizontal size={30} />
							</motion.div>
						)}
					</div>
				</AnimatePresence>
			)}
			{!g && (
				<div className="bi">
					{p?.map((i, k) => {
						if (k === po)
							return (
								<motion.img
									initial={{ opacity: 0 }}
									animate={{
										opacity: k === po ? 0.1 : 0,
									}}
									key={k}
									className="w-full h-full object-cover"
									src={urlFor(i.imageurl)}
									alt={i.name}
								/>
							);
					})}
				</div>
			)}
			{!g && (
				<motion.button
					disabled={po === 0 ? true : false}
					whileTap={po === 0 ? {} : { scale: 0.9 }}
					style={
						po === 0
							? { color: "rgba(255, 255, 255, 0.5)" }
							: { cursor: "pointer" }
					}
					className="z for wr-flex fs-30"
					onClick={onl}
				>
					{p.length !== 0 && <IoChevronBack />}
				</motion.button>
			)}
			{!g && <Slide p={p} po={po} setPo={setPo} onr={onr} onl={onl} />}
			{!g && (
				<motion.button
					disabled={po === p.length - 1 ? true : false}
					whileTap={po === p.length - 1 ? {} : { scale: 0.9 }}
					style={
						po === p.length - 1
							? { color: "rgba(255, 255, 255, 0.5)" }
							: { cursor: "pointer" }
					}
					className="z for wr-flex fs-30 mr-5"
					onClick={onr}
				>
					{p.length !== 0 && <IoChevronForward />}
				</motion.button>
			)}
			{!g && (
				<div className="dot pa b-0 l-0 r-0 mx-auto wr-flex">
					{p.map((i, k) => (
						<div
							onClick={() => setPo(k)}
							key={k}
							className={`${
								po === k ? "bg-white" : "bg-zinc-500"
							} cp hpx-10 wpx-10 bdr-50 m-10`}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Project;
