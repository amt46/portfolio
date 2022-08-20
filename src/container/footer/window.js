import { images } from "../../constants";
import { motion } from "framer-motion";
const Window = () => {
	const handleClick = (e) => {
		if (e.target.id === "1")
			window.open("https://www.youtube.com/c/MSquareProgramming");

		if (e.target.id === "2")
			window.open("https://www.youtube.com/c/JavaScriptMastery");

		if (e.target.id === "3")
			window.open("https://github.com/amt46/portfolio");
	};
	return (
		<motion.div className="flex justify-evenly w-100 p-10 flex-col">
			<motion.div className="fm w-100 flex justify-evenly">
				<motion.div className="mt fw-500">
					<motion.p
						whileInView={{ opacity: [0, 1], x: [-50, 0] }}
						transition={{ duration: 0.8 }}
						className="t nt fw-600 drop-shadow-sm"
					>
						My Teachers
					</motion.p>
					<motion.p
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5 }}
						onClick={(e) => handleClick(e)}
						id="1"
						className="m-10 hover:text-blue-400 cp tr flex items-center"
					>
						<img className="tc" src={images.ms} alt="ms" />
						MSquareProgramming
					</motion.p>
					<motion.p
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5 }}
						onClick={(e) => handleClick(e)}
						id="2"
						className="m-10 hover:text-blue-400 cp tr flex items-center"
					>
						<img src={images.jsm} className="tc" alt="ms" />
						JavaScriptMastery
					</motion.p>
					<motion.p className="m-10 flex items-center">
						& Other
					</motion.p>
				</motion.div>
				<motion.div className="">
					<motion.p
						whileInView={{ opacity: [0, 1], x: [50, 0] }}
						transition={{ duration: 0.8 }}
						className="t nt fw-600 drop-shadow-sm"
					>
						Source Code
					</motion.p>
					<motion.p
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5 }}
						onClick={(e) => handleClick(e)}
						id="3"
						className="text-blue-500 hover:text-blue-400 fw-500 tr cp hover:underline"
					>
						https://github.com/amt46/portfolio
					</motion.p>
				</motion.div>
			</motion.div>
			<motion.div whileInView={{opacity: [0,1]}} transition={{duration: .8}} className="fw-800 text-4xl wr-flex m-20 sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
				Thank For Visiting My Portfolio
			</motion.div>
		</motion.div>
	);
};
export default Window;
