import { defineField, defineType } from 'sanity'
import { orderRankField } from '@sanity/orderable-document-list'
import { getBlockText } from '../src/utils'
import { TbLanguageHiragana } from 'react-icons/tb'
import Ruby from '../components/Ruby'

export default defineType({
	name: 'chapter',
	title: 'Chapter',
	type: 'document',
	fields: [
		orderRankField({ type: 'chapter' }),
		defineField({
			name: 'image',
			type: 'image',
			fields: [
				defineField({
					name: 'prompt',
					type: 'string',
				}),
			],
		}),
		defineField({
			name: 'content',
			type: 'array',
			of: [
				{
					type: 'block',
					marks: {
						annotations: [
							{
								name: 'ruby',
								title: 'Ruby',
								type: 'object',
								icon: TbLanguageHiragana,
								fields: [
									defineField({
										name: 'annotation',
										type: 'string',
									}),
								],
								components: {
									annotation: Ruby,
								},
							},
						],
					},
				},
			],
		}),
		defineField({
			name: 'isQuote',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			name: 'references',
			type: 'array',
			of: [{ type: 'image' }, { type: 'video' }],
		}),
	],
	preview: {
		select: {
			content: 'content',
			media: 'image',
		},
		prepare: ({ content, media }) => ({
			title: getBlockText(content),
			media,
		}),
	},
})
