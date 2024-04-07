// documents
import site from './documents/site'
import page from './documents/page'
import category from './documents/category'
import artwork from './documents/artwork'
import collection from './documents/collection'

// objects
import cta from './objects/cta'
import link from './objects/link'
import linkList from './objects/link.list'
import metadata from './objects/metadata'

// modules
import heroCentered from './modules/hero.centered'
import heroPostcard from './modules/hero.postcard'
import faqList from './modules/faq-list'

export const schemaTypes = [
	// documents
	site,
	page,
	category,
	artwork,
	collection,

	// objects
	cta,
	link,
	linkList,
	metadata,

	// modules
	faqList,
	heroCentered,
	heroPostcard,
]
