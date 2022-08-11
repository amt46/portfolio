import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";

import Forfun from "./forfun";
import Family from "./family/family";
import Askhow from "./askhow";

import "./about.scss";

const About = () => {
	const [bigWin, setBigWin] = useState(false);
	const [forimg, setForimg] = useState(false);
	const [readMore, setReadMore] = useState(false);
	const [aboutMe, setAboutMe] = useState(null);
	const [family, setFamily] = useState("");
	const [askhow, setAskhow] = useState(false);
	const [inpValue, setInpValue] = useState("");

	const ltaRef = useRef(null);

	useEffect(() => {
		if(window.innerWidth >= 600) setBigWin(true);
	}, []);
	const checkValue = (e) => {
		e.preventDefault();
		const v = inpValue.toLowerCase().replace(/ /g, "");
		if (v === "yaminaye" || v === "maungmyo" || v === "tintunoo") {
			setFamily(v);
		}
		return;
	};

	if (family === "") {
		return (
			<div className="app__about pr">
				<a ref={ltaRef} style={{ display: "none" }} href="#about">
					none
				</a>
				<div className="mt-10 wr-flex pr">
					<div className="w-90">
						<p className="h text-4xl fw-800 mt-30 mb-30">
							Welcome to{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
								{" "}
								My Portfolio website{" "}
							</span>
						</p>
						<p className="fs-20 fw-600 mb-20">
							What do I do and What's in it for you?
						</p>
						<div className={`forcontent hpx-300 ${readMore ? "sy" : ""}`}>
							<p className="p-t">
								My goal is Mobile Developer. I want to use
								Javascript for this and React Native. Because I
								started programming with javascript from Msquare
								Programming YouTube Channel and more. I want to
								learn Python for backend. But I think there is
								no one who can explain Python basic like Msquare
								Programming teacher.{" "}
								{!bigWin && (
									<span
										onClick={() => setReadMore(!readMore)}
									>
										see more
									</span>
								)}
							</p>
							{(bigWin || readMore) && (
								<p className="p-t">
									There is one problem I have never worked
									with a team. But I want start with you if
									you are programmer. I want create that
									projects social media like Facebook,
									Instagram and Online Shop App like lazada.
									For this I am keep learning and I need more
									teacher, more good guide. I don't want to
									work in a company with this programming, but
									i want to be a app owner. But because of my
									many problems, I know that this is not
									really possible. for example{" "}
									<span
										onClick={(e) => {
											setForimg(true);
										}}
									>
										click here
									</span>{" "}
									{bigWin ? "and" : "..."}{" "}
									{bigWin && (
										<span
											className="tr"
											onClick={(e) => {
												ltaRef.current.click();
												setReadMore(!readMore);
											}}
										>
											{readMore
												? "see less"
												: "Read more"}
											...
										</span>
									)}
								</p>
							)}
							{readMore && (
								<p>
									<p className="p-t">
										My goal is Mobile Developer. I want to
										use Javascript for this and React
										Native. Because I started programming
										with javascript from Msquare Programming
										YouTube Channel and more. I want to
										learn Python for backend. But I think
										there is no one who can explain Python
										basic like Msquare Programming teacher.
									</p>{" "}
									<p className="p-t">
										My goal is Mobile Developer. I want to
										use Javascript for this and React
										Native. Because I started programming
										with javascript from Msquare Programming
										YouTube Channel and more. I want to
										learn Python for backend. But I think
										there is no one who can explain Python
										basic like Msquare Programming teacher.
									</p>{" "}
									<p className="p-t">
										My goal is Mobile Developer. I want to
										use Javascript for this and React
										Native. Because I started programming
										with javascript from Msquare Programming
										YouTube Channel and more. I want to
										learn Pytho4 for backend. But I think
										there is no one who can explain Python
										basic like Msquare Programming teacher.{" "}
										<span
											onClick={() => {
												ltaRef.current.click();
												setReadMore(!readMore);
											}}
										>
											see less...
										</span>
									</p>
								</p>
							)}
						</div>
					</div>
				</div>
				{aboutMe === "I know you" && (
					<div className="flex popup">
						<p>do you want to enter my family page?</p>
						<div className="btn-container">
							<Button
								onClick={() => {
									setAboutMe(false);
									setAskhow(true);
									ltaRef.current.click();
								}}
								className="yes"
							>
								Yes
							</Button>
							<Button onClick={() => setAboutMe(null)}>No</Button>
						</div>
					</div>
				)}
				{askhow && (
					<Askhow
						checkValue={checkValue}
						setAskhow={setAskhow}
						setInpValue={setInpValue}
						inpValue={inpValue}
					/>
				)}
				{forimg && <Forfun setForimg={setForimg} />}
				<div className="button w-100 wr-flex flex-wrap mt-40">
					{["I know you", "About me", "My Skills"].map((i) => (
						<Button
							onClick={() => {
								setAboutMe(i);
								setAskhow(false);
							}}
							key={i}
							className={`${readMore ? "sh" : ""}`}
						>
							{i}
						</Button>
					))}
				</div>
			</div>
		);
	} else if (family === "yaminaye") {
		return <Family />;
	}
};

export default About;
