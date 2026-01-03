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

	const [seasonHittingSplits, seasonPitchingSplits, careerHittingSplits, careerPitchingSplits] = [
		data.stats.find(
			({ type, group }: { type: DisplayName; group: DisplayName }) =>
				type.displayName === 'season' && group.displayName === 'hitting',
		),
		data.stats.find(
			({ type, group }: { type: DisplayName; group: DisplayName }) =>
				type.displayName === 'season' && group.displayName === 'pitching',
		),
		data.stats.find(
			({ type, group }: { type: DisplayName; group: DisplayName }) =>
				type.displayName === 'career' && group.displayName === 'hitting',
		),
		data.stats.find(
			({ type, group }: { type: DisplayName; group: DisplayName }) =>
				type.displayName === 'career' && group.displayName === 'pitching',
		),
	].map(({ splits }) => splits)

	let stats = {} as App.StatsResponse

	seasons.forEach((year) => {
		stats[year] = {
			hitting:
				seasonHittingSplits.find(({ season }: SeasonStat) => season === year.toString())?.stat ||
				{},
			pitching:
				seasonPitchingSplits.find(({ season }: SeasonStat) => season === year.toString())?.stat ||
				{},
		}
	})

	stats.career = {
		hitting: careerHittingSplits[0].stat,
		pitching: careerPitchingSplits[0].stat,
	}

	return json(stats)
}

type DisplayName = {
	displayName: string
}

type SeasonStat = {
	season: string
	stat: Record<string, number | string>
}
