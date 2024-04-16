import { client, groq } from '$lib/sanity'
import type { PageServerLoad } from './$types'
import type { Chapter } from '../types/sanity.types'

export const load: PageServerLoad = async () => {
	const chapters = await client.fetch<Chapter[]>(
		groq`*[_type == 'chapter']|order(orderRank)`,
	)

	return {
		chapters,
	}
}
