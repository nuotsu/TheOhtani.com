import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch }) => {
	const [viewsResponse, statsResponse, worldResponse] = await Promise.all([
		fetch('/api/views'),
		fetch('/api/stats'),
		fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json'),
	])

	const { views } = (await viewsResponse.json()) satisfies App.ViewsResponse
	const stats = (await statsResponse.json()) satisfies App.StatsResponse
	const worldData = await worldResponse.json()

	return { views, stats, worldData }
}
