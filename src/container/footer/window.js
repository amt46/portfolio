import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import { motion, AnimatePresence } from "framer-motion";

const imgs = [
	{
		img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		name: "Aung Myo Thu",
		link: "www.facebook.com/amt.832003",
		color: "pink",
	},
	{
		img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		name: "Htike Thu Aung",
		link: "www.facebook.com/amt.832003",
		color: "#3a86ff",
	},
	{
		img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		name: "Aung Myo Thu",
		link: "www.facebook.com/amt.832003",
		color: "#fca311",
	},
	{
		img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		name: "Aung Myo Thu",
		link: "www.facebook.com/amt.832003",
		color: "#f72585",
	},
	{
		img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		name: "Htike Thu Aung",
		link: "www.facebook.com/amt.832003",
		color: "#00b4d8",
	},
	{
		img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		name: "Aung Myo Thu",
		link: "www.facebook.com/amt.832003",
		color: "#3c096c",
	},
	{
		img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		name: "Htike Thu Aung",
		link: "www.facebook.com/amt.832003",
		color: "#577399",
	},
	{
		img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		name: "Aung Myo Thu",
		link: "www.facebook.com/amt.832003",
		color: "#fca311",
	},
	{
		img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		name: "Htike Thu Aung",
		link: "www.facebook.com/amt.832003",
		color: "#fca311",
	},
];

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { scale: 0 },
	visible: {
		scale: 1,
	},
};

const Window = () => {
	const [name, setName] = useState(0);

	return (
		<div className="window min-h-[50vh] w-100 flex p-10">
			<div className="flex-[.6] flex flex-col">
				<div className="mt hpx-200 flex-1 fw-500">
					<p className="t nt fw-600 drop-shadow-sm">My Teachers</p>
					<p>MSquareProgramming</p>
					<p>JavaScriptMastery</p>
				</div>
				<div className="flex-1 hpx-200">
					<p className="t nt fw-600 drop-shadow-sm">Source Code</p>
					<p className="text-blue-500 hover:text-blue-400 fw-500 tr cp hover:underline">
						https://github.com/amt46/portfolio
					</p>
				</div>
			</div>
			<div className="cm flex-1">
				<p className="text-center t nt fw-600 drop-shadow-sm">
					Register as a visitor to my website
				</p>
				<div>
					<motion.div
						initial="hidden"
						animate="visible"
						variants={container}
						className="w-100 rrs"
					>
						{imgs.map((i, k) => (
							<motion.div
								whileTap={{ scale: 0.9 }}
								variants={item}
								initial="hidden"
								animate="visible"
								className="hpx-50 m-5 pr wr-flex"
								key={k}
								onMouseEnter={() => setName(k + 1)}
								onMouseLeave={() => setName(0)}
							>
								<motion.div
									className="hpx-50 wpx-50"
									style={
										name === k + 1
											? {
													zIndex: "10",
													cursor: "pointer",
											  }
											: {}
									}
								>
									<motion.img
										style={{borderColor: i.color}}
										className="rr ri bdr-50"
										src={i.img}
										alt=""
									/>
								</motion.div>
								{name === k + 1 && (
									<AnimatePresence>
										<motion.div
											style={{backgroundColor: i.color}}
											className="z h-100 pa l-22 fw-500 drop-shadow-sm ani flex justify-end items-center pr-10"
											initial={{ width: 0 }}
											animate={{ width: 160 }}
											exit={{ width: 0 }}
											transition={{
												duration: 0.5,
												type: "forward",
											}}
										>
											<motion.p
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
												transition={{ delay: 0.5 }}
											>
												{i.name}
											</motion.p>
										</motion.div>
									</AnimatePresence>
								)}
							</motion.div>
						))}
					</motion.div>
					<div className="op w-100 wr-flex drop-shadow-lg mt-auto">
						<Button>Open Form</Button>
					</div>
				</div>
			</div>
			<div className="flex-1 lg:flex-[.6]">
				<p className="text-center t nt fw-600 drop-shadow-sm">
					Comment me
				</p>
			</div>
		</div>
	);
};

export default Window;
