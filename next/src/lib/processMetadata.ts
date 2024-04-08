import getSite from './getSite'
import { BASE_URL } from './env'
import type { Metadata } from 'next'

export default async function processMetadata({
	metadata,
	noIndex,
}: {
	metadata: Sanity.Metadata
	noIndex?: boolean
}): Promise<Metadata> {
	const { ogimage } = await getSite()
	const { title, description, slug } = metadata

	return {
		metadataBase: new URL(BASE_URL),
		title,
		description,
		openGraph: {
			type: 'website',
			url: [slug?.current === 'index' ? '/' : slug?.current]
				.filter(Boolean)
				.join('/'),
			title,
			description,
			images: ogimage && [ogimage],
		},
		robots: {
			index: !noIndex,
		},
	}
}
