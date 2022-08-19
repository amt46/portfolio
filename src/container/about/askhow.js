import { CgClose } from "react-icons/cg";
import { IoCaretBackOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
const Askhow = ({setAskhow, setAboutMe, checkValue, setInpValue, inpValue}) => {
	return (
		<div className="popup pr">
			<div className="popheader flex w-100 justify-between mb-10">
				<div
					onClick={() => {
						setAskhow(false);
						setAboutMe("I know you")
					}}
					className="close cp wr-flex tr"
				>
					<IoCaretBackOutline />
				</div>
				<div
					onClick={() => {
						setAskhow(false);
					}}
					className="close ml-auto cp wr-flex tr"
				>
					<CgClose />
				</div>
			</div>
			<p className="mb-20 drop-shadow-sm fw-500">Enter your name or some date</p>
			<div className="form">
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
