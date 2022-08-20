import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
export const client = sanityClient({
	projectId: "hsn2s2r7",
	dataset: 'production',
	apiVersion: '2022-02-01',
	useCdn: true,
	token: "skmqk9Kykruw3koqwN1hD56AcAlvDZcP6HdHZtntKlscFSfkIKxYzW3PysJInAnwlBC9UZxkG8ZHHgwRYHydDmdzMyYoHIn2O5qDQPQFjh5q14WGwom6MrrZKwMsdiWYPoCLvawJgXDF6hSU8qgkdsLie4iqRxAUv09ZwHyriZnoMp7NKFvX", 
})
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
