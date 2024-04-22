import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'video',
	title: 'Video',
	type: 'object',
	fields: [
		defineField({
			name: 'url',
			type: 'url',
		}),
		defineField({
			name: 'video',
			type: 'file',
		}),
		defineField({
			name: 'aspectRatio',
			type: 'number',
			initialValue: 1.78,
		}),
	],
	preview: {
		select: {
			title: 'url',
		},
	},
})
