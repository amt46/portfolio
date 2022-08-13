import { motion } from 'framer-motion'

import { BsGithub } from "react-icons/bs";
import { MdEmojiEmotions } from "react-icons/md";

import { urlFor } from "../../../client";
import Button from "@mui/material/Button";


const Slide = ({p,po,setPo, onr, onl}) => {
	
	return (
			<motion.div className="pr pc w-100 h-100">
				{p?.map((i, j) => (
					<motion.div
						drag="x"
						dragConstraints={{ right: 0, left: 0 }}
						key={j}
						initial={{ scale: 0, rotation: -180 }}
						animate={{
							rotate: 0,
							left: `${(j - po) * 80 + 0}vw`,
							scale: j === po ? 1 : 0.8,
							opacity: j === po ? 1 : 0,
						}}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
						onDragEnd={(e, i) => {
							console.log(i.offset);
							if (i.offset.x > 0) onl();
							if (i.offset.x < 0) onr();
						}}
						className="c pa l-0 t-0 w-100 p-20"
					>
						<p className="font-bold hd leading-tight text-2xl text-center mb-30">
							{i.name}
						</p>
						<div className="w-full c h-full flex">
							<div className="flex-auto w-40">
								<img
									className="w-100 hpx-350 bdrr-10 object-cover"
									src={urlFor(i.imageurl)}
									alt={i.name}
								/>
							</div>
							<div className="ml-40 flex-auto flex justify-between flex-col w-60 p-20">
								<p className="desc p fs-20">{i.desc}</p>
								<div className="btn">
									<Button>
										<BsGithub size={20} />
										Github
									</Button>
									<Button>
										<MdEmojiEmotions size={20} />
										Live Demo
									</Button>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
	)
}

export default Slide
