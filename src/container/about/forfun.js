import React, { useState, useRef } from "react";
import { CgClose } from "react-icons/cg";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

import { images } from "../../constants";

const forFun = [images.forfun, images.react, images.javascript];

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
		<div className="fun ">
			<div className="forfun">
				<div className="box app__flex">
					<div className="flex popheader pr">
						<p>That is crazy!</p>
						<div
							onClick={() => props.setForimg(false)}
							className="close cp wr-flex"
						>
							<CgClose />
						</div>
					</div>
					<div className="app__flex cp img">
						<div onClick={backWard} className="icon-img">
							<IoArrowBackCircle />
						</div>
						{forFun.map((i, index) => (
							<div key={i}>
								{showImg === index && (
									<img ref={imgRef} src={i} alt={i}/>
								)}
							</div>
						))}
						<div onClick={forWard} className="icon-img">
							<IoArrowForwardCircle />
						</div>
					</div>
					<div className="app__flex cp">
						{forFun.map((i) => (
							<div
								style={showImg === forFun.indexOf(i) ? {backgroundColor: "pink"} : {}}
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
