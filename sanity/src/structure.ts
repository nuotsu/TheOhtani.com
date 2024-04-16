import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import type { StructureResolver } from 'sanity/structure'

const structure: StructureResolver = (S, context) =>
	S.list()
		.title('Content')
		.items([
			orderableDocumentListDeskItem({
				type: 'chapter',
				title: 'Chapters',
				S,
				context,
			}),
		])

export default structure
