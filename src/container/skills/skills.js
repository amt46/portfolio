import React, { useEffect, useState } from "react";
import { images } from "../../constants";

import { client, urlFor } from "../../client";
import "./skills.scss";
const Skills = () => {
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		const query = '*[_type == "skills"]';
		client
			.fetch(query)
			.then((data) => {
				setSkills(
					data.sort((a, b) => {
						return b.skill.length - a.skill.length;
					})
				);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="pl-30 w-100 flex flex-col">
			{skills?.map((i, index) => (
				<div className="w-99 sc m-5" key={index}>
					<p className="font-medium leading-tight text-2xl mt-0 mb-2 s-1 ml-20 drop-shadow-sm">{i.title}</p>
					<div className="i s-2 flex flex-wrap">
						{i.skill.map((a, j) => (
							<div
								key={j}
								className="wpx-90 m-5 wr-flex hpx-90 ml-50"
							>
								<img
									className="w-full h-full object-contain drop-shadow-sm"
									style={
										a.name === "Neovim" ||
										a.name === "Vim" ||
										a.name === "Visual Studio Code" ||
										a.name === "Github"
											? { width: "80%", height: "80%" }
											: {}
									}
									src={urlFor(a.imageurl)}
									alt={a.name}
								/>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Skills;
