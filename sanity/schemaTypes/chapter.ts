import { defineArrayMember, defineField, defineType } from 'sanity'
import { orderRankField } from '@sanity/orderable-document-list'

export default defineType({
	name: 'chapter',
	title: 'Chapter',
	type: 'document',
	fields: [
		orderRankField({ type: 'chapter' }),
		defineField({
			name: 'images',
			type: 'array',
			options: {
				layout: 'grid',
			},
			of: [
				defineArrayMember({
					type: 'image',
					fields: [
						defineField({
							name: 'prompt',
							type: 'string',
						}),
					],
				}),
			],
		}),
	],
	preview: {
		select: {
			images: 'images',
		},
		prepare: ({ images }) => ({
			media: images?.[0],
		}),
	},
})
