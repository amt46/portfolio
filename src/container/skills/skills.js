import React from 'react'

const Skills = () => {
	const skills = [
		{ name: "HTML", img: "", level: "" },
		{ name: "CSS", img: "", level: "" },
		{ name: "Javascript", img: "", level: "" },
		{ name: "Scss", img: "", level: "" },
		{ name: "Tailwind css", img: "", level: "" },
		{ name: "React", img: "", level: ""},
		{ name: "React Native", img: "", level: "" },
		{ name: "Next Js", img: "", level: "" },
		{ name: "MySql", img: "", level: "" },
		{ name: "Mongodb", img: "", level: "" },
		{ name: "Sanity", img: "", level: "" },
		{ name: "PhotoShop", img: "", level: "" },
		{ name: "PHP", img: "", level: "" },
		{ name: "Vim", img: "", level: "" },
	]
	return (
		<div className="app__ mh-100" >
		{skills.map((i, index) => (
			<div key={index}>
				<h3>{i.name}</h3>
			</div>
		))}
		</div>
	)
}

export default Skills
