export default {
	name: "skills",
	title: "Skills",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "skill",
			title: "Skill",
			type: "array",
			of: [
				{
					name: "name",
					title: "Name",
					type: "document",
					fields: [
						{
							name: "name",
							title: "Name",
							type: "string",
						},
						{
							name: "imageurl",
							title: "ImgUrl",
							type: "image",
							options: {
								hotspot: true,
							},
						},
						{
							name: "desc",
							title: "Desc",
							type: "string"
						}
					],
				},
			],
		},
	],
};
