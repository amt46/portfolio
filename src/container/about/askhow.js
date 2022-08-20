import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { IoCaretBackOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
const Askhow = ({
	setAskhow,
	setAboutMe,
	checkValue,
	setInpValue,
	inpValue,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="popup pr"
		>
			<motion.div className="popheader flex w-100 justify-between mb-10">
				<motion.div
					onClick={() => {
						setAskhow(false);
						setAboutMe("I know you");
					}}
					className="close cp wr-flex tr"
				>
					<IoCaretBackOutline />
				</motion.div>
				<motion.div
					onClick={() => {
						setAskhow(false);
					}}
					className="close ml-auto cp wr-flex tr"
				>
					<CgClose />
				</motion.div>
			</motion.div>
			<motion.p className="mb-20 drop-shadow-sm fw-500">
				Enter your name or some date
			</motion.p>
			<motion.div className="form">
				<form onSubmit={(e) => checkValue(e)}>
					<input
						onChange={(e) => {
							setInpValue(e.target.value);
						}}
						type="text"
						placeholder="Enter Here"
					/>
					<Button onClick={(e) => checkValue(e)} className="btn">
						Submit
					</Button>
				</form>
			</motion.div>
		</motion.div>
	);
};
export default Askhow;
