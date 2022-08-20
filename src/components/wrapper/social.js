import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";
const handleClick = (e, i) => {
	if(i.link !== ""){
	window.open(`${i.link}`);
	} else {
		return
	}
};
export const icons = [
		{
			icon: FaFacebookF,
			label: "Facebook",
			link: "https://www.facebook.com/amt46",
		},
		{ icon: FaTwitter, label: "Twitter", link: "https://twitter.com/amt4621" },
		{ icon: IoLogoInstagram, label: "Instagram", link: "" },
		{ icon: FiYoutube, label: "YouTube", link: "" },
	];
const Social = ({ classNames }) => {
	const [tooltip, setTooltip] = useState(null);

	return (
		<motion.div  className="app__social">
			{icons.map((i,k) => {
				const Icon = i.icon;
				return (
					<motion.div
						whileInView={{opacity: [0,1], scale: [0,1]}}
						transition={{duration: .3, type: "spring", bounce: 0.25 }}
						onClick={(e) => handleClick(e, i)}
						onMouseEnter={() => setTooltip(i.label)}
						onMouseLeave={() => setTooltip(null)}
						className={`${
							classNames + "-social"
						} drop-shadow-lg cp m-5 bdr-50 p-10 text-lg pr flex tr`}
						key={i.label}
					>
						<Icon />
						<AnimatePresence>
							{tooltip === i.label && (
								<motion.p
									className="pa wh flex"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									{i.label}
								</motion.p>
							)}
						</AnimatePresence>
					</motion.div>
				);
			})}
		</motion.div>
	);
};
export default Social;
