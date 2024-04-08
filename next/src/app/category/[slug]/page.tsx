import { fetchSanity, groq } from '@/lib/sanity'
import Category from './Category'
import { notFound } from 'next/navigation'
import processMetadata from '@/lib/processMetadata'

export default async function Page({ params }: Props) {
	const category = await getCategory({ params })
	if (!category) notFound()
	return <Category category={category} />
}

export async function generateMetadata({ params }: Props) {
	const category = await getCategory({ params })
	if (!category) notFound()
	return processMetadata(category)
}

async function getCategory({ params }: Props) {
	return await fetchSanity<Sanity.Category>(
		groq`*[_type == 'category' && metadata.slug.current == $slug][0]{
			...,
			'items': *[_type == 'artwork' && references(^._id)]|order(slug.current asc){
				...,
				'title': pt::text(description)
			}
		}`,
		{
			params: { slug: params.slug },
			tags: ['category'],
		},
	)
}

type Props = {
	params: { slug: string }
}
