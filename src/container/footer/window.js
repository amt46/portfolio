import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import { images } from '../../constants'
import { client } from "../../client";
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
const cv = {
	expanded: {
		height: "20em",
	},
	hide: {
		height: "3em",
	},
};
const Window = () => {
	 const handleClick = (e) => {
		if(e.target.id === "1")
			window.open("https://www.youtube.com/c/MSquareProgramming")

		if(e.target.id === "2")
			window.open("https://www.youtube.com/c/JavaScriptMastery")

		if(e.target.id === "3")
			window.open("https://github.com/amt46/portfolio")
	};
	return (
		<div className="flex justify-evenly w-100 p-10 flex-col">
			<div className="fm w-100 flex justify-evenly">
				<div className="mt fw-500">
					<p className="t nt fw-600 drop-shadow-sm">My Teachers</p>
					<p onClick={e => handleClick(e)} id="1" className="m-10 hover:text-blue-400 cp tr flex items-center"><img className="tc" src={images.ms} alt="ms"/>MSquareProgramming</p>
					<p onClick={e => handleClick(e)} id="2" className="m-10 hover:text-blue-400 cp tr flex items-center"><img src={images.jsm} className="tc" alt="ms"/>JavaScriptMastery</p>
					<p className="m-10 flex items-center">& Other</p>
				</div>
				<div className="">
					<p className="t nt fw-600 drop-shadow-sm">Source Code</p>
					<p onClick={e => handleClick(e)} id="3" className="text-blue-500 hover:text-blue-400 fw-500 tr cp hover:underline">
						https://github.com/amt46/portfolio
					</p>
				</div>
			</div>
			<div className="fw-800 text-4xl wr-flex m-20 sm:text-xl sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-purple-600 sm:to-pink-600">Thank For Visiting My Portfolio</div>
		</div>
	);
};
export default Window;
