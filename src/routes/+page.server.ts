import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/views')
	const { views } = await response.json()

	return { views }
}
