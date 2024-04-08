import { fetchSanity, groq } from '@/lib/sanity'
import Artwork from './Artwork'
import { notFound } from 'next/navigation'
import processMetadata from '@/lib/processMetadata'

export default async function ({ params }: Props) {
	const artwork = await getArtwork({ params })
	if (!artwork) notFound()
	return <Artwork artwork={artwork} />
}

export async function generateMetadata({ params }: Props) {
	const artwork = await getArtwork({ params })
	if (!artwork) notFound()
	return processMetadata({
		metadata: {
			title: artwork.title,
			description: artwork.title,
			slug: artwork.slug,
		},
	})
}

async function getArtwork({ params }: Props) {
	return await fetchSanity<Sanity.Artwork>(
		groq`*[_type == 'artwork' && slug.current == $slug][0]{
			...,
			'title': pt::text(description),
			category->
		}`,
		{
			params: { slug: params.slug },
			tags: ['pages'],
		},
	)
}

type Props = {
	params: {
		slug: string
	}
}
