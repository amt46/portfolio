import React, { useState } from "react";
import Button from "@mui/material/Button";

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

	const { name, email, message } = formData;

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
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
		});
	};

	return (
		<div className="wr-flex mh-100 w-100">
			<div className="wr-flex w-95">
				{!isFormSub ? (
					<div className="flex flex-col flex-1">
						<h1>Do you want to tell Something</h1>
						<p>+959 750 151 241</p>
						<p>amt.code.4621@gmail.com</p>
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
								{loading ? "Sending" : "Send"}{" "}
								{loading && <MoonLoader size={20} />}
							</Button>
						</form>
					</div>
				) : (
					<div className=""> Thank for Your Message </div>
				)}
				<div className="wr-flex flex-initial w-60 bg-pink-600">
					<h2>Sign up as a reviewer of my website</h2>
				</div>
			</div>
		</div>
	);
};

export default Contact;
