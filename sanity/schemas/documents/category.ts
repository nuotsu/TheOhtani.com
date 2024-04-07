import { VscTag } from 'react-icons/vsc'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'category',
	title: 'Category',
	icon: VscTag,
	type: 'document',
	fields: [
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
