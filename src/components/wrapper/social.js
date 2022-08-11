import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";

export const handleClick = (e, i) => {
	window.open(`${i.link}`);
};

const Social = ({ classNames }) => {
	const [tooltip, setTooltip] = useState(null);

	const icons = [
		{
			icon: FaFacebookF,
			label: "Facebook",
			link: "https://www.facebook.com/aung.832003/",
		},
		{ icon: FaTwitter, label: "Twitter", link: "" },
		{ icon: IoLogoInstagram, label: "Instagram", link: "" },
		{ icon: FiYoutube, label: "YouTube", link: "" },
	];

	return (
		<div className="app__social">
			{icons.map((i) => {
				const Icon = i.icon;
				return (
					<div
						onClick={(e) => handleClick(e, i)}
						onMouseEnter={() => setTooltip(i.label)}
						onMouseLeave={() => setTooltip(null)}
						className={`${
							classNames + "-social"
						} "icon" cp m-5 bdr-50 p-10 fs-20 pr flex tr`}
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
					</div>
				);
			})}
		</div>
	);
};

export default Social;
