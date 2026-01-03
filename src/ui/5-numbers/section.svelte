<script lang="ts">
	import { activateTableOfContents, intersectionObserver } from '$lib/intersection-observer'
	import Feats from './feats.svelte'
	import Stats from './stats.svelte'
</script>

<section
	id="numbers"
	class="grid-system p-lh"
	{@attach intersectionObserver(...activateTableOfContents)}
>
	<header
		class="top-rlh z-2 col-span-full mb-auto grid gap-lh mix-blend-difference md:sticky md:col-span-2 md:row-[1/2] md:grid-cols-subgrid"
	>
		<h2 class="h2">Numbers.</h2>

		<p>
			The digits that define dominance. The statistics that shattered expectations. The records that
			will echo through eternity.
		</p>
	</header>

	<Feats />
	<Stats />
</section>
