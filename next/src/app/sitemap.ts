import { fetchSanity, groq } from '@/lib/sanity'
import { BASE_URL } from '@/lib/env'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const allPages = await fetchSanity<Record<string, MetadataRoute.Sitemap>>(
		groq`{
			'pages': *[_type == 'page' && !(metadata.slug.current in ['404']) && noIndex != true]|order(metadata.slug.current){
				'url': $baseUrl + select(metadata.slug.current == 'index' => '', metadata.slug.current),
				'lastModified': _updatedAt,
				'priority': select(
					metadata.slug.current == 'index' => 1,
					0.5
				),
			}
		}`,
		{
			params: {
				baseUrl: BASE_URL + '/',
			},
		},
	)

	console.log({ allPages })

	return Object.values(allPages).flat()
}
