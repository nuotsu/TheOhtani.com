import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

const url = new URL('https://statsapi.mlb.com/api/v1/people/660271/stats')

const currentYear = new Date().getFullYear()
const seasons = [...Array(currentYear - 2017).keys()].map((i) => currentYear - i)

Object.entries({
	group: 'hitting,pitching',
	stats: 'season,career',
	// statFields: 'standard,advanced',
	seasons: seasons.join(','),
	game_type: 'R',
}).forEach(([key, value]) => url.searchParams.set(key, value))

export const GET: RequestHandler = async () => {
	const response = await fetch(url.toString(), {})

	const data = await response.json()
	const [
		{ splits: seasonPitchingSplits },
		{ splits: seasonHittingSplits },
		{
			splits: [careerPitchingSplits],
		},
		{
			splits: [careerHittingSplits],
		},
	] = data.stats

	let stats = {} as App.StatsResponse

	seasons.forEach((year) => {
		stats[year] = {
			pitching:
				seasonPitchingSplits.find(({ season }: SeasonStat) => season === year.toString())?.stat ||
				{},
			hitting:
				seasonHittingSplits.find(({ season }: SeasonStat) => season === year.toString())?.stat ||
				{},
		}
	})

	stats.career = {
		hitting: careerHittingSplits.stat,
		pitching: careerPitchingSplits.stat,
	}

	return json(stats)
}

type SeasonStat = {
	season: string
	stat: Record<string, number | string>
}
