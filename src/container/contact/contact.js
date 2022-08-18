import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";

import { motion, AnimatePresence } from 'framer-motion'

import { BsFillPhoneFill } from "react-icons/bs";

import MoonLoader from "react-spinners/MoonLoader";
import { client } from "../../client";
import "./contact.scss";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSub, setIsFormSub] = useState(false);
	const [loading, setLoading] = useState(false);
	const [ mes, setMessage ] = useState("Send")

	const tu = useRef(null);
	const toh =useRef(null)

	const handleChange = (e) => {
		if(e.target) setMessage("Send")

		setMessage("Send")
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		const { name, email, message } = formData;
		if (name === "" || email === "" || message === "") return setMessage("Please fill all fields :(");
		setLoading(true);

		const contact = {
			_type: "contact",
			name: name,
			email: email,
			message: message,
		};

		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSub(true);
			setTimeout(() => {
			tu.current.remove();
		}, 3000);

		});
	};

	return (
		<div className="wr-flex w-100 c-c">
			<div className="wr-flex w-95 flex-wrap">
				{!isFormSub ? (
					<div ref={toh} className="flex text-center flex-col flex-1">
						<p className="h fs-2  mb-20 t drop-shadow-sm">
							Do you want to tell Something
						</p>
						<p className="mb-20 nt ph wr-flex">
							<BsFillPhoneFill /> +959 750 151 241
						</p>
						<p className="mb-20 nt">amt.code.4621@gmail.com</p>
						<form className="form wr-flex">
							<input
								name="name"
								onChange={(e) => handleChange(e)}
								type="text"
								placeholder="Enter Your Full Name"
							/>
							<input
								name="email"
								onChange={(e) => handleChange(e)}
								type="email"
								placeholder="Your Email"
							/>
							<textarea
								name="message"
								onChange={(e) => handleChange(e)}
								placeholder="Your Message"
							/>
							<Button onClick={handleSubmit}>
								{mes}
								{loading && <MoonLoader size={20} />}
							</Button>
						</form>
					</div>
				) : (
					<AnimatePresence>
					<motion.div
						ref={tu}
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						className="h text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
					>
						Thank for Your Message{" "}
					</motion.div>
					</AnimatePresence>
				)}
			</div>
		</div>
	);
};

export default Contact;
