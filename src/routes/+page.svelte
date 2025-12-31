<script lang="ts">
	import Hero from '$ui/0-hero/section.svelte'
	import O from '$ui/1-one-of-one/section.svelte'
	import H from '$ui/2-humble-beginnings/section.svelte'
	import T from '$ui/3-testament/section.svelte'
	import A from '$ui/4-ascension/section.svelte'
	import N from '$ui/5-numbers/section.svelte'
	import I from '$ui/6-icon/section.svelte'
	import Footer from '$ui/footer.svelte'
	import TableOfContents from '$ui/table-of-contents.svelte'
</script>

<Hero />
<TableOfContents />

<main>
	<O />
	<H />
	<T />
	<A />
	<N />
	<I />
</main>

<Footer />

<style>
	main :global(section) {
		min-height: 100lvh;
	}
</style>
