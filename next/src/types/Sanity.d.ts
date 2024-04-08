import type { SanityDocument, SanityImageAssetDocument } from 'next-sanity'

declare global {
	namespace Sanity {
		// documents

		type Site = SanityDocument & {
			title: string
			menu?: (Link | LinkList)[]
			ogimage?: string
		}

		type Page = SanityDocument & {
			readonly _type: 'page'
			title: string
			noIndex: boolean
			modules?: Module[]
			metadata: Metadata
		}

		type Category = SanityDocument & {
			metadata: Metadata
			count?: number
			items?: Artwork[]
		}

		type Artwork = SanityDocument & {
			title: string
			image: Image
			description: any
			category: Category
			slug: { current: string }
		}

		type Collection = SanityDocument & {
			items: Artwork[]
			metadata: Metadata
		}

		// objects

		type CTA = {
			link?: Link
			style?: string
		}

		type Image = SanityImageAssetDocument & {
			alt?: string
		}

		type Link = {
			readonly _type: 'link'
			label: string
			type: 'internal' | 'external'
			internal?: Page
			external?: string
			params?: string
		}

		type LinkList = {
			readonly _type: 'link.list'
			label: string
			links?: Link[]
		}

		type Metadata = {
			title: string
			description: string
			slug: { current: string }
		}

		type Module = {
			_type: string
			_key: string
		}
	}
}

export {}
