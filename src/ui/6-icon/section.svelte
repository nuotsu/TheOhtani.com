<script lang="ts">
	import { activateTableOfContents, intersectionObserver } from '$lib/intersection-observer'
	import Count from '$ui/count.svelte'
	import P from '$ui/paragraph-reveal.svelte'

	let innerHeight = $state(0)
</script>

<svelte:head>
	<link rel="preload" href="/videos/ohtani-back.mp4" as="video" type="video/mp4" />
</svelte:head>

<svelte:window bind:innerHeight />

<section
	id="icon"
	class="relative grid-system pb-[25lvh]"
	{@attach intersectionObserver(activateTableOfContents[0], {
		rootMargin: `${innerHeight / 2}px 0px 0px 0px`,
	})}
>
	<video
		class="pointer-events-none absolute inset-0 -z-1 size-full mask-b-from-50% object-cover opacity-50"
		src="/videos/ohtani-back.mp4"
		autoplay
		muted
		loop
		playsinline
	></video>

	<h2 class="top-rlh col-span-full h2 md:sticky">
		<Count>Icon.</Count>
	</h2>

	<div class="col-span-full grid grid-cols-subgrid gap-lh">
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
	</div>

	<div class="col-span-full grid min-h-[50svh] place-items-center">
		<P class="text-center h2">And the story continues...</P>
	</div>
</section>

<style>
	div p {
		animation: ease-in-out forwards;
		animation-timeline: view();

		@media (width >= 48rem) {
			animation-name: slide-desktop;
		}

		@media (width < 48rem) {
			animation-name: slide-mobile;
		}
	}

	@keyframes slide-desktop {
		0% {
			opacity: calc(1 - ((sibling-index() + 1) / (sibling-count() + 2)));
			translate: 0 calc((sibling-index()) * 0.5lh);
			filter: blur(1ch);
		}

		50% {
			filter: none;
		}

		100% {
			translate: 0 calc((sibling-index()) * 1.5lh);
		}
	}

	@keyframes slide-mobile {
		0% {
			opacity: 0;
			filter: blur(1ch);
			translate: 0 1lh;
		}

		50% {
			filter: none;
		}

		100% {
			opacity: 1;
			translate: 0 0;
		}
	}
</style>
