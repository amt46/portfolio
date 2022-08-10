import React from "react";
import { CgClose } from "react-icons/cg";

import Button from "@mui/material/Button";

const Askhow = ({setAskhow, checkValue, setInpValue, inpValue}) => {
	return (
		<div className="askhow popup">
			<div className="wr-flex popheader pr">
				<p>Enter your name or some date</p>
				<div
					onClick={() => {
						setAskhow(false);
					}}
					className="close cp wr-flex"
				>
					<CgClose />
				</div>
			</div>
			<div className="wr-flex">
				<form onSubmit={(e) => checkValue(e)}>
					<input
						onChange={(e) => {
							setInpValue(e.target.value);
							console.log(inpValue);
						}}
						type="text"
						placeholder="Enter Here"
					/>
					<Button onClick={(e) => checkValue(e)} className="btn">
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Askhow;
