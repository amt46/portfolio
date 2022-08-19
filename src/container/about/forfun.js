import React, { useState, useRef } from "react";
import { motion } from 'framer-motion'
import { CgClose } from "react-icons/cg";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

import { images } from "../../constants";

const forFun = [images.forfun, "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80", "https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"];

const Forfun = (props) => {
	const [showImg, setShowImg] = useState(0);
	const imgRef = useRef();
	const length = forFun.length;

	const forWard = () => {
		setShowImg(showImg === length - 1 ? 0 : showImg + 1);
	};
	 
	const backWard = () => {
		setShowImg(showImg === 0 ? length - 1 : showImg - 1);
	}

	if (!Array.isArray(forFun || forFun.length <= 0)){
		return null;
	}

	return (
		<div className="fun">
			<div className="forfun">
				<div className="box app__flex pr">
					<div className="flex popheader">
						<p>That is crazy!</p>
						<div
							onClick={() => props.setForimg(false)}
							className="close cp wr-flex pa t-10 r-10"
						>
							<CgClose />
						</div>
					</div>
					<div className="app__flex cp img">
						<motion.div whileTap={{scale: .9}} whileHover={{color: "rgba(0,0,0,.8)"}} onClick={backWard} className="text-black icon-img">
							<IoChevronBack/>
						</motion.div>
						{forFun.map((i, index) => (
							<div key={i}>
								{showImg === index && (
									<img ref={imgRef} src={i} alt={i}/>
								)}
							</div>
						))}
						<motion.div whileTap={{scale: .9}} whileHover={{color: "rgba(0,0,0,.8)"}} onClick={forWard} className="text-black icon-img">
							<IoChevronForward/>
						</motion.div>
					</div>
					<div className="app__flex cp">
						{forFun.map((i) => (
							<motion.div
								whileHover={{scale: 1.1}}
								style={showImg === forFun.indexOf(i) ? {backgroundColor: "#2190ff"} : {}}
								onClick={() => {
									setShowImg(forFun.indexOf(i))
									imgRef.current.src = i
								}}
								key={i}
								className="nav"
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Forfun;
