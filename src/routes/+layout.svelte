<script lang="ts">
	import favicon from '$lib/assets/favicon.svg'
	import ShowGrid from '$ui/show-grid.svelte'
	import './app.css'

	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<meta name="theme-color" content="#000" />
</svelte:head>

<!-- <Facade /> -->

<main class="col-[bleed] grid grid-cols-subgrid">
	{@render children()}
</main>

<fieldset class="col-[bleed] canvas bg-neutral-100 p-lh font-mono">
	<ShowGrid />
</fieldset>

<style>
	main :global(> section) {
		position: relative;
	}
</style>
