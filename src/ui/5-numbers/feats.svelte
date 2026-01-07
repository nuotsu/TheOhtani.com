<script lang="ts">
	const feats: {
		title: string
		description: string
		dates: string[]
		external?: string
	}[] = [
		{
			title: 'Most Unanimous MVPs',
			description:
				'Ohtani has won all four of his MVP awards by a unanimous vote. The first and only player to win MVP in both the American and National Leagues, and second only to Barry Bonds (7) in total MVP awards.',
			dates: ['2021', '2023', '2024', '2025'],
		},
		{
			title: 'Two-Way All-Star',
			description:
				'Ohtani is the only player in MLB history to be selected as an All-Star as both a pitcher and a position player in the same season, a feat he accomplished three times.',
			dates: ['2021', '2022', '2023'],
		},
		{
			title: 'Ohtani Rule',
			description:
				'The rule that allows a starting pitcher who also serves as the DH to remain in the game as the DH after being removed from the mound.',
			dates: ['2022'],
		},
		{
			title: 'Home Run Leader as a Pitcher (simultaneous)',
			description:
				'Ohtani and Babe Ruth are the only players in MLB history to start a game as a pitcher while also leading the league in home runs at that time.',
			dates: ['2021', '2025'],
		},
		{
			title: '10 HRs & 100 Strikeouts in a Season',
			description:
				'Ohtani is also the first player in history to record 10 or more home runs as a hitter and 100 or more strikeouts as a pitcher in the same season.',
			dates: ['2021'],
		},
		{
			title: '10 Wins & 30 HRs in a Season',
			description:
				'Ohtani is the only player in MLB history with a season of at least 10 pitching wins and 30 home runs as a batter.',
			dates: ['2022'],
		},
		{
			title: 'Largest Contract in Sports History',
			description: 'Ohtani signed a 10-year, $700 million contract with the Los Angeles Dodgers.',
			dates: ['Dec 2023'],
		},
		{
			title: 'First 50/50 Season',
			description:
				'Ohtani became the only player in MLB history to record 50 home runs and 50 stolen bases in a single season.',
			dates: ['Sept 2024'],
			external: 'https://www.youtube.com/watch?v=-jYfC4YYXIw',
		},
		{
			title: 'Fastest to 40/40',
			description:
				'Ohtani became the fastest player to reach 40 home runs and 40 stolen bases in a single season, achieving the feat in just 126 games, shattering the previous record held by Alfonso Soriano (147 games).',
			dates: ['August 2024'],
		},
		{
			title: 'Most Home Runs by a Japanese-born Player',
			description:
				"Ohtani broke Hideki Matsui's record for most career home runs by a Japanese-born player in MLB history.",
			dates: ['April 2024'],
		},
		{
			title: '3 HRs + 10 Ks, NLCS Game 4',
			description:
				'Ohtani hit 3 home runs and struck out 10 batters over 6 scoreless innings, leading the Dodgers to the World Series. Joined Bob Gibson as the only pitchers with 10+ Ks and a HR in the same postseason game.',
			dates: ['Postseason 2025'],
			external: 'https://www.youtube.com/watch?v=iFvryLA67bQ',
		},
	]
</script>

<dl class="col-span-full grid grid-cols-subgrid gap-lh md:col-span-2 md:row-[1/4]">
	{#each feats as { title, description, dates, external } (title)}
		<div class="col-span-full grid grid-cols-subgrid">
			<dt class="flex flex-col gap-[.25ch] text-right text-balance max-md:col-span-2">
				<h3 class="font-serif text-xl leading-tight">{title}</h3>

				{#if dates}
					<div class="gap-x-ch text-sm">
						{#each dates as date, i}
							<button
								class="not-hover:text-neutral-400 not-hover:transition-[color]"
								onclick={() => {
									const statsSelect = document.querySelector(`#stats select`) as HTMLSelectElement
									const [year] = date.match(/\d{4}/) ?? [new Date().getFullYear().toString()]
									statsSelect.value = year
									statsSelect.dispatchEvent(new Event('change'))
								}}
							>
								<time datetime={date}>
									{date}
								</time>
							</button><!--
							-->{#if i < dates.length - 1}<span class="text-neutral-400">{', '}</span
								>{/if}
						{/each}
					</div>
				{/if}
			</dt>

			<dd class="max-md:col-span-2">
				{description}

				{#if external}
					<a class="action mt-1 ml-1 text-sm" href={external} target="_blank">
						{#if external.includes('youtube')}
							Watch video
							<!-- prettier-ignore -->
							<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
						{:else}
							Read more
						{/if}
					</a>
				{/if}
			</dd>
		</div>
	{/each}
</dl>

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

	svg {
		width: 1.8ch;
		height: 1.8ch;
	}
</style>
