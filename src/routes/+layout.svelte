<script lang="ts">
	import './app.css'
	import ShowGrid from '$ui/show-grid.svelte'
	import favicon from '$lib/assets/favicon.svg'

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
