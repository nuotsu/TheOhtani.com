import { defineField, defineType } from 'sanity'
import { IoIosImage } from 'react-icons/io'

export default defineType({
	name: 'artwork',
	title: 'Artwork',
	icon: IoIosImage,
	type: 'document',
	fieldsets: [{ name: 'metadata', title: 'Image metadata' }],
	fields: [
		defineField({
			name: 'image',
			type: 'image',
			fields: [
				defineField({
					name: 'caption',
					type: 'text',
					rows: 2,
				}),
			],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
				},
			],
		}),
		defineField({
			name: 'category',
			type: 'reference',
			to: [{ type: 'category' }],
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: (doc: any) => doc.title,
			},
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'description',
			subtitle: 'slug.current',
			media: 'image',
		},
	},
})
