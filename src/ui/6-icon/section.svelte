<script lang="ts">
	import { activateTableOfContents, intersectionObserver } from '$lib/intersection-observer'

	let innerHeight = $state(48)
</script>

<svelte:window bind:innerHeight />

<section
	id="icon"
	class="grid-system p-lh"
	{@attach intersectionObserver(activateTableOfContents[0], {
		rootMargin: `-${innerHeight / 2}px 0px 0px 0px`,
	})}
>
	<h2 class="top-rlh col-span-full h2 md:sticky">Icon.</h2>

	<p class="max-md:col-span-2">
		Beyond the statistics and the highlights, Shohei Ohtani has become an icon—a symbol of what's
		possible when you refuse to accept limitations.
	</p>
	<p class="max-md:col-span-2">
		He transcends baseball. A symbol of excellence without ego. Power without arrogance. Greatness
		with grace.
	</p>
	<p class="max-md:col-span-2">
		Shohei Ohtani taught a generation that limits are negotiable. That impossible is just a word.
		That humility and dominance can coexist.
	</p>
	<p class="max-md:col-span-2">
		His legacy isn't just records—it's permission. To dream bigger. To work harder. To be
		extraordinary while remaining yourself.
	</p>

	<p class="col-span-full text-center">And the story continues...</p>
</section>
