<script lang="ts">
	import { intersectionObserver } from '$lib/intersection-observer'
	import Hero from '$ui/0-hero/section.svelte'
	import O from '$ui/1-one-of-one/section.svelte'
	import H from '$ui/2-humble-beginnings/section.svelte'
	import T from '$ui/3-testament/section.svelte'
	import A from '$ui/4-ascension/section.svelte'
	import N from '$ui/5-numbers/section.svelte'
	import I from '$ui/6-icon/section.svelte'
	import BaseballCaps from '$ui/baseball-caps/section.svelte'
	import Facade from '$ui/facade.svelte'
	import Footer from '$ui/footer.svelte'
	import Progress from '$ui/progress.svelte'
	import TableOfContents from '$ui/table-of-contents.svelte'

	let innerHeight = $state(0)
</script>

<svelte:window bind:innerHeight />

<Facade />
<Hero />
<TableOfContents />

<main
	{@attach intersectionObserver(
		(entry) => {
			const progress = document.querySelector('#progress')

			if (entry.isIntersecting) {
				progress?.classList.add('in-intersecting')
			} else {
				progress?.classList.remove('in-intersecting')
			}
		},
		{ rootMargin: `${innerHeight / 2}px 0px -${innerHeight * 0.25}px 0px` },
	)}
>
	<Progress />

	<O />
	<H />
	<T />

	<BaseballCaps />

	<A />
	<N />
	<I />
</main>

<Footer />

<style>
	main {
		padding-block-start: 50svh;

		:global(section) {
			padding: 2lh 1lh;
			min-height: 100lvh;
			isolation: isolate;
		}
	}
</style>
