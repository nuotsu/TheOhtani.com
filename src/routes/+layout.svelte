<script lang="ts">
	import './app.css'
	import ShowGrid from '$ui/show-grid.svelte'
	import favicon from '$lib/assets/favicon.svg'

	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="col-span-full grid grid-cols-subgrid gap-lh">
	{@render children()}
</main>

<fieldset class="col-span-full">
	<ShowGrid />
</fieldset>
