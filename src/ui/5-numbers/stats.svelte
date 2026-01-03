<script lang="ts">
	import { page } from '$app/state'
	import Count from '$ui/count.svelte'

	const statsResponse = $derived(page.data.stats) satisfies App.StatsResponse
	const years = $derived(Object.keys(statsResponse).reverse().slice(1))

	const today = new Date()
	const offset = Number(today.getMonth() <= 3) // after April

	let selectedSeason = $state((today.getFullYear() - offset).toString())
</script>

<article
	id="stats"
	class="bottom-rlh col-span-full grid grid-cols-subgrid gap-y-[.5ch] md:sticky md:col-[1/3] md:row-[3/4]"
>
	<select
		class="col-span-full px-ch text-center hover:bg-current/10 md:ml-auto"
		bind:value={selectedSeason}
	>
		<optgroup label="Season">
			{#each years as year}
				<option value={year}>{year} Season stats</option>
			{/each}
		</optgroup>

		<option value="career">Career stats</option>
	</select>

	<dl class="col-span-full grid grid-cols-2 gap-x-rlh text-5xl md:grid-cols-[1fr_auto]">
		{@render stat('AVG', 'hitting', ['avg'], 'Batting average')}
		{@render stat('HR', 'hitting', ['homeRuns'], 'Home runs')}
		{@render stat('RBI', 'hitting', ['rbi'], 'Runs batted in')}
		{@render stat('SB', 'hitting', ['stolenBases'], 'Stolen bases')}
		{@render stat('W-L', 'pitching', ['wins', 'losses'], 'Win-loss record')}
		{@render stat('K', 'pitching', ['strikeOuts'], 'Strikeouts')}
		{@render stat('ERA', 'pitching', ['era'], 'Earned run average')}
	</dl>
</article>

{#snippet stat(short: string, group: 'hitting' | 'pitching', key: string[], long: string)}
	{#key selectedSeason}
		{@const stats = statsResponse[selectedSeason][group]}
		{#if stats}
			<dt class="text-right font-bold tabular-nums">
				<Count
					class="inline-block aria-[label='']:text-current/50 aria-[label='']:before:content-['-']"
				>
					{key
						.map((k) => stats[k])
						.filter(Boolean)
						.join('-')}
				</Count>
			</dt>

			<dd class="whitespace-nowrap [dt:has([aria-label=''])+&]:text-current/50">
				<abbr class="text-base no-underline" title={long}>{short}</abbr>
			</dd>
		{/if}
	{/key}
{/snippet}

<style>
	@media (width >= 48rem) {
		article {
			animation: appear ease-out;
			animation-timeline: view();
		}
	}

	@keyframes appear {
		0%,
		18% {
			opacity: 0;
			filter: blur(0.25ch);
			translate: -1lh 0;
		}

		25% {
			opacity: 1;
			translate: 0 0;
			filter: none;
		}
	}
</style>
