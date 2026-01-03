import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch }) => {
	const viewsResponse = await fetch('/api/views')
	const { views } = (await viewsResponse.json()) satisfies App.ViewsResponse

	const statsResponse = await fetch('/api/stats')
	const stats = (await statsResponse.json()) satisfies App.StatsResponse

	return { views, stats }
}
