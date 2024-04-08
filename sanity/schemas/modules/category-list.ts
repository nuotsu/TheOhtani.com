import { defineField, defineType } from 'sanity'
import { VscTag } from 'react-icons/vsc'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'category-list',
	title: 'Category list',
	icon: VscTag,
	type: 'object',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'Category list',
		}),
	},
})
