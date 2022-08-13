import { useState } from "react";
import { motion,AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import { BsGithub } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs"
import { AiFillCloseCircle } from "react-icons/ai"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import { urlFor } from "../../client";

const Project1 = ({ p }) => {
	const [si,setSi]=useState(null)

	return (
		<AnimateSharedLayout type="switch">
		<div className="w-100 p2">
			<p className="h fs-20 p-0 text-center">
				Some projects are not real. This is my Dream :)
			</p>
			<div className="flex flex-wrap min-h-[300px]">
				{p.map((i, k) => (
					<motion.div
					layoutId={k}
						key={k}
						className="gp tr min-w-[250px] m-10 p-10 bdrr-5 text-black bg-white"
						onClick={() => setSi(i)}
					>
						<motion.div className="w-100 hpx-150 relative">
							<motion.img
								className="img w-full h-full object-cover bdrr-5 mb-10"
								src={urlFor(i.imageurl)}
								alt={i.name}
							/>
							<motion.div className="hi pa t-0 l-0 r-0 b-0 bdrr-5 tr wr-flex">
								<motion.div whileTap={{scale: .9}} onClick={()=>console.log("click")} className="fs-20 i wr-flex hpx-40  wpx-40 bdr-50 m-5 drop-shadow-lg shadow-white">
									<BsGithub />
								</motion.div>
								<motion.div whileTap={{scale: .9}} className="wr-flex i hpx-40 wpx-40 bdr-50 m-5">
									<RemoveRedEyeIcon size={35}/>
								</motion.div>
							</motion.div>
						</motion.div>
						<motion.p className="fw-500">{i.name.split(' ').slice(0,2).join(' ')}</motion.p>
						<motion.p className="fs-14">{i.desc.substring(0, 30)}...</motion.p>
						<motion.button className="tr ab flex items-center bdrr-10"><BsFillInfoCircleFill/><motion.span>Details</motion.span></motion.button>
					</motion.div>
				))}
			</div>
			<AnimatePresence>
				{si &&	<motion.div layoutId={0} className="si bg-white bdrr-20 wpx-700 hpx-400 p-10 pa top-[20%] l-0 r-0 mx-auto">
					<AiFillCloseCircle onClick={() => setSi(null)} size={30}/>
				</motion.div>}
			</AnimatePresence>
		</div>
		</AnimateSharedLayout>
	);
};

export default Project1;
