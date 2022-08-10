export default {
	name: "projects",
	title: "Projects",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "github",
			title: "Github",
			type: "string",
		},
		{
			name: "desc",
			title: "Desc",
			type: "string",
		},
		{
			name: "link",
			title: "Link",
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
	],
};
