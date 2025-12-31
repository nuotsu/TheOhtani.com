<script lang="ts">
	import { activateTableOfContents, intersectionObserver } from '$lib/intersection-observer'

	const items = [
		{
			date: '2018',
			description:
				'Los Angeles Angels. Opening Day: 3 hits including a home run. AL Rookie of the Year. The experiment begins.',
		},
		{
			date: '2021',
			description:
				"Unanimous AL MVP. 46 HR. 100 Ks. 100 RBIs. Numbers that shouldn't coexist. The debate ends.",
		},
		{
			date: 'March 2023',
			description:
				'World Baseball Classic. Team Japan captain. Facing Mike Trout, Team USA captain, for the final out. Slider. Strikeout. Champions. Poetry.',
		},
		{ date: '2023', description: 'Second unanimous AL MVP. American League home run champion.' },
		{
			date: 'December 2023',
			description: '$700 million. Los Angeles Dodgers. The stage finally worthy of the player.',
		},
		{
			date: '2024',
			description:
				'54 HR. 59 SB. First 50/50 season in history. Third unanimous MVP. World Series champion.',
		},
		{
			date: '2025',
			description:
				'55 HR. historic NLCS Game 4 with 3 HRs and 10 Ks. Back-to-back World Series champion.',
		},
	]
</script>

<section
	id="ascension"
	class="grid-system p-lh"
	{@attach intersectionObserver(...activateTableOfContents)}
>
	<h2>Ascension</h2>

	<dl class="grid grid-cols-[auto_1fr] gap-ch">
		{#each items as item}
			<div class="col-span-full grid grid-cols-subgrid">
				<dt class="text-right">
					<time class="tabular-nums" datetime={item.date}>{item.date}</time>
				</dt>

				<dd>{item.description}</dd>
			</div>
		{/each}
	</dl>
</section>
