import React, { useEffect, useState, useRef } from "react";

import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { client, urlFor } from "../../client";

import "./project.scss";

const Project = () => {
	const [p, setP] = useState([]);
	const [po, setPo] = useState(0);
	const [size, setSize] = useState({
		h: window.innerHeight,
		w: window.innerWidth,
	});

	const handlers = useSwipeable({ onSwiped: () => console.log("swiped") });

	// setup ref for your usage
	const myRef = React.useRef();

	const refPassthrough = (el) => {
		// call useSwipeable ref prop with el
		handlers.ref(el);

		// set myRef el so you can access it yourself
		myRef.current = el;
	};

	useEffect(() => {
		const query = '*[_type == "projects"]';
		client
			.fetch(query)
			.then((data) => {
				setP(data);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		const resize = () => {
			setSize({
				h: window.innerHeight,
				w: window.innerWidth,
			});
			console.log(size);
		};

		window.addEventListener("resize", resize);

		return (_) => {
			window.removeEventListener("resize", resize);
		};
	});

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

	return (
		<div
			{...handlers}
			ref={refPassthrough}
			className="overflow-hidden wr-flex w-100 h-90 pb-30"
		>
			<div className="flex overflow-hidden">
				{p?.map((i, k) => (
					<motion.img
						initial={{ rotation: -180 }}
						animate={{
							left: `${k - po}vw`,
							scale: k === po ? 1 : 1,
							opacity: k === po ? .1 : 0,
						}}
						key={k}
						className="bi w-full h-full object-cover"
						src={urlFor(i.imageurl)}
						alt={i.name}
					/>
				))}
			</div>
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
				{p && <IoChevronBack />}
			</motion.button>
			<div
				style={{ touchAction: "auto" }}
				className="pr w-100 hpx-490 wr-flex"
			>
				{p?.map((i, j) => (
					<motion.div
						key={j}
						initial={{ scale: 0, rotation: -180 }}
						animate={{
							rotate: 0,
							left: `${(j - po) * 65 + 4.5}vw`,
							scale: j === po ? 1 : 0.8,
							opacity: j === po ? 1 : 0,
						}}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
						className="c pa l-0 t-0 w-90 h-100 overflow-hidden p-10"
					>
						<p className="font-bold leading-tight text-2xl text-center mb-30">
							{i.name}
						</p>
						<div className="w-full h-full flex p-10">
							<div className="flex-1 ">
								<img
									className="w-100 hpx-350 bdrr-10 object-cover"
									src={urlFor(i.imageurl)}
									alt={i.name}
								/>
							</div>
							<p className="ml-10 flex-1 p fs-20">{i.desc}</p>
						</div>
					</motion.div>
				))}
			</div>
			<motion.button
				disabled={po === p.length - 1 ? true : false}
				whileTap={po === p.length - 1 ? {} : { scale: 0.9 }}
				style={
					po === p.length - 1
						? { color: "rgba(255, 255, 255, 0.5)" }
						: { cursor: "pointer" }
				}
				className="z for wr-flex fs-30 mr-8"
				onClick={onr}
			>
				{p && <IoChevronForward />}
			</motion.button>
			<div className="pa b-0 l-0 r-0 mx-auto wr-flex">
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
		</div>
	);
};

export default Project;
