import { defineField, defineType } from 'sanity'
import { orderRankField } from '@sanity/orderable-document-list'

export default defineType({
	name: 'chapter',
	title: 'Chapter',
	type: 'document',
	fields: [
		orderRankField({ type: 'chapter' }),
		defineField({
			name: 'mainImage',
			type: 'image',
			fields: [
				defineField({
					name: 'prompt',
					type: 'string',
				}),
			],
		}),
	],
})
