import { defineField, defineType } from 'sanity'
import { IoIosImages } from 'react-icons/io'

export default defineType({
	name: 'collection',
	title: 'Collection',
	type: 'document',
	icon: IoIosImages,
	fields: [
		defineField({
			name: 'items',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'artwork' }] }],
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'metadata.title',
		},
	},
})
