<script lang="ts">
	import { activateTableOfContents, intersectionObserver } from '$lib/intersection-observer'

	const feats = [
		{
			title: 'Most Unanimous MVPs',
			description:
				'Ohtani has won all four of his MVP awards by a unanimous vote. The first and only player to win MVP in both the American and National Leagues, and second only to Barry Bonds (7) in total MVP awards.',
			date: '2021, 2023, 2024, 2025',
		},
		{
			title: 'Two-Way All-Star',
			description:
				'He is the only player in MLB history to be selected as an All-Star as both a pitcher and a position player in the same season, a feat he accomplished three times.',
		},
		{
			title: 'Largest Contract in Sports History',
			description: 'Ohtani signed a 10-year, $700 million contract with the Los Angeles Dodgers.',
			date: 'December 2023',
		},
		{
			title: 'First 50/50 Season',
			description:
				'Ohtani became the only player in MLB history to record 50 home runs and 50 stolen bases in a single season.',
			date: '2024',
		},
		{
			title: 'Fastest to 40/40',
			description:
				'Ohtani became the fastest player to reach 40 home runs and 40 stolen bases in a single season, achieving the feat in just 126 games, shattering the previous record held by Alfonso Soriano (147 games).',
			date: 'August 23, 2024',
		},
		{
			title: '10 Wins & 30 HRs in a Season',
			description:
				'Ohtani is the only player in MLB history with a season of at least 10 pitching wins and 30 home runs as a batter.',
			date: '2022',
		},
		{
			title: '10 HRs & 100 Strikeouts in a Season',
			description:
				'He is also the first player in history to record 10 or more home runs as a hitter and 100 or more strikeouts as a pitcher in the same season.',
			date: '2021',
		},
		{
			title: 'Home Run Leader as a Pitcher (simultaneous)',
			description:
				'He and Babe Ruth are the only players in MLB history to start a game as a pitcher while also leading the league in home runs at that time.',
			date: null,
		},
		{
			title: 'Most Home Runs by a Japanese-born Player',
			description:
				"Ohtani broke Hideki Matsui's record for most career home runs by a Japanese-born player in MLB history.",
			date: 'April 2024',
		},
		{
			title: 'Ohtani Rule',
			description:
				'The rule that allows a starting pitcher who also serves as the DH to remain in the game as the DH after being removed from the mound.',
			date: '2022',
		},
	]
</script>

<section
	id="numbers"
	class="grid-system p-lh"
	{@attach intersectionObserver(...activateTableOfContents)}
>
	<header
		class="top-rlh col-span-full mb-auto grid gap-lh md:sticky md:col-span-2 md:grid-cols-subgrid"
	>
		<h2 class="h2">Numbers.</h2>
		<p>
			The digits that define dominance. The statistics that shattered expectations. The records that
			will echo through eternity.
		</p>
	</header>

	<dl class="col-span-full grid grid-cols-subgrid gap-lh md:col-span-2">
		{#each feats as { title, description, date }}
			<div class="col-span-full grid grid-cols-subgrid">
				<dt class="text-right text-balance max-md:col-span-2">
					{title}

					{#if date}
						<time class="mt-[.5ch] block text-sm text-neutral-400" datetime={date}>
							{date}
						</time>
					{/if}
				</dt>

				<dd class="max-md:col-span-2">
					{description}
				</dd>
			</div>
		{/each}
	</dl>
</section>

<style>
	dt,
	dd {
		animation: slide ease-out;
		animation-timeline: view();

		@supports (animation-timeline: view()) {
			opacity: 0.5;
		}
	}

	dd {
		--x: 1lh;
	}

	@keyframes slide {
		0% {
			translate: var(--x, -1lh) 0;
			opacity: 0;
			filter: blur(1ch);
		}

		25% {
			filter: none;
		}

		50% {
			translate: 0 0;
			opacity: 1;
		}
	}
</style>
