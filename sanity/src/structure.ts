import { list, singleton } from './utils'
import type { StructureResolver } from 'sanity/structure'

import { VscServerProcess, VscTag } from 'react-icons/vsc'
import { IoIosImage, IoIosImages } from 'react-icons/io'

const structure: StructureResolver = (S, context) =>
	S.list()
		.title('Content')
		.items([
			singleton(S, 'Site', 'site').icon(VscServerProcess),
			list(S, 'Pages', 'page'),
			S.divider(),

			list(S, 'Categories', 'category').icon(VscTag),
			list(S, 'Artworks', 'artwork').icon(IoIosImage),
			list(S, 'Collections', 'collection').icon(IoIosImages),
		])

export default structure
