<script lang="ts">
	import { activateTableOfContents, intersectionObserver } from '$lib/intersection-observer'
	import Count from '$ui/count.svelte'

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
			date: 'Dec 2023',
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
	class="mb-[4lh] grid-system"
	{@attach intersectionObserver(...activateTableOfContents)}
>
	<header class="grid items-end max-md:col-span-full">
		<h2 class="bottom-rlh h2 md:sticky">
			<Count>Ascension.</Count>
		</h2>
	</header>

	<dl
		class="relative col-span-full grid grid-cols-subgrid gap-lh md:col-span-2 md:grid-cols-[auto_1fr]"
		style:--item-count={items.length}
	>
		{#each items as item, i}
			<dt class="col-[1/2] text-right" style:grid-row="{i + 1} / {i + 2}">
				<time
					class="relative block bg-background tabular-nums outline-[.5lh] outline-background"
					datetime={item.date}
				>
					<span>{item.date}</span>
				</time>
			</dt>

			<dd class="col-[2/-1]">{item.description}</dd>
		{/each}
	</dl>
</section>

<style>
	@media (width >= 48rem) {
		h2 {
			animation: fade-in ease-in-out;
			animation-timeline: view();
		}
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}

		50% {
			opacity: 1;
		}
	}

	@property --timeline-progress {
		syntax: '<percentage>';
		initial-value: 0%;
		inherits: false;
	}

	dl::before {
		content: '';
		grid-column: 1 / 2;
		grid-row: 1 / var(--item-count);
		border-right: 1px solid color-mix(in srgb, currentColor 25%, transparent);
		margin-right: calc(2ch - 3px);
		translate: 0 1lh;
		clip-path: inset(0 0 var(--timeline-progress) 0);
		animation: line linear;
		animation-timeline: view();
	}

	@keyframes line {
		0%,
		15% {
			--timeline-progress: 100%;
		}

		70%,
		100% {
			--timeline-progress: 0%;
		}
	}

	dt time span,
	dd {
		animation: fade ease-out;
		animation-timeline: view();

		&:not(:last-child) {
			margin-bottom: 4lh;
		}
	}

	@keyframes fade {
		0%,
		25% {
			opacity: 0;
			filter: blur(1ch);
		}

		35% {
			filter: none;
		}

		50% {
			opacity: 1;
		}
	}
</style>
